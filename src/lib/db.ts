
import fs from 'fs';
import path from 'path';

const DB_PATH = path.join(process.cwd(), 'dummy_db.json');

// Helper to get dates for dummy data
const today = new Date();
const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 15);
const twoMonthsAgo = new Date(today.getFullYear(), today.getMonth() - 2, 10);

const formatDate = (date: Date) => date.toISOString().split('T')[0];

const INITIAL_DATA = {
    kategori: [
        { id: "k1", nama: "Makanan", tipe: "produk", deskripsi: "Kategori makanan" },
        { id: "k2", nama: "Minuman", tipe: "produk", deskripsi: "Kategori minuman" },
        { id: "k3", nama: "Penjualan Retail", tipe: "pendapatan", deskripsi: "Pendapatan harian" },
        { id: "k4", nama: "Operasional", tipe: "pengeluaran", deskripsi: "Biaya rutin" },
        { id: "k5", nama: "Gaji Karyawan", tipe: "pengeluaran", deskripsi: "Biaya gaji" },
    ],
    produk: [
        { id: "p1", nama: "Nasi Goreng Blue", deskripsi: "Nasi goreng spesial", harga: 25000, stok: 45, satuan: "porsi", kategori_id: "k1", is_active: true },
        { id: "p2", nama: "Es Teh Manis", deskripsi: "Teh segar", harga: 5000, stok: 88, satuan: "gelas", kategori_id: "k2", is_active: true },
        { id: "p3", nama: "Ayam Bakar", deskripsi: "Ayam bakar madu", harga: 30000, stok: 20, satuan: "porsi", kategori_id: "k1", is_active: true },
    ],
    karyawan: [
        { id: "e1", nama: "Budi Santoso", email: "budi@erp.accellabs.com", telepon: "08123456789", posisi: "Kasir", gaji_pokok: 3500000, tanggal_bergabung: "2023-01-15", status: "aktif" },
        { id: "e2", nama: "Siti Aminah", email: "siti@erp.accellabs.com", telepon: "08987654321", posisi: "Koki", gaji_pokok: 4500000, tanggal_bergabung: "2023-02-10", status: "aktif" },
    ],
    pendapatan: [
        { id: "inc1", tanggal: formatDate(today), kategori_id: "k3", deskripsi: "Penjualan harian", jumlah: 1500000, metode_pembayaran: "Tunai", user_id: "demo-user-id" },
        { id: "inc2", tanggal: formatDate(lastMonth), kategori_id: "k3", deskripsi: "Penjualan bulan lalu", jumlah: 12000000, metode_pembayaran: "Transfer", user_id: "demo-user-id" },
        { id: "inc3", tanggal: formatDate(twoMonthsAgo), kategori_id: "k3", deskripsi: "Penjualan 2 bulan lalu", jumlah: 10500000, metode_pembayaran: "Transfer", user_id: "demo-user-id" },
    ],
    pengeluaran: [
        { id: "exp1", tanggal: formatDate(today), kategori_id: "k4", deskripsi: "Beli bahan baku", jumlah: 500000, metode_pembayaran: "Tunai", user_id: "demo-user-id" },
        { id: "exp2", tanggal: formatDate(lastMonth), kategori_id: "k5", deskripsi: "Gaji Karyawan", jumlah: 8000000, metode_pembayaran: "Transfer", user_id: "demo-user-id" },
    ],
    penggajian: [
        { id: "g1", karyawan_id: "e1", periode_bulan: today.getMonth() + 1, periode_tahun: today.getFullYear(), gaji_pokok: 3500000, tunjangan: 200000, potongan: 0, bonus: 0, total_gaji: 3700000, status: "pending", user_id: "demo-user-id" },
    ],
    transaksi: [
        { id: "t1", nomor_transaksi: "TRX-1001", total: 30000, diskon: 0, diskon_persen: 0, total_bayar: 30000, metode_pembayaran: "Tunai", tanggal: formatDate(today), user_id: "demo-user-id" },
    ],
    transaksi_detail: [
        { id: "td1", transaksi_id: "t1", produk_id: "p1", nama_produk: "Nasi Goreng Blue", harga: 25000, jumlah: 1, subtotal: 25000 },
        { id: "td2", transaksi_id: "t1", produk_id: "p2", nama_produk: "Es Teh Manis", harga: 5000, jumlah: 1, subtotal: 5000 },
    ],
    mitra: [
        { id: "m1", nama: "PT. Maju Bersama", kategori: "Supplier Bahan Baku", kontak_wa: "0811223344", alamat: "Jl. Industri No. 10" },
        { id: "m2", nama: "Warung Berkah", kategori: "Agen Retail", kontak_wa: "0855667788", alamat: "Jl. Melati No. 5" },
    ],
    transaksi_b2b: [
        { id: "b1", nomor_transaksi: "INV-2001", mitra_id: "m2", total: 500000, diskon: 50000, ongkir: 20000, total_tagihan: 470000, jumlah_dibayar: 200000, sisa_tagihan: 270000, status_pembayaran: "DP/Parsial", status_pengiriman: "Dikirim", tanggal: formatDate(today), user_id: "demo-user-id" },
    ],
    transaksi_b2b_detail: [
        { id: "bd1", transaksi_b2b_id: "b1", produk_id: "p1", nama_produk: "Nasi Goreng Blue", harga: 20000, jumlah: 25, subtotal: 500000 },
    ]
};

export function getDB() {
    if (!fs.existsSync(DB_PATH)) {
        fs.writeFileSync(DB_PATH, JSON.stringify(INITIAL_DATA, null, 2));
        return INITIAL_DATA;
    }
    try {
        const content = fs.readFileSync(DB_PATH, 'utf-8');
        const db = JSON.parse(content);
        // Ensure all tables exist
        return { ...INITIAL_DATA, ...db };
    } catch (e) {
        return INITIAL_DATA;
    }
}

export function saveDB(data: any) {
    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
}

export function generateId() {
    return Math.random().toString(36).substring(2, 11);
}
