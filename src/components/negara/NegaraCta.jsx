import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function NegaraCta() {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-surface-container-lowest py-space-xl">
      <div className="max-w-7xl mx-auto px-margin">
        <div className="bg-primary rounded-xl p-space-lg md:p-space-xl text-on-primary shadow-lg relative overflow-hidden">
          {/* Ambient decorative background element */}
          <div className="absolute -right-24 -bottom-24 w-96 h-96 rounded-full bg-primary-container/40 pointer-events-none blur-3xl"></div>
          <div className="relative z-10 max-w-3xl">
            <span className="font-label-eyebrow text-label-eyebrow text-tertiary-fixed-dim uppercase tracking-widest block mb-2">
              KONSULTASI KORIDOR REGULASI
            </span>
            <h2 className="font-headline-xl text-headline-xl text-on-primary tracking-tight font-bold mb-4">
              {t('negara.cta.title')}
            </h2>
            <p className="font-body-lg text-body-lg text-on-primary-container leading-relaxed mb-8">
              {t('negara.cta.subtitle')}
            </p>
            <div className="flex flex-wrap items-center gap-space-md">
              <Link className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-surface-container-lowest text-primary hover:bg-surface-container-low font-label-button text-label-button font-bold transition-colors shadow-sm" to="/kontak">
                <span className="material-symbols-outlined text-[20px]">support_agent</span>
                {t('negara.cta.button')}
              </Link>
              <Link className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-surface-container-lowest/10 hover:bg-surface-container-lowest/20 text-on-primary font-label-button text-label-button transition-colors" to="/lowongan-kerja">
                <span className="material-symbols-outlined text-[20px]">work</span>
                {t('navbar.jobOpenings')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
