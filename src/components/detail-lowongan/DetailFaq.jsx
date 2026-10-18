import React from 'react';

export default function DetailFaq() {
  return (
    <section className="w-full bg-surface-container-low py-space-xl">
      <div className="max-w-7xl mx-auto px-margin">
        <div className="max-w-3xl mb-space-xl">
          <span className="font-label-eyebrow text-label-eyebrow text-on-tertiary-container uppercase tracking-wider block mb-1">
            Konsultasi &amp; Edukasi Hukum
          </span>
          <h2 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">
            Pertanyaan Umum (FAQ) Koridor Kerja Taiwan
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2">
            Pahami hak ketenagakerjaan, sistem gaji, aturan hukum keimigrasian, serta perlindungan konsuler Anda sebelum menandatangani perjanjian kerja resmi.
          </p>
        </div>
        {/* Accordion Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
          {/* FAQ 1 */}
          <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
            <div className="flex items-start gap-space-sm">
              <span className="material-symbols-outlined text-secondary text-[24px] shrink-0 mt-0.5">help</span>
              <div className="space-y-space-xs">
                <h3 className="font-headline-sm text-headline-sm text-on-surface">
                  Apakah gaji NT$ 27,470 sudah bersih atau masih ada potongan?
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  NT$ 27,470 adalah <strong>gaji pokok kotor resmi</strong> (Basic Salary) sesuai upah minimum Taiwan per tahun berjalan. Potongan resmi yang diizinkan oleh undang-undang meliputi premi asuransi kesehatan (NHI sekitar NT$ 426), asuransi tenaga kerja (Labor Insurance sekitar NT$ 600), dan biaya akomodasi/makan asrama (maksimal NT$ 2,500 - 3,500/bulan). Pekerja berhak menerima tambahan signifikan dari upah lembur resmi (OT).
                </p>
              </div>
            </div>
          </div>
          {/* FAQ 2 */}
          <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
            <div className="flex items-start gap-space-sm">
              <span className="material-symbols-outlined text-secondary text-[24px] shrink-0 mt-0.5">help</span>
              <div className="space-y-space-xs">
                <h3 className="font-headline-sm text-headline-sm text-on-surface">
                  Bagaimana jika saya belum bisa berbahasa Mandarin sama sekali?
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Tidak masalah. Seluruh kandidat yang lolos seleksi berkas dan tes fisik akan mendapatkan pelatihan bahasa Mandarin teknis manufaktur secara terstruktur di Balai Latihan Kerja (BLK) PT Amal Ichwan Arindo. Pelatihan mencakup pengenalan angka, terminologi mesin SMT, instruksi keselamatan kerja pabrik, dan frasa penting sehari-hari.
                </p>
              </div>
            </div>
          </div>
          {/* FAQ 3 */}
          <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
            <div className="flex items-start gap-space-sm">
              <span className="material-symbols-outlined text-secondary text-[24px] shrink-0 mt-0.5">help</span>
              <div className="space-y-space-xs">
                <h3 className="font-headline-sm text-headline-sm text-on-surface">
                  Apakah ada jaminan kepulangan jika kontrak telah selesai?
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Ya. Berdasarkan klausul Perjanjian Penempatan (PP) dan Perjanjian Kerja (PK) resmi yang disahkan oleh Kementerian Ketenagakerjaan RI dan Biro Ketenagakerjaan Taiwan, majikan wajib menyediakan tiket pesawat kepulangan ke Indonesia saat masa kontrak 3 tahun tuntas, terkecuali pekerja dan majikan sepakat melakukan perpanjangan kontrak kerja secara legal.
                </p>
              </div>
            </div>
          </div>
          {/* FAQ 4 */}
          <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
            <div className="flex items-start gap-space-sm">
              <span className="material-symbols-outlined text-secondary text-[24px] shrink-0 mt-0.5">help</span>
              <div className="space-y-space-xs">
                <h3 className="font-headline-sm text-headline-sm text-on-surface">
                  Siapa yang melindungi saya bila terjadi sengketa kerja di Taiwan?
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Pekerja migran resmi dinaungi oleh <strong>KDEI (Kantor Dagang dan Ekonomi Indonesia) di Taipei</strong> serta Call Center Perlindungan Tenaga Kerja Asing Taiwan di hotline <strong>1955</strong> (layanan bebas pulsa berbahasa Indonesia). Selain itu, agensi mitra PT Amal Ichwan Arindo memiliki perwakilan lapangan yang standby membantu mediasi dan pendampingan medis sewaktu-waktu.
                </p>
              </div>
            </div>
          </div>
          {/* FAQ 5 */}
          <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
            <div className="flex items-start gap-space-sm">
              <span className="material-symbols-outlined text-secondary text-[24px] shrink-0 mt-0.5">help</span>
              <div className="space-y-space-xs">
                <h3 className="font-headline-sm text-headline-sm text-on-surface">
                  Berapa lama proses dari pendaftaran hingga jadwal terbang?
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Secara umum membutuhkan waktu antara <strong>2 hingga 2,5 bulan</strong>. Waktu tersebut meliputi penerbitan Calling Visa dari Biro Imigrasi Taiwan, proses legalisasi TETO Jakarta, pelatihan BLK, tes kesehatan tahap akhir, dan registrasi paspor biometrik di Sistem Komputerisasi Tenaga Kerja Luar Negeri (SISKOP2MI).
                </p>
              </div>
            </div>
          </div>
          {/* FAQ 6 */}
          <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
            <div className="flex items-start gap-space-sm">
              <span className="material-symbols-outlined text-secondary text-[24px] shrink-0 mt-0.5">help</span>
              <div className="space-y-space-xs">
                <h3 className="font-headline-sm text-headline-sm text-on-surface">
                  Apakah paspor dan dokumen asli ditahan selama bekerja?
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  <strong>Sama sekali tidak.</strong> Penahanan paspor atau dokumen asli oleh pihak manapun merupakan tindakan ilegal menurut hukum Taiwan dan regulasi BP2MI. Paspor, ARC (Alien Resident Certificate), dan buku rekening bank Taiwan wajib dipegang sendiri secara mandiri oleh pekerja yang bersangkutan.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Direct Assistance Banner */}
        <div className="mt-space-xl bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col md:flex-row items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-md">
            <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-primary text-[24px]">support_agent</span>
            </div>
            <div>
              <h4 className="font-headline-sm text-headline-sm text-on-surface">Masih Memiliki Pertanyaan Spesifik Mengenai Lowongan Ini?</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                Hubungi Konselor Penempatan Koridor Asia Timur PT Amal Ichwan Arindo untuk konsultasi pra-pemberangkatan cuma-cuma.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-space-sm shrink-0">
            <a className="inline-flex items-center gap-2 px-space-md py-2.5 bg-surface-container-low text-primary hover:bg-surface-container font-label-button text-label-button rounded transition-colors" href="https://wa.me/6281200000000" rel="noopener noreferrer" target="_blank">
              <span className="material-symbols-outlined text-[18px]">chat</span>
              <span>Tanya via WhatsApp</span>
            </a>
            <a className="inline-flex items-center gap-2 px-space-md py-2.5 bg-primary text-on-primary font-label-button text-label-button rounded hover:bg-primary-container transition-colors" href="#form-lamaran">
              <span className="material-symbols-outlined text-[18px]">arrow_upward</span>
              <span>Isi Formulir</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
