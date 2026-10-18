import React from 'react';

export default function DetailContent() {
  return (
    <article className="lg:col-span-8 flex flex-col space-y-space-xl">
      {/* Visual Documentary Anchor: Modern Fab Facility */}
      <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm flex flex-col">
        <div className="relative w-full h-72 sm:h-80 md:h-96">
          <img
            className="w-full h-full object-cover"
            data-alt="Modern high tech electronic manufacturing cleanroom factory interior in Taiwan, skilled precision workers in clean suits operating automated high precision SMT assembly machines under crisp industrial LED architectural lighting with deep navy and clean metallic tones."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCveDimjuSDSB_y3v-npkgu_jHNalXz5vxH6q5tMTbT9EcEVib7LWS5-ioV33cllbtVDpHEat96UHlfpyHxReLx8MhXx_l7yW3p4Dw4xqvdLNvNjpi94wtwBI6qqXfXqyBT8riRCLOJ59pa4zy-21kCRC2hMNuW6L9fi0YUT3xQmEAV5IxK_e0VE-YdpZSszeMw-ngre-zd23hs-xS6moqKly38WoZFgFQpnWTYngnVbhgKI4RV_hKNYQ"
            alt="Fasilitas Pabrik Mitra Taiwan"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent flex items-end p-space-lg">
            <div className="text-on-primary">
              <span className="inline-block px-2.5 py-0.5 bg-on-tertiary-container text-surface-container-lowest font-label-eyebrow text-label-eyebrow uppercase rounded mb-1">
                Fasilitas Pabrik Mitra
              </span>
              <h3 className="font-headline-sm text-headline-sm font-semibold">
                Kawasan Industri Sains Presisi — Hsinchu &amp; Taichung Hub
              </h3>
              <p className="font-body-sm text-body-sm text-surface-container-low max-w-xl">
                Lingkungan kerja bersih bersertifikasi ISO 9001 &amp; ISO 14001, kontrol suhu otomatis 22°C, sistem hepa-filter, dan tata kelola K3 berstandar internasional.
              </p>
            </div>
          </div>
        </div>
        <div className="p-space-lg grid grid-cols-1 sm:grid-cols-3 gap-space-md bg-surface-container-low">
          <div className="flex items-center gap-space-sm">
            <span className="material-symbols-outlined text-secondary text-[28px]">ac_unit</span>
            <div>
              <div className="font-label-eyebrow text-label-eyebrow text-secondary uppercase">Ruang Kerja</div>
              <div className="font-headline-sm text-headline-sm text-on-surface">Cleanroom Cl. 10K</div>
            </div>
          </div>
          <div className="flex items-center gap-space-sm">
            <span className="material-symbols-outlined text-secondary text-[28px]">schedule</span>
            <div>
              <div className="font-label-eyebrow text-label-eyebrow text-secondary uppercase">Sistem Shift</div>
              <div className="font-headline-sm text-headline-sm text-on-surface">2 Shift Rotasi Terjadwal</div>
            </div>
          </div>
          <div className="flex items-center gap-space-sm">
            <span className="material-symbols-outlined text-secondary text-[28px]">restaurant</span>
            <div>
              <div className="font-label-eyebrow text-label-eyebrow text-secondary uppercase">Fasilitas Konsumsi</div>
              <div className="font-headline-sm text-headline-sm text-on-surface">Kantin Halal / Bersubsidi</div>
            </div>
          </div>
        </div>
      </div>

      {/* Section A: Ringkasan Deskripsi Pekerjaan */}
      <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
        <div className="flex items-center gap-space-sm mb-space-md">
          <div className="w-8 h-8 rounded bg-surface-container flex items-center justify-center">
            <span className="material-symbols-outlined text-secondary text-[20px]">feed</span>
          </div>
          <h2 className="font-headline-md text-headline-md text-on-surface">
            Ringkasan Posisi &amp; Gambaran Operasional
          </h2>
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-md">
          PT Amal Ichwan Arindo bekerja sama langsung dengan konsorsium manufaktur komponen elektronik terkemuka di Taiwan untuk membuka penempatan kerja formal bagi tenaga kerja terampil Indonesia. Posisi ini berfokus pada operasional lini perakitan presisi, monitoring papan sirkuit cetak (PCB), pemasangan komponen mikro, serta inspeksi optik otomatis (Automated Optical Inspection / AOI).
        </p>
        <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
          Pekerja akan menerima pelatihan intensif pengenalan mesin modern, standar bahasa Mandarin teknis pabrik (disediakan sebelum keberangkatan oleh BLK Amal Ichwan Arindo), serta pembekalan budaya kerja profesional selama 1 bulan sebelum penempatan aktif di lini produksi.
        </p>
      </div>

      {/* Section B: Tugas & Tanggung Jawab Harian */}
      <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
        <div className="flex items-center gap-space-sm mb-space-md">
          <div className="w-8 h-8 rounded bg-surface-container flex items-center justify-center">
            <span className="material-symbols-outlined text-secondary text-[20px]">checklist</span>
          </div>
          <h2 className="font-headline-md text-headline-md text-on-surface">
            Tugas &amp; Tanggung Jawab Harian
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
          <div className="bg-surface p-space-md rounded flex items-start gap-space-sm">
            <div className="w-6 h-6 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
              1
            </div>
            <div>
              <h4 className="font-label-button text-label-button text-on-surface">Pengoperasian Mesin SMT &amp; Manual Insert</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                Menyuapkan bahan baku komponen mikro ke feeder mesin, memastikan perakitan berlangsung tanpa hambatan feeder jam, dan menjaga kontinuitas aliran produksi.
              </p>
            </div>
          </div>
          <div className="bg-surface p-space-md rounded flex items-start gap-space-sm">
            <div className="w-6 h-6 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
              2
            </div>
            <div>
              <h4 className="font-label-button text-label-button text-on-surface">Pengendalian Mutu &amp; Visual Inspection (AOI)</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                Melakukan pengecekan ketelitian solder, pin defect, dan polaritas sirkuit dengan mikroskop khusus atau layar monitor sistem pengujian optik otomatis.
              </p>
            </div>
          </div>
          <div className="bg-surface p-space-md rounded flex items-start gap-space-sm">
            <div className="w-6 h-6 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
              3
            </div>
            <div>
              <h4 className="font-label-button text-label-button text-on-surface">Pencatatan Logbook Produksi &amp; Yield Rate</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                Mencatat kuantitas hasil kerja, mendata barang afkir/reject, serta memasukkan data operasional sederhana ke sistem barcode terminal stasiun kerja.
              </p>
            </div>
          </div>
          <div className="bg-surface p-space-md rounded flex items-start gap-space-sm">
            <div className="w-6 h-6 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
              4
            </div>
            <div>
              <h4 className="font-label-button text-label-button text-on-surface">Kepatuhan Keselamatan K3 &amp; Protokol ESD</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                Mengenakan seragam antistatik (ESD gown), gelang grounding, masker partikel mikro, serta menjalankan prinsip 5S (Seiri, Seiton, Seiso, Seiketsu, Shitsuke).
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section C: Persyaratan & Kualifikasi Kandidat */}
      <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
        <div className="flex items-center gap-space-sm mb-space-md">
          <div className="w-8 h-8 rounded bg-surface-container flex items-center justify-center">
            <span className="material-symbols-outlined text-secondary text-[20px]">person_check</span>
          </div>
          <h2 className="font-headline-md text-headline-md text-on-surface">
            Persyaratan &amp; Kualifikasi Kandidat
          </h2>
        </div>
        <div className="space-y-space-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
            <div className="bg-surface-container-low p-space-md rounded">
              <span className="font-label-eyebrow text-label-eyebrow text-secondary uppercase block mb-1">Kriteria Dasar</span>
              <ul className="space-y-2 font-body-sm text-body-sm text-on-surface">
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-on-tertiary-container text-[18px] shrink-0">check_circle</span>
                  <span>Usia: <strong>19 – 32 tahun</strong> saat pendaftaran resmi.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-on-tertiary-container text-[18px] shrink-0">check_circle</span>
                  <span>Jenis Kelamin: <strong>Pria &amp; Wanita</strong> (Terbuka untuk Fresh Graduate).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-on-tertiary-container text-[18px] shrink-0">check_circle</span>
                  <span>Pendidikan: Minimal <strong>SMK / SMA sederajat</strong> (diutamakan Teknik Elektronika, Mesin, Listrik, atau IPA).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-on-tertiary-container text-[18px] shrink-0">check_circle</span>
                  <span>Tinggi &amp; Berat Badan Proporsional (Pria min. 160 cm, Wanita min. 150 cm).</span>
                </li>
              </ul>
            </div>
            <div className="bg-surface-container-low p-space-md rounded">
              <span className="font-label-eyebrow text-label-eyebrow text-secondary uppercase block mb-1">Standar Medis &amp; Fisik</span>
              <ul className="space-y-2 font-body-sm text-body-sm text-on-surface">
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-on-tertiary-container text-[18px] shrink-0">check_circle</span>
                  <span><strong>Medical Fit to Work</strong> di Sarana Medis Rekomendasi Resmi Kemenaker/BP2MI.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-on-tertiary-container text-[18px] shrink-0">check_circle</span>
                  <span>Mata normal atau minus maksimal -2.00 (<strong>Tidak buta warna total maupun parsial</strong>).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-on-tertiary-container text-[18px] shrink-0">check_circle</span>
                  <span>Bebas dari riwayat penyakit menular (TBC, Hepatitis B/C, HIV/AIDS, Sifilis).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-on-tertiary-container text-[18px] shrink-0">check_circle</span>
                  <span>Tidak memiliki tato terbuka di area yang terlihat saat bekerja, bebas tindik pria.</span>
                </li>
              </ul>
            </div>
          </div>
          {/* Integritas Dokumen Valid */}
          <div className="bg-surface-container-high/40 p-space-md rounded flex items-start gap-space-sm">
            <span className="material-symbols-outlined text-on-tertiary-container text-[22px] shrink-0 mt-0.5">verified_user</span>
            <div>
              <h4 className="font-label-button text-label-button text-on-surface">Kewajiban Keaslian Dokumen Resmi</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                Kandidat wajib memiliki dan mampu menunjukkan dokumen fisik asli saat verifikasi berkas: KTP Elektronik, Kartu Keluarga, Akta Kelahiran, Ijazah Terakhir, Surat Izin Keluarga bermeterai resmi, dan SKCK dari Polres setempat.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section D: Fasilitas & Hak Pekerja Migran */}
      <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
        <div className="flex items-center gap-space-sm mb-space-md">
          <div className="w-8 h-8 rounded bg-surface-container flex items-center justify-center">
            <span className="material-symbols-outlined text-secondary text-[20px]">card_membership</span>
          </div>
          <h2 className="font-headline-md text-headline-md text-on-surface">
            Fasilitas &amp; Hak Pekerja Sesuai Regulasi Taiwan
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md mb-space-md">
          <div className="bg-surface p-space-md rounded flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded bg-surface-container flex items-center justify-center mb-space-sm">
                <span className="material-symbols-outlined text-primary text-[22px]">apartment</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-1">Akomodasi Terstandar</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Asrama resmi pekerja ber-AC, fasilitas sanitasi air hangat, wifi gratis, mesin cuci komunal, dan sistem keamanan kartu akses 24 jam.
              </p>
            </div>
            <span className="font-label-caption text-label-caption text-secondary mt-space-sm">Potongan akomodasi sesuai batas maksimal Depnaker Taiwan</span>
          </div>
          <div className="bg-surface p-space-md rounded flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded bg-surface-container flex items-center justify-center mb-space-sm">
                <span className="material-symbols-outlined text-primary text-[22px]">medical_services</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-1">Asuransi Lengkap Ganda</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Terdaftar wajib pada Taiwan Labor Insurance (勞保) dan National Health Insurance (健保) + perlindungan BPJS Ketenagakerjaan Indonesia.
              </p>
            </div>
            <span className="font-label-caption text-label-caption text-secondary mt-space-sm">Menjamin biaya berobat dan rawat inap rumah sakit lokal</span>
          </div>
          <div className="bg-surface p-space-md rounded flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded bg-surface-container flex items-center justify-center mb-space-sm">
                <span className="material-symbols-outlined text-primary text-[22px]">flight_takeoff</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-1">Tiket &amp; Kontrak Resmi</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Perjanjian Kerja (PK) dwibahasa (Indonesia - Mandarin), perlindungan visa kerja resmi resident certificate (ARC), tiket kepulangan sesuai PK.
              </p>
            </div>
            <span className="font-label-caption text-label-caption text-secondary mt-space-sm">Legalitas penuh dengan pengawasan KDEI Taipei</span>
          </div>
        </div>
        {/* Overtime & Bonus Info Box */}
        <div className="bg-surface-container-low p-space-md rounded flex flex-col sm:flex-row items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-md">
            <span className="material-symbols-outlined text-on-tertiary-container text-[32px]">more_time</span>
            <div>
              <h4 className="font-label-button text-label-button text-on-surface">Kalkulasi Upah Lembur (Overtime) Berdasarkan Taiwan Labor Standards Act</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                2 jam pertama: 1,34x upah per jam | Jam ke-3 dan seterusnya: 1,67x upah per jam | Hari libur resmi: 2x lipat. Rata-rata lembur 30 - 45 jam/bulan bagi yang berminat.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section E: Rincian Struktur Biaya Penempatan (Cost Structure Breakdown) */}
      <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
        <div className="flex items-center justify-between flex-wrap gap-space-sm mb-space-md">
          <div className="flex items-center gap-space-sm">
            <div className="w-8 h-8 rounded bg-surface-container flex items-center justify-center">
              <span className="material-symbols-outlined text-secondary text-[20px]">account_balance_wallet</span>
            </div>
            <h2 className="font-headline-md text-headline-md text-on-surface">
              Transparansi Biaya Penempatan (Cost Structure)
            </h2>
          </div>
          <span className="inline-flex items-center gap-1 font-label-eyebrow text-label-eyebrow px-2.5 py-1 bg-surface-container-low text-secondary rounded">
            Sesuai Kepmenaker &amp; Perka BP2MI
          </span>
        </div>
        <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
          PT Amal Ichwan Arindo menjamin transparansi tanpa biaya tersembunyi (Zero Hidden Costs). Biaya komponen diatur secara ketat sesuai regulasi bilateral resmi Republik Indonesia dan Pemerintah Taiwan.
        </p>
        {/* Table of Costs */}
        <div className="overflow-x-auto rounded bg-surface-container-lowest shadow-sm">
          <table className="w-full text-left font-body-sm text-body-sm">
            <thead className="bg-surface-container-low text-secondary font-label-eyebrow text-label-eyebrow uppercase">
              <tr>
                <th className="py-3 px-4">Komponen Pengeluaran</th>
                <th className="py-3 px-4">Penanggung Beban</th>
                <th className="py-3 px-4">Deskripsi / Dasar Aturan</th>
                <th className="py-3 px-4 text-right">Status Finansial</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-container">
              <tr className="hover:bg-surface-container-lowest">
                <td className="py-3 px-4 font-semibold text-on-surface">Tiket Pesawat Keberangkatan (Jakarta – Taipei)</td>
                <td className="py-3 px-4"><span className="px-2 py-0.5 rounded text-xs bg-surface-container-high font-medium text-primary">Majikan (Employer)</span></td>
                <td className="py-3 px-4 text-on-surface-variant">Ditanggung sepenuhnya oleh perusahaan Taiwan</td>
                <td className="py-3 px-4 text-right font-bold text-on-surface">GRATIS</td>
              </tr>
              <tr className="hover:bg-surface-container-lowest">
                <td className="py-3 px-4 font-semibold text-on-surface">Biaya Pembuatan Visa Kerja (TETO)</td>
                <td className="py-3 px-4"><span className="px-2 py-0.5 rounded text-xs bg-surface-container-high font-medium text-primary">Majikan / P3MI</span></td>
                <td className="py-3 px-4 text-on-surface-variant">Legalitas permit resmi Kementerian Ketenagakerjaan Taiwan</td>
                <td className="py-3 px-4 text-right font-bold text-on-surface">DITANGGUNG</td>
              </tr>
              <tr className="hover:bg-surface-container-lowest">
                <td className="py-3 px-4 font-semibold text-on-surface">Medical Check-up Pra-Terbang (Tahap II)</td>
                <td className="py-3 px-4"><span className="px-2 py-0.5 rounded text-xs bg-surface-container text-on-surface font-medium">Kandidat</span></td>
                <td className="py-3 px-4 text-on-surface-variant">Klinik Berizin Kemenaker (Standar lab khusus Taiwan)</td>
                <td className="py-3 px-4 text-right font-semibold text-on-surface">Rp 1.150.000</td>
              </tr>
              <tr className="hover:bg-surface-container-lowest">
                <td className="py-3 px-4 font-semibold text-on-surface">Paspor Elektronik (48 Halaman)</td>
                <td className="py-3 px-4"><span className="px-2 py-0.5 rounded text-xs bg-surface-container text-on-surface font-medium">Kandidat</span></td>
                <td className="py-3 px-4 text-on-surface-variant">PNBP Kantor Imigrasi RI secara mandiri</td>
                <td className="py-3 px-4 text-right font-semibold text-on-surface">Sesuai Tarif PNBP</td>
              </tr>
              <tr className="hover:bg-surface-container-lowest">
                <td className="py-3 px-4 font-semibold text-on-surface">Pelatihan Bahasa &amp; Sertifikasi BLK</td>
                <td className="py-3 px-4"><span className="px-2 py-0.5 rounded text-xs bg-surface-container-high font-medium text-primary">Subsidi Amal Ichwan</span></td>
                <td className="py-3 px-4 text-on-surface-variant">Modul bahasa mandarin manufaktur &amp; pengenalan cleanroom</td>
                <td className="py-3 px-4 text-right font-bold text-on-surface">SUBSIDI PENUH</td>
              </tr>
              <tr className="hover:bg-surface-container-lowest">
                <td className="py-3 px-4 font-semibold text-on-surface">Asuransi BPJS PMI (Pra, Masa &amp; Purna)</td>
                <td className="py-3 px-4"><span className="px-2 py-0.5 rounded text-xs bg-surface-container text-on-surface font-medium">Kandidat / KUR PMI</span></td>
                <td className="py-3 px-4 text-on-surface-variant">Perlindungan jaminan kecelakaan &amp; kematian resmi negara</td>
                <td className="py-3 px-4 text-right font-semibold text-on-surface">Rp 370.000</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* KUR PMI Alternative notice */}
        <div className="mt-space-md p-space-md bg-surface-container-low rounded flex items-center justify-between flex-wrap gap-space-sm">
          <div className="flex items-center gap-space-sm">
            <span className="material-symbols-outlined text-secondary text-[22px]">savings</span>
            <span className="font-body-sm text-body-sm text-on-surface">
              Tersedia fasilitas <strong>Kredit Usaha Rakyat (KUR) PMI</strong> resmi Bank Himbara (BNI/Mandiri/BRI) tanpa jaminan sertifikat.
            </span>
          </div>
          <a className="font-label-button text-label-button text-on-tertiary-container hover:underline flex items-center gap-1" href="#">
            <span>Pelajari Skema KUR</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </a>
        </div>
      </div>

      {/* Section F: Alur Seleksi & Jadwal Tahapan Penempatan */}
      <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
        <div className="flex items-center gap-space-sm mb-space-md">
          <div className="w-8 h-8 rounded bg-surface-container flex items-center justify-center">
            <span className="material-symbols-outlined text-secondary text-[20px]">timeline</span>
          </div>
          <h2 className="font-headline-md text-headline-md text-on-surface">
            Alur Seleksi &amp; Timeline Penempatan Resmi
          </h2>
        </div>
        {/* Stepper Container */}
        <div className="relative pl-6 sm:pl-8 space-y-space-lg before:content-[''] before:absolute before:left-2 sm:before:left-3.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-surface-container-highest">
          {/* Step 1 */}
          <div className="relative">
            <div className="absolute -left-6 sm:-left-8 top-0.5 w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center text-xs font-bold ring-4 ring-surface-container-lowest">
              1
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-headline-sm text-headline-sm text-on-surface">Pengajuan Form Online &amp; Seleksi Berkas</h3>
                <span className="px-2 py-0.5 bg-surface-container-high text-xs font-semibold rounded text-primary">Hari ke 1-3</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                Pengisian formulir resmi di laman ini. Verifikasi data NIK kependudukan, kesesuaian umur, dan kualifikasi fisik awal oleh tim rekrutmen PT Amal Ichwan Arindo.
              </p>
            </div>
          </div>
          {/* Step 2 */}
          <div className="relative">
            <div className="absolute -left-6 sm:-left-8 top-0.5 w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center text-xs font-bold ring-4 ring-surface-container-lowest">
              2
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-headline-sm text-headline-sm text-on-surface">Wawancara User Langsung (User Interview)</h3>
                <span className="px-2 py-0.5 bg-surface-container-high text-xs font-semibold rounded text-primary">Minggu ke-2</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                Wawancara daring langsung dengan delegasi HRD pabrik Taiwan atau wawancara tatap muka di Training Center Arindo Jakarta. Tes ketangkasan tangan &amp; tes buta warna.
              </p>
            </div>
          </div>
          {/* Step 3 */}
          <div className="relative">
            <div className="absolute -left-6 sm:-left-8 top-0.5 w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center text-xs font-bold ring-4 ring-surface-container-lowest">
              3
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-headline-sm text-headline-sm text-on-surface">Medical Check-up Lengkap &amp; Pelatihan Bahasa</h3>
                <span className="px-2 py-0.5 bg-surface-container-high text-xs font-semibold rounded text-primary">Minggu ke 3-6</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                Pemeriksaan kesehatan di laboratorium tersumpah Kemenaker RI. Dilanjutkan kursus bahasa Mandarin dasar pabrik serta orientasi keselamatan kerja Cleanroom.
              </p>
            </div>
          </div>
          {/* Step 4 */}
          <div className="relative">
            <div className="absolute -left-6 sm:-left-8 top-0.5 w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center text-xs font-bold ring-4 ring-surface-container-lowest">
              4
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-headline-sm text-headline-sm text-on-surface">Penerbitan Visa Kerja, E-KTKLN, &amp; PAP</h3>
                <span className="px-2 py-0.5 bg-surface-container-high text-xs font-semibold rounded text-primary">Minggu ke 7-8</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                Pengesahan Perjanjian Kerja (PK), pengurusan Visa Kerja TETO, pembekalan akhir pemberangkatan (PAP BP2MI), dan pencetakan E-KTKLN resmi di SISKOP2MI.
              </p>
            </div>
          </div>
          {/* Step 5 */}
          <div className="relative">
            <div className="absolute -left-6 sm:-left-8 top-0.5 w-6 h-6 rounded-full bg-on-tertiary-container text-surface-container-lowest flex items-center justify-center text-xs font-bold ring-4 ring-surface-container-lowest">
              <span className="material-symbols-outlined text-[14px]">flight</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-headline-sm text-headline-sm text-on-surface">Pemberangkatan Resmi &amp; Penjemputan di Taoyuan</h3>
                <span className="px-2 py-0.5 bg-surface-container-high text-xs font-semibold rounded text-primary">Minggu ke 9-10</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                Pemberangkatan grup bersama dari Bandara Soekarno-Hatta (CGK) menuju Bandara Taoyuan Taiwan (TPE). Disambut oleh staf perwakilan resmi Amal Ichwan Arindo dan agensi penjamin Taiwan.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section G: Profil Lingkungan & Kehidupan di Taiwan */}
      <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
        <h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-sm">
          Tentang Kota Penempatan: Kawasan Hsinchu &amp; Taichung
        </h3>
        <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-md">
          Hsinchu sering dijuluki sebagai "Silicon Valley of Taiwan", sementara Taichung merupakan episentrum manufaktur mesin presisi paling modern di Asia Timur. Fasilitas transportasi sangat mudah dengan kereta cepat (THSR), komunitas pekerja Indonesia sangat ramah, terdapat banyak toko bahan pangan halal, serta masjid resmi yang tersebar di kota-kota utama.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
          <div className="relative h-44 rounded overflow-hidden">
            <img
              className="w-full h-full object-cover"
              data-alt="Editorial candid photography of vibrant Taichung City high tech district Taiwan, clean infrastructure, bullet train station nearby, with clear blue sky and modern corporate architecture."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlQwbmM799R5_y2JzKKLxnTpN1KtTnsIUugETAJrRZ4hieV-VjzCweIQw8AXOmRkYjGBg5LNgOu9sdFSnu2V6MZgaO2ZaM8nru6tSEhfNv_iR3Weo8AOdphMmEfQzUwNH9d3v39zgJlcFmdkBjQmo94tyJ1qkySmBPs2j0e80eFt53Nu_LkAIBkJ8v9sm8yIQOuytvSb-kC0qj5S5tVN0GljfzSF9n832oKpFfYAY2B3g8l9kXHJjULg"
              alt="Pusat Kota Taichung"
            />
            <div className="absolute bottom-2 left-2 px-2 py-1 bg-primary/80 backdrop-blur-sm rounded text-on-primary font-label-caption text-label-caption">
              Pusat Kota Taichung
            </div>
          </div>
          <div className="relative h-44 rounded overflow-hidden">
            <img
              className="w-full h-full object-cover"
              data-alt="Documentary lifestyle photo of overseas workers community center in Taiwan, showing clean dormitory lounge area with study desks and high speed internet environment."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpiWBXxy1mR09zIDJaIg8jkFLFn1JouewwhBwZ5KreYOQXEcOM042vBGagiKhb3gme-dPlnRW37lVf7yxW5gxV-SvnvLea5VPjvb2YlGzmzFhstHHWxnudVYSI9cs-zh-8dVKfjGo2XOvmiR5XbneFdutUIfzxhfkPK7TJGPDILehSwyKbph0k1I6X2Q3HCjnbhYUQlhH0OaosjmHnVgTv46ARBRkmp6thVcMFwKWeHbBHZ67p3Kp_8A"
              alt="Fasilitas Asrama Terstandar"
            />
            <div className="absolute bottom-2 left-2 px-2 py-1 bg-primary/80 backdrop-blur-sm rounded text-on-primary font-label-caption text-label-caption">
              Fasilitas Asrama Terstandar
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
