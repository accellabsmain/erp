
import { getDB, saveDB, generateId } from '../db';

export const mockSupabase = {
    auth: {
        getUser: async () => ({
            data: {
                user: {
                    id: "demo-user-id",
                    email: "demo@erp.accellabs.com",
                    user_metadata: { role: "Master" }
                }
            },
            error: null
        }),
        signInWithPassword: async () => ({ data: { user: {} }, error: null }),
        signUp: async () => ({ data: { user: {} }, error: null }),
        signOut: async () => ({ error: null }),
        admin: {
            listUsers: async () => ({ data: { users: [] }, error: null }),
            createUser: async () => ({ data: { user: {} }, error: null }),
            updateUserById: async () => ({ data: { user: {} }, error: null }),
        }
    },
    from: (table: string) => {
        const db = getDB();
        let data = db[table] || [];

        const chain = {
            select: (columns: string) => {
                // If columns contains *, we just return everything
                // If it contains categoria(*), we need to join
                if (columns.includes('kategori(*)')) {
                    data = data.map((item: any) => ({
                        ...item,
                        kategori: db.kategori.find((k: any) => k.id === item.kategori_id)
                    }));
                }
                if (columns.includes('karyawan(*)')) {
                    data = data.map((item: any) => ({
                        ...item,
                        karyawan: db.karyawan.find((e: any) => e.id === item.karyawan_id)
                    }));
                }
                if (columns.includes('mitra(*)')) {
                    data = data.map((item: any) => ({
                        ...item,
                        mitra: db.mitra.find((m: any) => m.id === item.mitra_id)
                    }));
                }
                if (columns.includes('transaksi_detail(*)')) {
                    data = data.map((item: any) => ({
                        ...item,
                        transaksi_detail: db.transaksi_detail.filter((d: any) => d.transaksi_id === item.id)
                    }));
                }
                return chain;
            },
            order: (col: string, options?: { ascending: boolean }) => {
                data.sort((a: any, b: any) => {
                    if (a[col] < b[col]) return options?.ascending ? -1 : 1;
                    if (a[col] > b[col]) return options?.ascending ? 1 : -1;
                    return 0;
                });
                return chain;
            },
            eq: (col: string, val: any) => {
                data = data.filter((item: any) => item[col] === val);
                return chain;
            },
            gte: (col: string, val: any) => {
                data = data.filter((item: any) => item[col] >= val);
                return chain;
            },
            lt: (col: string, val: any) => {
                data = data.filter((item: any) => item[col] < val);
                return chain;
            },
            limit: (n: number) => {
                data = data.slice(0, n);
                return chain;
            },
            single: async () => {
                return { data: data[0] || null, error: null };
            },
            insert: async (payload: any) => {
                const db = getDB();
                const newItems = Array.isArray(payload) ? payload.map(p => ({ id: generateId(), ...p })) : [{ id: generateId(), ...payload }];
                db[table] = [...(db[table] || []), ...newItems];
                saveDB(db);
                return { data: Array.isArray(payload) ? newItems : newItems[0], error: null, select: () => ({ single: async () => ({ data: newItems[0], error: null }) }) };
            },
            update: async (payload: any) => {
                const db = getDB();
                // This is a bit tricky because .eq() might have been called before or after .update()
                // In Supabase it's .from().update().eq()
                // So I'll return a special object for the update chain
                return {
                    eq: async (col: string, val: any) => {
                        db[table] = (db[table] || []).map((item: any) => {
                            if (item[col] === val) return { ...item, ...payload };
                            return item;
                        });
                        saveDB(db);
                        return { error: null };
                    }
                };
            },
            delete: () => {
                return {
                    eq: async (col: string, val: any) => {
                        const db = getDB();
                        db[table] = (db[table] || []).filter((item: any) => item[col] !== val);
                        saveDB(db);
                        return { error: null };
                    }
                };
            },
            then: (resolve: any) => {
                resolve({ data, error: null });
            }
        };

        return chain;
    },
    rpc: async (fn: string, args: any) => {
        if (fn === 'decrement_stok') {
            const db = getDB();
            db.produk = db.produk.map((p: any) => {
                if (p.id === args.p_id) return { ...p, stok: p.stok - args.p_jumlah };
                return p;
            });
            saveDB(db);
        }
        return { error: null };
    }
};
