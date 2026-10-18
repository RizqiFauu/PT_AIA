import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const countryData = [
  {
    id: 'taiwan',
    name: 'Taiwan',
    code: 'TWN',
    region: 'asia-timur',
    badge: 'Koridor Aktif',
    subtitle: 'MoU Ketenagakerjaan Aktif RI-Taiwan (TETO/IETO)',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAz6sV72vWW61zQCPXQVcWJ2JaSDlrAGjUNG6Y37qXpuu7Bw79e4mq8wDF0rbPCrx74TVrr8CPf_GWqT42ZOJ6SN_0QspWQ62F6gl5-4nff4cc0oAHHVnvRpALnL2sQOK_EANS7ObrcBMteZx-4NxVvv6x0ZHENzTj9mwfqlIU_mURcCShaV6smVcPZcvHlrzy3L79MkcSsicbRqV5TZ0S_6q5HRjnQIQgW5L04dX17IjT2HT1bRoHJHQ',
    alt: 'A modern precision manufacturing factory in Taichung Taiwan with high-tech automated cleanrooms and professional international technicians wearing ESD safety suits under clean white industrial architectural lighting, executive editorial photograph in deep navy tones.',
    sectors: 'Manufaktur Presisi (Semikonduktor/Elektronik), Institutional Caregiver (Panti Lansia & RS), Perawat Domestik & Konstruksi Sipil.',
    duration: '3 Tahun (Dapat Diperpanjang s/d 12 Tahun)',
    language: 'Mandarin Dasar (Pelatihan Resmi di BLK)',
    insurance: 'National Health Insurance (NHI) Taiwan',
    btnText: 'Eksplorasi Koridor Taiwan'
  },
  {
    id: 'jepang',
    name: 'Jepang',
    code: 'JPN',
    region: 'asia-timur',
    badge: 'Skema Resmi SSW',
    subtitle: 'Specified Skilled Worker (Tokutei Ginou) & Titenshukan',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1LVLfSe-RJYf9uXewi3V7sVT_othAMaGLuHZxfSG9WaF9vVEFvP5ZlI3SUz2w6JETOI9oDQT9XAFqwAe4AISmbZ3Iz2sdqk4ApOLVMp1SdfbcsOFJJxlZQXBTXrMZZlOH1ylobOoMmOujsLlrVVXn_vS7y_UiHQTGFGT7SxbQvIddnO6nWWb5MztNHWAtkVH47BlwGaoVVgDeNo8EKlnw3BMMCtFSnHt25fCu5Fg8sCF5I_pkuAq_xA',
    alt: 'A healthcare and nursing care center in Tokyo Japan with certified caregivers respectfully assisting elderly patients in a warm ergonomic minimalist wood interior with large natural daylight windows, clean documentary editorial composition with deep blue accents.',
    sectors: 'Perawatan Lansia (Kaigo), Pengolahan Makanan & Minuman, Industri Konstruksi, Otomotif, dan Pertanian Modern.',
    duration: '1 - 5 Tahun (SSW i) / Akses Karir Permanen',
    language: 'JLPT N4 / JFT-Basic A2 + Tes Keahlian Sektor',
    insurance: 'Upah Minimum Standar Nasional Jepang (Shakai Hoken)',
    insuranceLabel: 'Proteksi Upah',
    btnText: 'Eksplorasi Koridor Jepang'
  },
  {
    id: 'korea selatan',
    name: 'Korea Selatan',
    code: 'KOR',
    region: 'asia-timur',
    badge: 'Skema E-7 & E-9',
    subtitle: 'Program Kemitraan Teknis Profesional Terdaftar',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZToACYsxTDvZ2vokAcMPImoctGAWnjHjQMHtxGx-kLoNBhCvucXaGBbIRspVlij5ToGhvToIxYuWl0TDWOqagfO3QzIaHqfeCoE-vTL8hB2lJuzXULeFGBG6G-NpGs0IMMivBym-6NjW9TfY5RBqBzOHORr-GKlMuCYxSdgwYJ-w6sgfOsLGkDZkf9xsEzUAFA1DyD6Av6BnXlUpE03gj2_kMyXxLfQ8mDL1Q5ces9meAZ7mEEggh7g',
    alt: 'A shipyard and heavy mechanical engineering plant in Ulsan South Korea with skilled Indonesian industrial technicians assembling metal structures with protective gear and safety helmets under crisp cinematic daylight.',
    sectors: 'Industri Galangan Kapal (Tukang Las Profesional E-7), Manufaktur Suku Cadang, Pengecoran Logam, dan Perikanan Terpadu.',
    duration: '3 Tahun (Perpanjangan 1 Tahun 10 Bulan)',
    language: 'EPS-TOPIK / Sertifikasi Keahlian Pengelasan Kemnaker',
    insurance: '4 Major Social Insurances (Korea NPS & NHIS)',
    insuranceLabel: 'Jaminan Sosial',
    btnText: 'Eksplorasi Koridor Korea'
  },
  {
    id: 'malaysia',
    name: 'Malaysia',
    code: 'MYS',
    region: 'asia-tenggara',
    badge: 'Bilateral OCS MoU',
    subtitle: 'One Channel System (OCS) Kementerian Sumber Manusia',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwAShxqCMUsRyUKGoef_eFYSZLrMH98X6Bro-ZVIQtffPaAN5zwtzP9mWewbvzVa6GBe8FIz8E8I16RPhLVgHmMLbgmBAbyDAxBkQ_VN_Sm9OD6np_tejhAtJ_RhiUFPEqTprNGv4ZQdCYJfqyeAjRpR7ukjBG6k1YNGf0r541a5s5JOThqHfu_yen9-mDa4_kDhQaDn8okB4RHvrPv8NNkKps_InImzGmGA5Q2DaFSO4CWh9wfTnT1w',
    alt: 'An advanced semiconductor testing facility in Penang Malaysia with precise robotics microchip packaging lines and technical staff monitoring production screens in an immaculate dust-free facility.',
    sectors: 'Manufaktur Elektronik & Semi-Konduktor, Perkebunan Berkelanjutan Bersertifikasi RSPO, Jasa Perhotelan & Layanan Korporat.',
    duration: '2 Tahun (Dapat Diperbarui Sesuai Kinerja)',
    language: 'Pendidikan Minimal SMA/SMK Sederajat & Medical FOMEMA',
    languageLabel: 'Kualifikasi',
    insurance: 'Skim Bencana Kerja Pekerja Asing (PERKESO/SOCSO)',
    btnText: 'Eksplorasi Koridor Malaysia'
  },
  {
    id: 'singapura',
    name: 'Singapura',
    code: 'SGP',
    region: 'asia-tenggara',
    badge: 'Regulasi MOM Resmi',
    subtitle: 'Ministry of Manpower (MOM) Work Permit & S-Pass Compliance',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC9cXQOAWKZoI3-G0LPNgSTTbCgDu8Twhvc6mwqgwrLtegf-pmnG0F9bOmjnBZ2or-5bpH8BLN6lyHcpKO7r83DWbVKd2y6BTuk6pzumsU1Q0l8bxmAty0WyuZUIcHgozuMeYB0Qfweity8UUkgcfvmQLeHbfwDlN9R4SgNDSCnFg4327_0DcDmoGWRLrSpb4eXUVBiAvWnZ2vvibxKm7hP4aW0bIrW_d1Rf13S-BztDWboU_j7JH3FgA',
    alt: 'A premium hospitality venue and luxury hotel lobby in Marina Bay Singapore with pristine architectural finishes, polite concierge personnel dressed in executive navy uniforms attending to guests.',
    sectors: 'Hospitality Bintang Lima, Manajemen Fasilitas Medis, Asisten Keperawatan Terlatih, dan Pemeliharaan Lingkungan Komersial.',
    duration: '2 Tahun (Perpanjangan Terbuka)',
    language: 'Bahasa Inggris Komunikatif / Dasar Mandari',
    insurance: 'MOM Mandatory Medical Insurance & Security Bond',
    insuranceLabel: 'Jaminan Medis',
    btnText: 'Eksplorasi Koridor Singapura'
  },
  {
    id: 'hong kong',
    name: 'Hong Kong',
    code: 'HKG',
    region: 'asia-timur',
    badge: 'Standard Employment Contract',
    subtitle: 'Labour Department Hong Kong Special Administrative Region',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD53ZZ8c68lgAhO8ZBDruQuajD9Qt2eKveamqig0iBcfT2heCIW8MtHuLyokyX0SZTGlUVHvzTEqMEAbAJwlG5m-Bj_-x2WMWroua2O1Mar7DgmZdCtMRQKL-hDDsnT6npFMF56isM2ba-wZIqTBCMviQF53njwpiLBFIuNwiHSeIpZItssfmcOnxyFjYLGrw1M7FfoK5raX3mBbVjt-aN67rWZS7jTMDvvjkhrMDly-5u61XICZR-fbg',
    alt: 'An urban residential setting in Kowloon Hong Kong showing a professional caregiver accompanying an elderly person with compassion and dignity in a high-rise garden terrace overlooking the city.',
    sectors: 'Domestic Childcare & Elderly Support, Manajemen Kebersihan Rumah Tangga Berstandar Tinggi, dan Pengasuh Medis Lansia.',
    duration: '2 Tahun (Perpanjangan Terbuka)',
    language: 'HKD 4,870/bulan + Tunjangan Makan & Tempat Tinggal',
    languageLabel: 'Gaji Minimum Regulasi',
    insurance: 'Tiket PP Resmi, Asuransi Medis Penuh, Libur Mingguan',
    insuranceLabel: 'Fasilitas',
    btnText: 'Eksplorasi Koridor Hong Kong'
  },
  {
    id: 'arab saudi teluk',
    name: 'Arab Saudi & Teluk',
    code: 'SAU',
    region: 'timur-tengah',
    badge: 'Skema Resmi SPSK',
    subtitle: 'Sistem Penempatan Satu Kanal (SPSK) Kemnaker & Qiwa',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAvLWIq4Ti3bGN7e_8x6mV4NbZj86GowBnjp9f1l1DfHxVvR1gHWTy50GdfD_U0TBZlXkto44JnwLp-0--x2Ic45ppmmhP-AG5spDJ2DcW7dzKRqJKLUkjw4gSZhp6YZ05dqGmBlxYvvrwiQdjAhuTTO_--KmTQUeiolIiQvS9KXAbvqPzm5EAlIufe9K0RCWNX8bWHA4S77ablMataezOKfO8BbaGxAaVZ0xL4i5-4o2q4NZg-d2sucg',
    alt: 'A modern hospital surgery wing and medical infrastructure project in Riyadh Saudi Arabia with nurses and specialized healthcare staff in sanitized medical uniforms interacting with modern monitoring equipment.',
    sectors: 'Perawat Rumah Sakit (Registered Nurse), Tenaga Teknis Konstruksi & MEP, Teknisi Perhotelan Haramain, dan Tenaga Tata Graha Institusional.',
    duration: '2 Tahun (Dapat Diperbarui Sesuai Kontrak Kerja)',
    language: 'Tervalidasi Digital Portal Musaned & Qiwa KSA',
    languageLabel: 'Legalitas Platform',
    insurance: 'Ditanggung Perusahaan Pengguna Penuh (Zero Cost)',
    insuranceLabel: 'Biaya Proses',
    btnText: 'Eksplorasi Koridor Saudi & Teluk'
  },
  {
    id: 'polandia eropa',
    name: 'Polandia',
    code: 'POL',
    region: 'eropa',
    badge: 'Koridor Uni Eropa Legal',
    subtitle: 'Izin Kerja Zezwolenie Typ A (Voivodeship Office Poland)',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDhYMLR2R3quCnogsWpC_bIqa3E-kCtL9PQf7jzEcTKn7Dvd4keo69-xXrVXvfDvXVct36EK9SUp2xhqdMjeh1L_eS3LJP82t9nu4ddtD_uWk2iOTosT7ug90t934vqNS3vxZIT2F63R-WXYqX4drZElgc6cSJ3BSlYX76EvoscrIN9G435DN24idLkuoIcVZGyhfJowivLKmUe2oFD2S8pHjEwIELMyTpDesFEtykZ5ujpVsQkcrjxOw',
    alt: 'A sprawling modern automated logistics fulfillment hub near Warsaw Poland with high bay racking, forklift operators and logistics personnel in reflective vests managing supply chain goods cleanly.',
    sectors: 'Logistik Pergudangan Berteknologi Tinggi, Pengolahan Makanan Pabrikasi, Fabrikasi Komponen Otomotif, dan Operator Produksi Tekstil.',
    duration: '1 - 3 Tahun (Kartu Izin Tinggal Sementara / TRC)',
    language: 'Bahasa Inggris Kerja Dasar (Pelatihan Pengantar Kerja)',
    insurance: 'Undang-Undang Buruh Uni Eropa (NFZ Health Coverage)',
    insuranceLabel: 'Regulasi Perlindungan',
    btnText: 'Eksplorasi Koridor Polandia'
  }
];

