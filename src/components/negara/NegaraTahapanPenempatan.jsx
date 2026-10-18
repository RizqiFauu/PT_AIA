import React from 'react';

export default function NegaraTahapanPenempatan() {
  return (
    <section className="w-full bg-surface-container-lowest py-space-xl">
      <div className="max-w-7xl mx-auto px-margin">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container text-on-tertiary-container rounded-md mb-space-sm">
              <span className="material-symbols-outlined text-[16px]">policy</span>
              <span className="font-label-eyebrow text-label-eyebrow tracking-widest uppercase">PROSEDUR RESMI SATU PINTU</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
              Tahapan Penempatan Legal Berbasis Regulasi Kemnaker RI
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2">
              Sebagai P3MI berizin resmi, PT Amal Ichwan Arindo menjamin seluruh alur proses berjalan secara tertib tanpa jalan pintas atau risiko penempatan non-prosedural.
            </p>
          </div>
          <div className="text-right">
            <span className="font-label-caption text-label-caption text-on-surface-variant block">Integrasi Terpusat:</span>
            <span className="font-headline-sm text-headline-sm text-primary font-bold">UU No. 18 Tahun 2017</span>
          </div>
        </div>

        {/* Process Steps Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          <div className="bg-surface-container-low/70 p-space-lg rounded-xl flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-10 h-10 rounded-lg bg-primary text-on-primary flex items-center justify-center font-bold text-headline-sm mb-4">
                01
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-2">Verifikasi &amp; MCU Pra-Penempatan</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Validasi dokumen kependudukan autentik (KTP, KK, Ijazah, Surat Izin Keluarga) diikuti pemeriksaan kesehatan komprehensif di fasilitas kesehatan rujukan resmi Kemnaker.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-surface-container-highest flex items-center gap-1.5 text-xs text-on-surface-variant font-medium">
              <span className="material-symbols-outlined text-[16px] text-emerald-600">check_circle</span>
              Verifikasi SIKK &amp; Rekom Disnaker
            </div>
          </div>

          <div className="bg-surface-container-low/70 p-space-lg rounded-xl flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-10 h-10 rounded-lg bg-primary text-on-primary flex items-center justify-center font-bold text-headline-sm mb-4">
                02
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-2">Pelatihan Kompetensi &amp; Bahasa</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Pendidikan intensif di Balai Latihan Kerja (BLK-LN) bersertifikasi BNSP mencakup penguasaan bahasa negara tujuan, etika budaya kerja, dan standar operasional teknis kerja.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-surface-container-highest flex items-center gap-1.5 text-xs text-on-surface-variant font-medium">
              <span className="material-symbols-outlined text-[16px] text-emerald-600">check_circle</span>
              Sertifikat Standar BNSP &amp; Kemnaker
            </div>
          </div>

          <div className="bg-surface-container-low/70 p-space-lg rounded-xl flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-10 h-10 rounded-lg bg-primary text-on-primary flex items-center justify-center font-bold text-headline-sm mb-4">
                03
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-2">Perjanjian Kerja &amp; Visa Kerja</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Penandatanganan Perjanjian Kerja (PK) bermeterai yang telah dilegalisasi Kedutaan Besar RI di negara tujuan, dilanjutkan penerbitan visa kerja resmi (bukan visa turis).
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-surface-container-highest flex items-center gap-1.5 text-xs text-on-surface-variant font-medium">
              <span className="material-symbols-outlined text-[16px] text-emerald-600">check_circle</span>
              Legalisasi KBRI / KDEI &amp; Imigrasi
            </div>
          </div>

          <div className="bg-surface-container-low/70 p-space-lg rounded-xl flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-10 h-10 rounded-lg bg-primary text-on-primary flex items-center justify-center font-bold text-headline-sm mb-4">
                04
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-2">OPP &amp; Penerbitan e-PMI</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Mengikuti Orientasi Pra-Pemberangkatan (OPP) resmi dari BP2MI, aktivasi asuransi perlindungan ketenagakerjaan, serta penerbitan ID elektronik resmi (e-PMI) sebelum terbang.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-surface-container-highest flex items-center gap-1.5 text-xs text-on-surface-variant font-medium">
              <span className="material-symbols-outlined text-[16px] text-emerald-600">check_circle</span>
              Nomor Induk e-PMI BP2MI Terbit
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
