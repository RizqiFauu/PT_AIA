import React, { useState } from 'react';

export default function NegaraFaq() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: 'Bagaimana memastikan bahwa visa yang diterbitkan adalah visa kerja resmi, bukan visa turis?',
      a: 'Seluruh calon pekerja yang diberangkatkan oleh PT Amal Ichwan Arindo menerima visa kerja berjenis Work Permit, Specified Skilled Worker Visa, atau Zezwolenie Typ A yang diterbitkan resmi oleh kedutaan besar negara tujuan di Jakarta. Dokumen ini dapat diverifikasi keasliannya pada sistem paspor elektronik dan dicocokkan dengan data e-PMI BP2MI sebelum keberangkatan di bandara internasional.'
    },
    {
      q: 'Apakah ada program yang bebas biaya penempatan (Zero-Fee)?',
      a: 'Ya. Mengacu pada Peraturan BP2MI No. 9 Tahun 2020 dan skema bilateral khusus (seperti skema SPSK Arab Saudi serta sektor tertentu di Taiwan dan Jepang), komponen biaya pokok seperti tiket penerbangan keberangkatan, visa, asuransi, dan tes kesehatan ditanggung sepenuhnya oleh pihak pemberi kerja (employer). Rincian biaya selalu dijelaskan secara transparan sebelum penandatanganan akad.'
    },
    {
      q: 'Bagaimana jika terjadi kendala kerja atau perselisihan upah saat berada di luar negeri?',
      a: 'Pekerja dilindungi oleh tiga lapis perlindungan: Perjanjian Kerja resmi yang memiliki kekuatan hukum, pendampingan dari kantor perwakilan/mitra agensi PT Amal Ichwan Arindo di negara penempatan, serta intervensi resmi dari Atase Ketenagakerjaan KBRI setempat. Kami menyediakan saluran komunikasi darurat 24 jam untuk merespons pelaporan pekerja.'
    },
    {
      q: 'Apakah calon pekerja wajib mengikuti pelatihan bahasa sebelum diberangkatkan?',
      a: 'Ya, untuk destinasi seperti Jepang dan Taiwan, sertifikasi bahasa (seperti JLPT/JFT-Basic untuk Jepang, dan pengenalan kosakata industri untuk Taiwan) adalah syarat mutlak regulasi. Seluruh kurikulum pelatihan diselenggarakan langsung di Balai Latihan Kerja kami dengan instruktur berlisensi.'
    }
  ];

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="w-full bg-surface-container-low/50 py-space-xl">
      <div className="max-w-4xl mx-auto px-margin">
        <div className="text-center mb-10">
          <span className="font-label-eyebrow text-label-eyebrow text-on-tertiary-container uppercase tracking-widest block mb-2">TANYA JAWAB REGULASI</span>
          <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
            Pertanyaan Lazim Seputar Negara Tujuan Penempatan
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2">
            Pahami hak dan ketentuan hukum Anda sebelum mengajukan lamaran penempatan luar negeri.
          </p>
        </div>
        <div className="space-y-space-sm" id="faqAccordion">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
                <button
                  className="w-full text-left p-space-md flex items-center justify-between gap-4 font-headline-sm text-headline-sm text-primary focus:outline-none"
                  type="button"
                  onClick={() => toggle(idx)}
                >
                  <span>{faq.q}</span>
                  <span className={`material-symbols-outlined text-outline transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                    expand_more
                  </span>
                </button>
                {isOpen && (
                  <div className="faq-content px-space-md pb-space-md text-body-sm text-on-surface-variant leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
