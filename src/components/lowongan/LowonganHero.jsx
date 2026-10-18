import React from 'react';
import { Link } from 'react-router-dom';

export default function LowonganHero() {
  return (
    <>
      {/* BREADCRUMB & CONTEXT STRIP */}
      <section className="w-full bg-surface-container-low py-space-sm px-margin">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <nav aria-label="Breadcrumb" className="flex items-center gap-space-xs font-label-caption text-label-caption text-on-surface-variant">
            <Link className="hover:text-primary transition-colors flex items-center gap-1" to="/">
              <span className="material-symbols-outlined text-[14px]">home</span>
              <span>Beranda</span>
            </Link>
            <span className="text-outline-variant">/</span>
            <span className="text-primary font-semibold">Lowongan Kerja Luar Negeri</span>
          </nav>
          <div className="hidden md:flex items-center gap-space-sm text-on-surface-variant font-label-caption text-label-caption">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-surface-container-highest text-primary font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container animate-pulse"></span>
              Data Terintegrasi SISKOP2MI RI
            </span>
            <span className="text-outline-variant">•</span>
            <span>Pembaruan: Hari ini, 09:00 WIB</span>
          </div>
        </div>
      </section>

      {/* EDITORIAL HEADER & FRAUD PREVENTION CALLOUT */}
      <section className="w-full bg-surface px-margin py-12 md:py-16">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          {/* Title Block */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 flex flex-col gap-3">
              <div className="inline-flex items-center gap-2 text-on-tertiary-container font-label-eyebrow text-label-eyebrow uppercase tracking-widest">
                <span className="material-symbols-outlined text-[18px]">verified_user</span>
                <span>Peluang Karir Global Resmi &amp; Terakreditasi</span>
              </div>
              <h1 className="font-headline-xl text-headline-xl text-primary tracking-tight leading-tight">
                Pusat Informasi &amp; Lowongan Kerja Luar Negeri Terverifikasi
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
                Akses langsung lowongan resmi bagi Pekerja Migran Indonesia (PMI) dengan Surat Izin Perekrutan (SIP2MI) aktif. Seluruh proses penempatan diawasi langsung oleh Kementerian Ketenagakerjaan RI dan BP2MI tanpa pungutan liar, menjamin transparansi kontrak kerja dan hak asasi Anda.
              </p>
            </div>
            {/* Metrics pill box */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 bg-surface-container-lowest p-space-md rounded-xl shadow-sm">
              <div className="flex items-center justify-between py-1">
                <span className="font-body-sm text-body-sm text-on-surface-variant">SIP2MI Aktif Tersedia</span>
                <span className="font-headline-sm text-headline-sm text-primary font-bold">142 Kuota</span>
              </div>
              <div className="h-px w-full bg-surface-container"></div>
              <div className="flex items-center justify-between py-1">
                <span className="font-body-sm text-body-sm text-on-surface-variant">Negara Mitra Operasional</span>
                <span className="font-headline-sm text-headline-sm text-on-tertiary-container font-bold">6 Negara</span>
              </div>
              <div className="h-px w-full bg-surface-container"></div>
              <div className="flex items-center justify-between py-1">
                <span className="font-body-sm text-body-sm text-on-surface-variant">Tingkat Penempatan Legal</span>
                <span className="font-headline-sm text-headline-sm text-primary font-bold">100% Tercatat</span>
              </div>
            </div>
          </div>
          {/* Fraud Warning Banner */}
          <div className="bg-primary-container text-on-primary rounded-xl p-space-md sm:p-space-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-md">
            <div className="flex items-start gap-space-md">
              <div className="p-2.5 rounded-lg bg-surface-container-lowest/10 text-tertiary-fixed-dim shrink-0 mt-0.5">
                <span className="material-symbols-outlined text-[24px]">gavel</span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-headline-sm text-tertiary-fixed-dim font-bold tracking-tight">
                  Waspada Calo &amp; Pungutan Liar (Pungli)
                </span>
                <p className="font-body-sm text-body-sm text-on-primary-container max-w-2xl mt-0.5">
                  PT Amal Ichwan Arindo tidak pernah memungut pembayaran melalui rekening perorangan atau calo lapangan. Pendaftaran dan verifikasi hanya sah melalui sistem resmi dan kantor operasional kami yang berizin Kemnaker RI.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <a className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-tertiary-fixed-dim text-tertiary font-label-button text-label-button hover:bg-tertiary-fixed transition-colors" href="#lapor-calo">
                <span className="material-symbols-outlined text-[16px]">report</span>
                <span>Layanan Aduan Satgas</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
