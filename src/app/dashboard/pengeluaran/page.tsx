import { getPengeluaran, getKategori } from "@/actions/data";
import { PengeluaranClient } from "./client";
import { Pengeluaran } from "@/lib/types";

export default async function PengeluaranPage() {
    const now = new Date();
    const [data, kategori] = await Promise.all([
        getPengeluaran(),
        getKategori("pengeluaran"),
    ]);

    const bulanIni = now.getMonth() + 1;
    const tahunIni = now.getFullYear();
    const totalBulanIni = (data || [])
        .filter((d: Pengeluaran) => {
            const dt = new Date(d.tanggal);
            return dt.getMonth() + 1 === bulanIni && dt.getFullYear() === tahunIni;
        })
        .reduce((sum: number, d: Pengeluaran) => sum + d.jumlah, 0);

    return <PengeluaranClient data={data || []} kategoriList={kategori || []} totalBulanIni={totalBulanIni} />;
}
