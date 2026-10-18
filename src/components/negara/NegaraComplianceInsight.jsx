import React from 'react';
import { Link } from 'react-router-dom';

export default function NegaraComplianceInsight() {
  return (
    <section className="w-full bg-primary-container text-on-primary py-space-xl">
      <div className="max-w-7xl mx-auto px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          <div className="lg:col-span-7 space-y-space-md">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-lowest/10 text-tertiary-fixed-dim rounded-md">
              <span className="material-symbols-outlined text-[16px]">verified</span>
              <span className="font-label-eyebrow text-label-eyebrow uppercase tracking-widest">TRANSPARANSI TANPA KOMPROMI</span>
            </div>
            <h2 className="font-headline-xl text-headline-xl text-on-primary font-bold leading-tight">
              Komitmen Kami Terhadap Zero-Deception &amp; Tata Kelola Migrasi Beradab
            </h2>
            <p className="font-body-md text-body-md text-on-primary-container leading-relaxed">
              PT Amal Ichwan Arindo menolak segala bentuk pembebanan biaya penempatan berlebih (overcharging) serta penipuan dokumen. Seluruh calon pekerja migran mendapatkan rincian biaya yang transparan, asuransi perlindungan sebelum, selama, dan setelah kontrak kerja berakhir di bawah pengawasan atase ketenagakerjaan KBRI.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-md pt-2">
              <div className="bg-surface-container-lowest/5 p-4 rounded-lg">
                <span className="material-symbols-outlined text-tertiary-fixed-dim text-[24px] mb-1">lock_clock</span>
                <h4 className="font-headline-sm text-headline-sm text-on-primary mb-1">Visa Terverifikasi</h4>
                <p className="font-label-caption text-label-caption text-on-primary-container">Semua visa diproses langsung melalui perwakilan kedutaan resmi.</p>
              </div>
              <div className="bg-surface-container-lowest/5 p-4 rounded-lg">
                <span className="material-symbols-outlined text-tertiary-fixed-dim text-[24px] mb-1">shield_with_heart</span>
                <h4 className="font-headline-sm text-headline-sm text-on-primary mb-1">Asuransi Ganda</h4>
                <p className="font-label-caption text-label-caption text-on-primary-container">BPJS Ketenagakerjaan RI ditambah skema asuransi wajib negara setempat.</p>
              </div>
              <div className="bg-surface-container-lowest/5 p-4 rounded-lg">
                <span className="material-symbols-outlined text-tertiary-fixed-dim text-[24px] mb-1">contact_phone</span>
                <h4 className="font-headline-sm text-headline-sm text-on-primary mb-1">Helpdesk 24 Jam</h4>
                <p className="font-label-caption text-label-caption text-on-primary-container">Layanan pendampingan darurat pekerja di setiap negara penempatan.</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 bg-surface-container-lowest text-on-surface p-space-lg rounded-xl shadow-md">
            <h3 className="font-headline-sm text-headline-sm text-primary mb-3">Verifikasi Mandiri Status Izin P3MI</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">
              Pastikan keamanan Anda dengan memverifikasi data legalitas perizinan PT Amal Ichwan Arindo secara independen melalui portal resmi pemerintah:
            </p>
            <ul className="space-y-space-sm font-body-sm text-body-sm mb-6">
              <li className="flex items-center justify-between p-2.5 rounded bg-surface-container-low">
                <span className="text-on-surface-variant font-medium">SIP3MI Kemenaker RI</span>
                <span className="text-primary font-bold">Terdaftar &amp; Aktif</span>
              </li>
              <li className="flex items-center justify-between p-2.5 rounded bg-surface-container-low">
                <span className="text-on-surface-variant font-medium">Portal SISKOP2MI</span>
                <span className="text-primary font-bold">Terakreditasi</span>
              </li>
              <li className="flex items-center justify-between p-2.5 rounded bg-surface-container-low">
                <span className="text-on-surface-variant font-medium">Sertifikat ISO 9001:2015</span>
                <span className="text-primary font-bold">Penempatan Terstandar</span>
              </li>
            </ul>
            <Link className="inline-flex items-center justify-center w-full py-2.5 px-4 rounded-lg bg-primary text-on-primary hover:bg-primary-container font-label-button text-label-button transition-colors" to="/legalitas-perusahaan">
              Lihat Berkas Legalitas Resmi Kami
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
