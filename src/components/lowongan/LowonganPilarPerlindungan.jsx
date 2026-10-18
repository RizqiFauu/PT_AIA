import React from 'react';

export default function LowonganPilarPerlindungan() {
  return (
    <section className="w-full bg-surface px-margin py-16">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        <div className="flex flex-col gap-2 max-w-3xl">
          <div className="inline-flex items-center gap-1.5 text-on-tertiary-container font-label-eyebrow text-label-eyebrow uppercase tracking-widest">
            <span className="material-symbols-outlined text-[16px]">policy</span>
            <span>Jaminan Perlindungan Hukum &amp; Kesejahteraan</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-primary font-bold tracking-tight">
            Pilar Perlindungan PMI Sesuai UU No. 18 Tahun 2017
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Setiap Pekerja Migran Indonesia yang berangkat melalui PT Amal Ichwan Arindo dilindungi payung hukum penuh sejak masa pra-pemberangkatan, selama masa kerja di luar negeri, hingga kembali ke tanah air.
          </p>
        </div>

        {/* 3 Protection Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Pillar 1: BP2MI / Kemnaker */}
          <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-4">
            <div className="w-12 h-12 rounded-lg bg-surface-container-low text-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-[26px]">account_balance</span>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-headline-sm text-headline-sm text-primary font-bold">Kemenaker &amp; SISKOP2MI</h3>
              <span className="font-label-eyebrow text-label-eyebrow text-on-tertiary-container uppercase font-semibold">Regulasi Pra-Pemberangkatan</span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Pencatatan resmi penerbitan e-PMI (Elektronik Pekerja Migran Indonesia) sebagai bukti sah status pekerja luar negeri, dilengkapi pembekalan Orientasi Pra-Pemberangkatan (OPP).
            </p>
            <ul className="font-label-caption text-label-caption text-on-surface space-y-1.5 mt-auto pt-2">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[14px] text-on-tertiary-container">done</span>
                <span>Terdaftar di database Kemenaker RI</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[14px] text-on-tertiary-container">done</span>
                <span>Perjanjian Kerja berstandar Bilingual</span>
              </li>
            </ul>
          </div>

          {/* Pillar 2: BPJS Ketenagakerjaan PMI */}
          <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-4">
            <div className="w-12 h-12 rounded-lg bg-surface-container-low text-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-[26px]">health_and_safety</span>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-headline-sm text-headline-sm text-primary font-bold">BPJS Ketenagakerjaan PMI</h3>
              <span className="font-label-eyebrow text-label-eyebrow text-on-tertiary-container uppercase font-semibold">Jaminan Sosial Komprehensif</span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Perlindungan jaminan kecelakaan kerja (JKK), jaminan kematian (JKM), serta jaminan hari tua (JHT) yang mengcover calon pekerja sejak masa pelatihan, masa tugas, hingga kepulangan.
            </p>
            <ul className="font-label-caption text-label-caption text-on-surface space-y-1.5 mt-auto pt-2">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[14px] text-on-tertiary-container">done</span>
                <span>Santunan kecelakaan &amp; pengobatan</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[14px] text-on-tertiary-container">done</span>
                <span>Perlindungan risiko PHK sepihak</span>
              </li>
            </ul>
          </div>

          {/* Pillar 3: Perwakilan RI (KBRI / KJRI) */}
          <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-4">
            <div className="w-12 h-12 rounded-lg bg-surface-container-low text-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-[26px]">apartment</span>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-headline-sm text-headline-sm text-primary font-bold">Atase Ketenagakerjaan KBRI</h3>
              <span className="font-label-eyebrow text-label-eyebrow text-on-tertiary-container uppercase font-semibold">Advokasi Diplomatik</span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Perwakilan Diplomatik Republik Indonesia di Tokyo, Taipei, Kuala Lumpur, Warsawa, dan Riyadh bertindak sebagai pelindung langsung dan fasilitator hak ketenagakerjaan Anda di negara tujuan.
            </p>
            <ul className="font-label-caption text-label-caption text-on-surface space-y-1.5 mt-auto pt-2">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[14px] text-on-tertiary-container">done</span>
                <span>Layanan darurat hotline 24 Jam KBRI</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[14px] text-on-tertiary-container">done</span>
                <span>Pendampingan hukum sengketa ketenagakerjaan</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
