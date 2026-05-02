
"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Package, Users, Receipt, ShieldCheck } from "lucide-react";

export default function LandingPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white text-slate-900">
            {/* Header */}
            <header className="px-4 lg:px-6 h-16 flex items-center border-b border-slate-100 sticky top-0 bg-white/80 backdrop-blur-md z-50">
                <Link className="flex items-center justify-center" href="/">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white overflow-hidden mr-2 border border-slate-100">
                        <Image src="/29335.webp" alt="Logo" width={40} height={40} className="h-full w-full object-cover" />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-primary">Accellabs <span className="text-slate-400">ERP</span></span>
                </Link>
                <nav className="ml-auto flex gap-4 sm:gap-6">
                    <Link className="text-sm font-medium hover:text-primary transition-colors" href="#features">
                        Fitur
                    </Link>
                    <Link className="text-sm font-medium hover:text-primary transition-colors" href="#about">
                        Tentang
                    </Link>
                    <Link href="/dashboard">
                        <Button variant="outline" size="sm" className="hidden sm:flex border-primary text-primary hover:bg-primary/5">
                            Demo Dashboard
                        </Button>
                    </Link>
                </nav>
            </header>

            <main className="flex-1">
                {/* Hero Section */}
                <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-blue-50/50 to-white">
                    <div className="container px-4 md:px-6 mx-auto">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-2">
                                Solusi ERP Modern untuk Bisnis Anda
                            </div>
                            <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl max-w-3xl">
                                Kelola Bisnis Lebih <span className="text-primary">Efisien</span> & Terintegrasi
                            </h1>
                            <p className="mx-auto max-w-[700px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Pantau keuangan, inventaris, karyawan, dan transaksi B2B dalam satu dashboard yang intuitif. 
                                Didesain khusus untuk kecepatan dan kemudahan penggunaan.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 mt-8">
                                <Link href="/dashboard">
                                    <Button size="lg" className="px-8 h-12 text-base rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all">
                                        Masuk ke Demo <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </Link>
                                <Button size="lg" variant="outline" className="px-8 h-12 text-base rounded-full border-slate-200 hover:bg-slate-50">
                                    Pelajari Lebih Lanjut
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section id="features" className="w-full py-12 md:py-24 lg:py-32 border-y border-slate-50">
                    <div className="container px-4 md:px-6 mx-auto">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Fitur Utama</h2>
                            <p className="max-w-[900px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Segala yang Anda butuhkan untuk menjalankan bisnis dengan lancar.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="group p-8 rounded-3xl border border-slate-100 bg-white hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all">
                                <div className="h-12 w-12 rounded-2xl bg-blue-50 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                                    <Receipt className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">Manajemen Keuangan</h3>
                                <p className="text-slate-500">Catat pendapatan dan pengeluaran secara real-time. Dashboard interaktif memudahkan analisis profitabilitas.</p>
                            </div>
                            <div className="group p-8 rounded-3xl border border-slate-100 bg-white hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all">
                                <div className="h-12 w-12 rounded-2xl bg-blue-50 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                                    <Package className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">Inventaris & POS</h3>
                                <p className="text-slate-500">Kelola stok produk dengan mudah. Sistem Point of Sale (POS) yang cepat untuk transaksi harian Anda.</p>
                            </div>
                            <div className="group p-8 rounded-3xl border border-slate-100 bg-white hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all">
                                <div className="h-12 w-12 rounded-2xl bg-blue-50 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                                    <Users className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">SDM & Penggajian</h3>
                                <p className="text-slate-500">Kelola data karyawan dan proses penggajian otomatis hanya dengan beberapa klik saja.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Dashboard Preview Section */}
                <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-900 text-white overflow-hidden">
                    <div className="container px-4 md:px-6 mx-auto">
                        <div className="flex flex-col lg:flex-row items-center gap-12">
                            <div className="flex-1 space-y-6">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Dashboard Powerful & Informatif</h2>
                                <p className="text-slate-400 text-lg">
                                    Dapatkan wawasan mendalam tentang kesehatan bisnis Anda melalui visualisasi data yang menawan dan mudah dimengerti.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-3">
                                        <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                            <ShieldCheck className="h-4 w-4" />
                                        </div>
                                        <span>Visualisasi Chart Pendapatan & Pengeluaran</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                            <ShieldCheck className="h-4 w-4" />
                                        </div>
                                        <span>Ringkasan Transaksi Terbaru</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                            <ShieldCheck className="h-4 w-4" />
                                        </div>
                                        <span>Manajemen Akses & Keamanan Data</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex-1 relative">
                                <div className="rounded-2xl border border-slate-700 bg-slate-800 p-2 shadow-2xl relative z-10">
                                    <div className="bg-slate-900 rounded-lg h-64 md:h-96 flex items-center justify-center overflow-hidden">
                                        <div className="text-slate-500 font-mono text-sm">Dashboard Preview (Mockup)</div>
                                    </div>
                                </div>
                                <div className="absolute -top-12 -right-12 h-64 w-64 bg-primary/20 rounded-full blur-3xl -z-0"></div>
                                <div className="absolute -bottom-12 -left-12 h-64 w-64 bg-blue-500/10 rounded-full blur-3xl -z-0"></div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-slate-100">
                <p className="text-xs text-slate-500">© 2024 Accellabs ERP. All rights reserved.</p>
                <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                    <Link className="text-xs hover:underline underline-offset-4" href="#">
                        Terms of Service
                    </Link>
                    <Link className="text-xs hover:underline underline-offset-4" href="#">
                        Privacy
                    </Link>
                </nav>
            </footer>
        </div>
    );
}