export default function NegaraGrid() {
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCountries = countryData.filter((country) => {
    const matchesRegion = selectedRegion === 'all' || country.region === selectedRegion;
    const term = searchTerm.toLowerCase().trim();
    const matchesSearch =
      term === '' ||
      country.name.toLowerCase().includes(term) ||
      country.sectors.toLowerCase().includes(term) ||
      country.subtitle.toLowerCase().includes(term) ||
      country.badge.toLowerCase().includes(term);
    return matchesRegion && matchesSearch;
  });

  return (
    <>
      {/* Interactive Search & Regional Filter Controls */}
      <section className="w-full bg-surface-container-lowest sticky top-20 z-30 shadow-[0_4px_16px_-2px_rgba(16,36,58,0.04)] py-space-md">
        <div className="max-w-7xl mx-auto px-margin">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-outline text-[20px] pointer-events-none">search</span>
              <input
                className="w-full pl-11 pr-4 py-2.5 bg-surface-container-low rounded-lg font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest shadow-sm transition-all"
                id="countrySearchInput"
                placeholder="Cari nama negara, sektor kerja, atau visa..."
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            {/* Regional Chips */}
            <div className="flex items-center gap-space-xs overflow-x-auto pb-1 md:pb-0 scrollbar-none" id="regionFilters" role="tablist">
              {[
                { id: 'all', label: 'Semua Wilayah' },
                { id: 'asia-timur', label: 'Asia Timur' },
                { id: 'asia-tenggara', label: 'Asia Tenggara' },
                { id: 'timur-tengah', label: 'Timur Tengah' },
                { id: 'eropa', label: 'Eropa Tengah' }
              ].map((chip) => {
                const isActive = selectedRegion === chip.id;
                return (
                  <button
                    key={chip.id}
                    className={`region-chip px-4 py-2 rounded-lg font-label-button text-label-button whitespace-nowrap transition-all ${
                      isActive
                        ? 'active bg-primary text-on-primary shadow-sm'
                        : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
                    }`}
                    type="button"
                    onClick={() => setSelectedRegion(chip.id)}
                  >
                    {chip.label}
                  </button>
                );
              })}
            </div>
          </div>
          {/* Bilateral Scheme Legal Banner */}
          <div className="mt-space-md pt-space-sm flex flex-wrap items-center justify-between gap-space-sm text-label-caption text-on-surface-variant">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[18px]">verified</span>
              <span>Seluruh koridor dijalankan sesuai skema G-to-G, P-to-P, dan SSW yang disahkan oleh BP2MI &amp; Kementerian Ketenagakerjaan RI.</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="inline-flex items-center gap-1 font-medium"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Kontrak Terverifikasi</span>
              <span className="inline-flex items-center gap-1 font-medium"><span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> Tanpa Biaya Ilegal (Zero-Fee Program Valid)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Destination Countries Cards Grid */}
      <section className="w-full bg-surface py-space-xl">
        <div className="max-w-7xl mx-auto px-margin">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter items-stretch" id="countriesGrid">
            {filteredCountries.map((country) => (
              <article
                key={country.id}
                className="country-card bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md flex flex-col justify-between transition-all duration-300"
                data-country={country.id}
                data-region={country.region}
              >
                <div>
                  <div className="relative h-48 w-full bg-surface-container">
                    <img className="w-full h-full object-cover" data-alt={country.alt} src={country.img} alt={country.name} />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent"></div>
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded bg-surface-container-lowest/90 backdrop-blur-sm text-primary font-label-caption text-label-caption font-bold shadow-sm flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500"></span> {country.badge}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between text-on-primary">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-headline-md text-headline-md text-on-primary font-bold">{country.name}</span>
                          <span className="px-1.5 py-0.5 rounded bg-surface-container-lowest/20 text-on-primary text-xs font-mono font-medium">{country.code}</span>
                        </div>
                        <span className="font-label-caption text-label-caption text-on-primary/90">{country.subtitle}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-space-lg space-y-space-md">
                    <div className="bg-surface-container-low/70 p-3 rounded-lg">
                      <span className="font-label-eyebrow text-label-eyebrow text-on-surface-variant block mb-1 uppercase">Sektor Prioritas Penempatan</span>
                      <p className="font-body-sm text-body-sm text-on-surface font-medium leading-snug">
                        {country.sectors}
                      </p>
                    </div>
                    <div className="space-y-space-xs font-body-sm text-body-sm text-on-surface-variant">
                      <div className="flex items-center justify-between py-1">
                        <span className="text-on-surface-variant">Durasi Kontrak</span>
                        <span className="text-primary font-semibold">{country.duration}</span>
                      </div>
                      <div className="flex items-center justify-between py-1">
                        <span className="text-on-surface-variant">{country.languageLabel || 'Standar Bahasa'}</span>
                        <span className="text-primary font-semibold">{country.language}</span>
                      </div>
                      <div className="flex items-center justify-between py-1">
                        <span className="text-on-surface-variant">{country.insuranceLabel || 'Regulasi Asuransi'}</span>
                        <span className="text-primary font-semibold">{country.insurance}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-space-lg pt-0">
                  <Link className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-primary text-on-primary hover:bg-primary-container font-label-button text-label-button transition-colors shadow-sm" to="/lowongan-kerja">
                    <span>{country.btnText}</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* No Result State for search */}
          {filteredCountries.length === 0 && (
            <div className="text-center py-16 bg-surface-container-lowest rounded-xl mt-6" id="noResultNotice">
              <span className="material-symbols-outlined text-outline text-[48px] mb-2">search_off</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-1">Negara atau Sektor Tidak Ditemukan</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md mx-auto">
                Silakan periksa kata kunci pencarian Anda atau hubungi admin penempatan untuk memeriksa koridor penempatan bilateral khusus yang sedang dibuka.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
