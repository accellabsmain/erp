
export function createClient() {
    return {
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
        },
        from: (table: string) => ({
            select: () => ({
                eq: () => ({
                    single: async () => ({ data: null, error: null }),
                    then: (res: any) => res({ data: [], error: null })
                }),
                order: () => ({
                    then: (res: any) => res({ data: [], error: null })
                }),
                then: (res: any) => res({ data: [], error: null })
            }),
            insert: async () => ({ data: null, error: null }),
            update: () => ({ eq: async () => ({ error: null }) }),
            delete: () => ({ eq: async () => ({ error: null }) }),
        })
    } as any;
}
