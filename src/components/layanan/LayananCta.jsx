import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function LayananCta() {
  const { t } = useTranslation();

  return (
    <section className="w-full pb-20 bg-surface">
      <div className="max-w-[1280px] mx-auto px-margin">
        <div className="relative bg-primary-container rounded-2xl overflow-hidden shadow-xl p-10 lg:p-16 text-on-primary">
          {/* Ambient Decorative Circles */}
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-secondary/20 blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-tertiary-fixed-dim/10 blur-3xl pointer-events-none"></div>
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-surface-container-lowest/10 text-tertiary-fixed-dim font-label-eyebrow text-label-eyebrow uppercase tracking-widest mb-4">
                <span className="material-symbols-outlined text-[15px]">headset_mic</span>
                <span>{t('layanan.cta.eyebrow')}</span>
              </div>
              <h2 className="font-headline-xl text-headline-xl font-bold tracking-tight text-on-primary mb-4">
                {t('layanan.cta.title')}
              </h2>
              <p className="font-body-lg text-body-lg text-on-primary-container leading-relaxed">
                {t('layanan.cta.subtitle')}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-4 shrink-0 w-full lg:w-auto">
              <Link className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-label-button text-label-button bg-tertiary-fixed text-on-tertiary-fixed hover:bg-tertiary-fixed-dim transition-all shadow-md font-bold" to="/kontak">
                <span className="material-symbols-outlined text-[20px]">calendar_month</span>
                <span>{t('layanan.cta.button')}</span>
              </Link>
              <a className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-label-button text-label-button bg-surface-container-lowest/15 hover:bg-surface-container-lowest/25 text-on-primary transition-all backdrop-blur-sm" href="https://wa.me/6281289001234" target="_blank" rel="noopener noreferrer">
                <span className="material-symbols-outlined text-[20px]">chat</span>
                <span>{t('layanan.cta.chatWhatsApp')}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
