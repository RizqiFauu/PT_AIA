import React from 'react';
import { Link } from 'react-router-dom';

export default function DetailHero({ onOpenShareModal }) {
  return (
    <>
      {/* Top Progress & Context Navigation Strip */}
      <section className="w-full bg-surface-container-low py-space-sm">
        <div className="max-w-7xl mx-auto px-margin flex flex-wrap items-center justify-between gap-space-sm">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2">
            <Link className="font-label-caption text-label-caption text-secondary hover:text-primary transition-colors flex items-center gap-1" to="/">
              <span className="material-symbols-outlined text-[15px]">home</span>
              <span>Beranda</span>
            </Link>
            <span className="material-symbols-outlined text-[13px] text-outline">chevron_right</span>
            <Link className="font-label-caption text-label-caption text-secondary hover:text-primary transition-colors" to="/lowongan-kerja">
              Lowongan Kerja
            </Link>
            <span className="material-symbols-outlined text-[13px] text-outline">chevron_right</span>
            <span className="font-label-caption text-label-caption text-on-surface font-semibold truncate max-w-[220px] sm:max-w-none">
              Operator Manufaktur Presisi (Taiwan)
            </span>
          </nav>
          <div className="inline-flex items-center gap-space-xs px-2.5 py-1 bg-surface-container-lowest rounded-full shadow-sm">
            <span className="h-2 w-2 rounded-full bg-on-tertiary-container animate-pulse"></span>
            <span className="font-label-caption text-label-caption text-on-surface-variant">Batch Terbuka: Kuota 45 Kandidat Tersedia</span>
          </div>
        </div>
      </section>

      {/* Editorial Job Header Banner */}
      <section className="relative w-full bg-primary-container text-on-primary py-space-xl overflow-hidden">
        {/* Ambient Pattern SVG Background */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern height="10" id="grid-pattern" patternUnits="userSpaceOnUse" width="10">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"></path>
              </pattern>
            </defs>
            <rect fill="url(#grid-pattern)" height="100%" width="100%"></rect>
          </svg>
        </div>
        <div className="relative max-w-7xl mx-auto px-margin">
          {/* Regulatory Verification Badges */}
          <div className="flex flex-wrap items-center gap-space-xs mb-space-md">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-tertiary-container text-tertiary-fixed font-label-eyebrow text-label-eyebrow rounded shadow-sm">
              <span className="material-symbols-outlined text-[16px] text-on-tertiary-container">verified</span>
              TERVERIFIKASI SISKOP2MI
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-surface-container-lowest/10 backdrop-blur-sm text-surface-container font-label-caption text-label-caption rounded">
              <span className="material-symbols-outlined text-[14px]">description</span>
              JOB ORDER NO: <strong className="text-on-primary font-semibold">JO-TW-2025-089A</strong>
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-surface-container-lowest/10 backdrop-blur-sm text-surface-container font-label-caption text-label-caption rounded">
              <span className="material-symbols-outlined text-[14px]">business</span>
              P3MI Resmi Kemnaker RI SIP3MI No. 412/MEN/2021
            </span>
          </div>
          {/* Job Position Main Title & Editorial Headline */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-end mb-space-lg">
            <div className="lg:col-span-8 flex flex-col space-y-space-xs">
              <p className="font-label-eyebrow text-label-eyebrow text-tertiary-fixed-dim uppercase tracking-widest">
                Sektor Industri Presisi &amp; Semikonduktor
              </p>
              <h1 className="font-headline-xl text-headline-xl text-on-primary tracking-tight leading-tight">
                Operator Manufaktur Presisi &amp; Perakitan Komponen Elektronik
              </h1>
              <p className="font-body-md text-body-md text-on-primary-container max-w-2xl">
                Penempatan fasilitas manufaktur teknologi tinggi di Kawasan Sains Hsinchu &amp; Taichung, Taiwan. Mengoperasikan mesin SMT dan pengujian mutu optik otomatis dengan proteksi ketenagakerjaan berstandar global.
              </p>
            </div>
            {/* Fast CTA Controls */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-space-sm items-stretch lg:items-end justify-center">
              <a className="inline-flex items-center justify-center gap-2 px-space-lg py-3 bg-on-tertiary-container text-surface-container-lowest font-label-button text-label-button rounded shadow-md hover:bg-tertiary-fixed-dim hover:text-on-tertiary-fixed transition-all duration-200" href="#form-lamaran">
                <span className="material-symbols-outlined text-[18px]">how_to_reg</span>
                <span>Daftar Sekarang Secara Resmi</span>
              </a>
              <button
                className="inline-flex items-center justify-center gap-2 px-space-md py-2.5 bg-surface-container-lowest/10 hover:bg-surface-container-lowest/20 text-on-primary font-label-button text-label-button rounded transition-colors"
                id="btnShareModal"
                type="button"
                onClick={onOpenShareModal}
              >
                <span className="material-symbols-outlined text-[18px]">share</span>
                <span>Bagikan Lowongan Ini</span>
              </button>
            </div>
          </div>
          {/* Metadata Strip Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-space-sm pt-space-md border-t border-surface-container-lowest/15">
            <div className="bg-surface-container-lowest/5 backdrop-blur-sm p-space-md rounded flex items-start gap-space-sm">
              <div className="w-10 h-10 rounded bg-tertiary-container flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-tertiary-fixed text-[20px]">public</span>
              </div>
              <div>
                <div className="font-label-caption text-label-caption text-on-primary-container">Negara &amp; Wilayah</div>
                <div className="font-headline-sm text-headline-sm text-on-primary">Taiwan</div>
                <div className="font-label-caption text-label-caption text-tertiary-fixed-dim">Hsinchu &amp; Taichung</div>
              </div>
            </div>
            <div className="bg-surface-container-lowest/5 backdrop-blur-sm p-space-md rounded flex items-start gap-space-sm">
              <div className="w-10 h-10 rounded bg-tertiary-container flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-tertiary-fixed text-[20px]">payments</span>
              </div>
              <div>
                <div className="font-label-caption text-label-caption text-on-primary-container">Gaji Pokok Resmi</div>
                <div className="font-headline-sm text-headline-sm text-on-primary">NT$ 27,470</div>
                <div className="font-label-caption text-label-caption text-tertiary-fixed-dim">≈ Rp 13,8 Juta / Bulan</div>
              </div>
            </div>
            <div className="bg-surface-container-lowest/5 backdrop-blur-sm p-space-md rounded flex items-start gap-space-sm">
              <div className="w-10 h-10 rounded bg-tertiary-container flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-tertiary-fixed text-[20px]">history_toggle_off</span>
              </div>
              <div>
                <div className="font-label-caption text-label-caption text-on-primary-container">Durasi Kontrak</div>
                <div className="font-headline-sm text-headline-sm text-on-primary">3 Tahun Penuh</div>
                <div className="font-label-caption text-label-caption text-tertiary-fixed-dim">Dapat Diperpanjang s/d 12 Thn</div>
              </div>
            </div>
            <div className="bg-surface-container-lowest/5 backdrop-blur-sm p-space-md rounded flex items-start gap-space-sm">
              <div className="w-10 h-10 rounded bg-tertiary-container flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-tertiary-fixed text-[20px]">shield_with_heart</span>
              </div>
              <div>
                <div className="font-label-caption text-label-caption text-on-primary-container">Jaminan Sosial</div>
                <div className="font-headline-sm text-headline-sm text-on-primary">Labor &amp; NHI</div>
                <div className="font-label-caption text-label-caption text-tertiary-fixed-dim">+ BPJS Ketenagakerjaan RI</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
