import React from 'react';
import { Link } from 'react-router-dom';

export default function NegaraHero() {
  return (
    <>
      {/* Top Breadcrumb & Administrative Metadata Bar */}
      <section className="w-full bg-surface-container-low/70 py-space-sm">
        <div className="max-w-7xl mx-auto px-margin flex flex-wrap items-center justify-between gap-space-sm text-label-caption">
          <nav aria-label="Breadcrumb" className="flex items-center gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
            <Link className="hover:text-primary transition-colors flex items-center gap-1" to="/">
              <span className="material-symbols-outlined text-[16px]">home</span>
              Beranda
            </Link>
            <span className="material-symbols-outlined text-[14px] text-outline">chevron_right</span>
            <span className="text-primary font-semibold">Negara Tujuan Penempatan</span>
          </nav>
          <div className="flex items-center gap-space-md">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container text-on-surface-variant font-label-caption text-label-caption font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
              SISKOTKLN &amp; SISKOP2MI Sinkron Aktif
            </span>
            <span className="hidden md:inline-block font-label-caption text-label-caption text-on-surface-variant">
              Pembaruan Terakhir: Kuartal II 2025
            </span>
          </div>
        </div>
      </section>

      {/* Editorial Executive Header */}
      <header className="w-full bg-surface-container-lowest py-space-xl">
        <div className="max-w-7xl mx-auto px-margin">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-end">
            <div className="lg:col-span-8 flex flex-col space-y-space-md">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-low text-on-tertiary-container rounded-md w-fit">
                <span className="material-symbols-outlined text-[16px]">public</span>
                <span className="font-label-eyebrow text-label-eyebrow tracking-widest uppercase">JARINGAN KORIDOR GLOBAL RESMI</span>
              </div>
              <h1 className="font-headline-xl text-headline-xl text-primary tracking-tight leading-tight">
                Destinasi Penempatan Tenaga Kerja Luar Negeri Terverifikasi
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
                Pusat direktori koridor bilateral resmi Republik Indonesia dengan negara mitra penempatan. Dikelola langsung melalui skema bilateral pemerintah (G-to-G) dan kemitraan kelembagaan resmi (P-to-P) dengan jaminan kepatuhan regulasi Kemnaker RI, perlindungan hak ketenagakerjaan, serta transparansi visa kerja legal.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-space-sm bg-surface-container-low/60 p-space-lg rounded-xl shadow-sm">
              <div className="flex items-center justify-between pb-space-sm">
                <span className="font-label-eyebrow text-label-eyebrow text-on-surface-variant uppercase">Standar Proteksi</span>
                <span className="material-symbols-outlined text-primary text-[20px]">verified_user</span>
              </div>
              <div className="grid grid-cols-2 gap-space-md pt-space-xs">
                <div>
                  <span className="font-headline-md text-headline-md text-primary font-bold block">8 Negara</span>
                  <span className="font-label-caption text-label-caption text-on-surface-variant">Koridor Aktif Resmi</span>
                </div>
                <div>
                  <span className="font-headline-md text-headline-md text-primary font-bold block">100% Legal</span>
                  <span className="font-label-caption text-label-caption text-on-surface-variant">Sesuai UU No. 18/2017</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
