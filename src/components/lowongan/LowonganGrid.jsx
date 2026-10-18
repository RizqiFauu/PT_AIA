import React from 'react';
import { Link } from 'react-router-dom';

export default function LowonganGrid({ zeroCostOnly, searchQuery, selectedCountry, selectedSector }) {
  const jobs = [
    {
      id: 'taiwan-cnc',
      flag: 'Taiwan • Taichung',
      country: 'taiwan',
      sector: 'manufaktur',
      badge: 'SIP2MI Aktif',
      badgeClass: 'bg-surface-container text-on-tertiary-container',
      title: 'Operator Mesin CNC & Presisi',
      subtitle: 'Industri Komponen Otomotif & Alat Berat',
      salary: 'NT$ 27,470+ /bln (~Rp 13.8jt)',
      duration: '3 Tahun (Dapat Diperpanjang)',
      extraLabel: 'Fasilitas Lembur:',
      extraVal: 'Tersedia (Sesuai UU Taiwan)',
      reqs: [
        'SMK Teknik Mesin / Pengalaman Bubut & CNC',
        'Usia 20 - 32 Tahun, Medical Fit to Work',
        'Pelatihan Bahasa Mandarin Disediakan BLK Arindo'
      ],
      quota: 'Kuota Tersedia: 18 Orang',
      isZeroCost: false,
      detailUrl: '/detail-lowongan'
    },
    {
      id: 'jepang-caregiver',
      flag: 'Jepang • Osaka & Tokyo',
      country: 'jepang',
      sector: 'caregiver',
      badge: 'Subsidi Kursus',
      badgeClass: 'bg-tertiary-fixed text-tertiary font-bold',
      title: 'Caregiver Kaigo (Perawat Lansia)',
      subtitle: 'Skema Resmi Tokutei Ginou (SSW) 1',
      salary: '¥ 200,000 - 240,000 (~Rp 22-26jt)',
      duration: 'Specified Skilled Worker (5 Thn)',
      extraLabel: 'Benefit Khusus:',
      extraVal: 'Asuransi Sosial Shakai Hoken',
      reqs: [
        'Sertifikat JFT-Basic / JLPT N4',
        'Lulus Prometric Skill Kaigo & Bahasa Kaigo',
        'Pendidikan D3/S1 Keperawatan/Kebidanan (Diutamakan)'
      ],
      quota: 'Kuota Tersedia: 30 Orang',
      isZeroCost: false,
      detailUrl: '#inquiry'
    },
    {
      id: 'malaysia-semikonduktor',
      flag: 'Malaysia • Bayan Lepas, Penang',
      country: 'malaysia',
      sector: 'manufaktur',
      badge: 'Zero Cost',
      badgeClass: 'bg-surface-container-highest text-primary font-bold',
      title: 'Teknisi & Perakitan Semikonduktor',
      subtitle: 'Pabrik Komponen Mikroelektronika Multinasional',
      salary: 'MYR 1,500 - 2,500+ (~Rp 5.5-9jt)',
      duration: '2 Tahun + Opsi Perpanjang',
      extraLabel: 'Akomodasi & Transport:',
      extraVal: 'Asrama Ber-AC & Bus Jemputan',
      reqs: [
        'Pendidikan Min. SMA / SMK Sederajat',
        'Usia 18 - 30 Tahun, Tidak Buta Warna',
        'Tiket Pesawat Keberangkatan & Visa Ditanggung Majikan'
      ],
      quota: 'Kuota Tersedia: 45 Orang',
      isZeroCost: true,
      detailUrl: '#inquiry'
    },
    {
      id: 'timurtengah-hospitality',
      flag: 'UEA & Arab Saudi • Dubai / Riyadh',
      country: 'timurtengah',
      sector: 'hospitality',
      badge: 'Bintang 5',
      badgeClass: 'bg-surface-container text-on-tertiary-container',
      title: 'Front Office & Banquet Service',
      subtitle: 'Jaringan Hotel Mewah Internasional',
      salary: 'AED 2,800 - 3,800 (~Rp 12-16jt)',
      duration: 'Makan, Asuransi Medis & Tempat Tinggal',
      durationLabel: 'Fasilitas Penuh:',
      extraLabel: 'Tiket PP:',
      extraVal: 'Disediakan Setiap Selesai Kontrak',
      reqs: [
        'Kemampuan Bahasa Inggris Komunikatif Aktif',
        'Pengalaman Min. 1 Tahun di Bidang Perhotelan/F&B',
        'Penampilan Rapi & Berorientasi Pelayanan'
      ],
      quota: 'Kuota Tersedia: 12 Orang',
      isZeroCost: false,
      detailUrl: '#inquiry'
    },
    {
      id: 'polandia-logistik',
      flag: 'Polandia • Warsawa & Poznań',
      country: 'polandia',
      sector: 'logistik',
      badge: 'Eropa Schengen',
      badgeClass: 'bg-surface-container-highest text-primary font-bold',
      title: 'Operator Gudang & Sortir Logistik',
      subtitle: 'Pusat Distribusi E-Commerce Eropa Tengah',
      salary: 'PLN 4,200 - 5,500 (~Rp 16-21jt)',
      duration: 'Karta Pobytu (National Work Visa D)',
      durationLabel: 'Izin Tinggal:',
      extraLabel: 'Regulasi Kerja:',
      extraVal: 'Standar Ketenagakerjaan Uni Eropa',
      reqs: [
        'Usia 21 - 40 Tahun, Stamina Fisik Prima',
        'Disiplin Kerja & Mampu Beradaptasi Cuaca Dingin',
        'SKCK Mabes Polri & Bebas Catatan Kriminal'
      ],
      quota: 'Kuota Tersedia: 15 Orang',
      isZeroCost: false,
      detailUrl: '#inquiry'
    }
  ];

  return (
    <section className="w-full bg-surface px-margin py-12 md:py-16">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {/* Grid of Verified Jobs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => {
            const isDimmed = zeroCostOnly && !job.isZeroCost;
            return (
              <article
                key={job.id}
                className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col group"
                style={{ opacity: isDimmed ? 0.35 : 1 }}
              >
                <div className="p-space-lg flex flex-col flex-1 gap-4">
                  {/* Header Badges */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-surface-container-low text-primary font-label-caption text-label-caption font-semibold">
                      <span className="material-symbols-outlined text-[14px]">flag</span>
                      <span>{job.flag}</span>
                    </span>
                    <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded font-label-eyebrow text-label-eyebrow uppercase ${job.badgeClass}`}>
                      {job.badge}
                    </span>
                  </div>
                  {/* Title & Company Meta */}
                  <div>
                    {job.detailUrl.startsWith('/') ? (
                      <Link to={job.detailUrl}>
                        <h2 className="font-headline-md text-headline-md text-primary font-bold group-hover:text-secondary transition-colors">
                          {job.title}
                        </h2>
                      </Link>
                    ) : (
                      <h2 className="font-headline-md text-headline-md text-primary font-bold group-hover:text-secondary transition-colors">
                        {job.title}
                      </h2>
                    )}
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                      {job.subtitle}
                    </p>
                  </div>
                  {/* Key Details Matrix */}
                  <div className="bg-surface-container-low/60 rounded-lg p-space-sm flex flex-col gap-2">
                    <div className="flex items-center justify-between text-on-surface">
                      <span className="font-label-caption text-label-caption text-outline">Estimasi Penghasilan:</span>
                      <span className="font-body-sm text-body-sm font-bold text-primary">{job.salary}</span>
                    </div>
                    <div className="flex items-center justify-between text-on-surface">
                      <span className="font-label-caption text-label-caption text-outline">{job.durationLabel || 'Durasi Kontrak:'}</span>
                      <span className="font-body-sm text-body-sm font-medium">{job.duration}</span>
                    </div>
                    <div className="flex items-center justify-between text-on-surface">
                      <span className="font-label-caption text-label-caption text-outline">{job.extraLabel}</span>
                      <span className="font-body-sm text-body-sm font-medium text-on-tertiary-container">{job.extraVal}</span>
                    </div>
                  </div>
                  {/* Qualifications checklist */}
                  <div className="flex flex-col gap-1.5">
                    <span className="font-label-caption text-label-caption text-outline uppercase tracking-wider font-semibold">Persyaratan Utama:</span>
                    <ul className="font-body-sm text-body-sm text-on-surface-variant space-y-1">
                      {job.reqs.map((req, rIdx) => (
                        <li key={rIdx} className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-[16px] text-on-tertiary-container">check_circle</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {/* Card Footer Action */}
                <div className="p-space-md bg-surface-container-low flex items-center justify-between mt-auto">
                  <span className="font-label-caption text-label-caption text-outline">{job.quota}</span>
                  {job.detailUrl.startsWith('/') ? (
                    <Link className="inline-flex items-center gap-1 text-primary font-label-button text-label-button font-bold hover:text-secondary transition-colors" to={job.detailUrl}>
                      <span>Lamar Posisi</span>
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </Link>
                  ) : (
                    <a className="inline-flex items-center gap-1 text-primary font-label-button text-label-button font-bold hover:text-secondary transition-colors" href={job.detailUrl}>
                      <span>Lamar Posisi</span>
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </a>
                  )}
                </div>
              </article>
            );
          })}

          {/* SPECIAL STATE CARD: KUOTA TERPENUHI */}
          <article
            className="bg-surface-container-low/50 rounded-xl overflow-hidden flex flex-col opacity-90 relative"
            style={{ opacity: zeroCostOnly ? 0.35 : 0.9 }}
          >
            <div className="p-space-lg flex flex-col flex-1 gap-4">
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-surface-container text-on-surface-variant font-label-caption text-label-caption font-semibold">
                  <span className="material-symbols-outlined text-[14px]">flag</span>
                  <span>Korea Selatan • Ulsan</span>
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-surface-container-highest text-outline font-label-eyebrow text-label-eyebrow uppercase font-bold">
                  Kuota Terpenuhi
                </span>
              </div>
              <div>
                <h2 className="font-headline-md text-headline-md text-on-surface-variant font-bold">
                  Welder &amp; Fabrikasi Kapal (Visa E-7-1)
                </h2>
                <p className="font-body-sm text-body-sm text-outline mt-1">
                  Galangan Kapal Modern Hyundai Heavy Industries
                </p>
              </div>
              <div className="bg-surface-container rounded-lg p-space-sm flex flex-col gap-2">
                <div className="flex items-center justify-between text-outline">
                  <span className="font-label-caption text-label-caption">Status Batch Rekrutmen:</span>
                  <span className="font-body-sm text-body-sm font-semibold text-on-surface-variant">Tahap Verifikasi Dokumen Kemnaker</span>
                </div>
                <div className="flex items-center justify-between text-outline">
                  <span className="font-label-caption text-label-caption">Jadwal Batch Berikutnya:</span>
                  <span className="font-body-sm text-body-sm font-medium text-on-surface-variant">Kuartal III 2025</span>
                </div>
              </div>
              <div className="p-3 bg-surface-container-lowest rounded-lg flex items-start gap-2 text-on-surface-variant">
                <span className="material-symbols-outlined text-[18px] text-outline shrink-0 mt-0.5">lock_clock</span>
                <p className="font-label-caption text-label-caption">
                  Pendaftaran untuk posisi ini ditutup sementara guna memprioritaskan pemrosesan visa 25 kandidat yang telah lolos tes kemampuan pengelasan FCAW 3G/4G.
                </p>
              </div>
            </div>
            <div className="p-space-md bg-surface-container flex items-center justify-between mt-auto">
              <span className="font-label-caption text-label-caption text-outline">SIP2MI Telah Ditutup</span>
              <button className="inline-flex items-center gap-1 text-on-surface-variant font-label-button text-label-button hover:text-primary transition-colors" type="button">
                <span>Daftar Waiting List</span>
                <span className="material-symbols-outlined text-[16px]">notifications</span>
              </button>
            </div>
          </article>
        </div>

        {/* Quick Summary Alert */}
        <div className="bg-surface-container-low rounded-xl p-space-md flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-primary shrink-0">
              <span className="material-symbols-outlined text-[20px]">assignment_turned_in</span>
            </div>
            <div>
              <h3 className="font-body-md text-body-md font-bold text-primary">Tidak Menemukan Keahlian Anda?</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Kami secara berkala membuka penempatan di sektor Agrikultur, Konstruksi, dan Logistik lainnya.</p>
            </div>
          </div>
          <a className="px-5 py-2.5 rounded-lg bg-surface-container-lowest text-primary font-label-button text-label-button font-bold hover:bg-surface-container-high transition-colors shadow-sm shrink-0" href="#inquiry">
            Konsultasi Talenta Umum
          </a>
        </div>
      </div>
    </section>
  );
}
