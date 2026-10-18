import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function LayananFaq() {
  const { t } = useTranslation();
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: t('layanan.faq.q1'),
      a: t('layanan.faq.a1')
    },
    {
      q: t('layanan.faq.q2'),
      a: t('layanan.faq.a2')
    },
    {
      q: t('layanan.faq.q3'),
      a: t('layanan.faq.a3')
    },
    {
      q: t('layanan.faq.q4'),
      a: t('layanan.faq.a4')
    },
    {
      q: t('layanan.faq.q5'),
      a: t('layanan.faq.a5')
    }
  ];

  return (
    <section className="w-full py-20 bg-surface">
      <div className="max-w-[1280px] mx-auto px-margin">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* FAQ Left Column Info */}
          <div className="lg:w-1/3 flex flex-col">
            <span className="font-label-eyebrow text-label-eyebrow text-on-tertiary-container uppercase tracking-widest font-bold mb-2">
              {t('layanan.faq.eyebrow')}
            </span>
            <h2 className="font-headline-xl text-headline-xl text-primary font-bold mb-4">
              {t('layanan.faq.title')}
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
              {t('layanan.faq.desc')}
            </p>
            <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm">
              <div className="flex items-center gap-3 text-primary mb-3">
                <span className="material-symbols-outlined text-secondary text-2xl">support_agent</span>
                <span className="font-headline-sm text-headline-sm font-semibold">
                  {t('layanan.faq.contactCardTitle')}
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">
                {t('layanan.faq.contactCardDesc')}
              </p>
              <a className="inline-flex items-center gap-2 font-label-button text-label-button text-primary hover:text-secondary font-bold" href="tel:+62215558900">
                <span>{t('layanan.faq.contactCardHotline')}</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </a>
            </div>
          </div>
          {/* FAQ Right Column Accordion Items */}
          <div className="lg:w-2/3 flex flex-col space-y-4" id="faq-container">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className="faq-card bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden transition-all">
                  <button
                    className="faq-trigger w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                    type="button"
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="font-headline-sm text-headline-sm text-primary font-semibold">{faq.q}</span>
                    <span className={`material-symbols-outlined text-on-surface-variant transition-transform duration-300 faq-icon ${isOpen ? 'rotate-180' : ''}`}>
                      expand_more
                    </span>
                  </button>
                  {isOpen && (
                    <div className="faq-content px-6 pb-6 pt-1 text-on-surface-variant font-body-md text-body-md leading-relaxed border-t border-surface-container/40">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
