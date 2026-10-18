import React from 'react';
import { useTranslation } from 'react-i18next';

export default function LegalitasStatusBanner() {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-surface-container-lowest py-8">
      <div className="max-w-7xl mx-auto px-margin">
        <div className="rounded-xl bg-surface-container-low p-space-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-space-lg shadow-sm">
          <div className="flex items-start gap-space-md">
            <div className="w-12 h-12 rounded-xl bg-surface-container-lowest text-on-tertiary-container flex items-center justify-center shrink-0 shadow-sm">
              <span className="material-symbols-outlined text-[28px]">format_image_left</span>
            </div>
            <div>
              <h2 className="font-headline-sm text-headline-sm text-primary mb-1">
                {t('legalitas.statusBanner.title')}
              </h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant max-w-3xl leading-relaxed">
                {t('legalitas.statusBanner.desc')}
              </p>
            </div>
          </div>
          <div className="shrink-0 flex items-center gap-3">
            <a className="inline-flex items-center gap-2 px-space-md py-2.5 rounded-lg bg-primary text-on-primary font-label-button text-label-button hover:bg-primary-container transition-all shadow-sm" href="#portal-verifikasi">
              <span className="material-symbols-outlined text-[18px]">fact_check</span>
              <span>{t('legalitas.statusBanner.btnValidate')}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
