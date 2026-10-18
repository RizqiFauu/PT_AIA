import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function LegalitasCta() {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-primary-container text-on-primary py-16 md:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-margin relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          <div className="lg:col-span-8 flex flex-col space-y-4">
            <span className="font-label-eyebrow text-label-eyebrow text-tertiary-fixed-dim uppercase tracking-widest">
              {t('legalitas.cta.eyebrow')}
            </span>
            <h2 className="font-headline-xl text-headline-xl font-bold tracking-tight text-surface-container-lowest">
              {t('legalitas.cta.title')}
            </h2>
            <p className="font-body-md text-body-md text-on-primary-container max-w-2xl leading-relaxed">
              {t('legalitas.cta.subtitle')}
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link className="inline-flex items-center gap-2 px-space-lg py-3 rounded-xl bg-on-tertiary-container text-primary font-label-button text-label-button font-bold hover:brightness-105 transition-all shadow-md" to="/kontak">
                <span className="material-symbols-outlined text-[18px]">draft</span>
                <span>{t('legalitas.cta.button')}</span>
              </Link>
              <a className="inline-flex items-center gap-2 px-space-md py-3 rounded-xl bg-surface-container-lowest/10 text-on-primary font-label-button text-label-button hover:bg-surface-container-lowest/20 transition-all" href="mailto:info@amalichwanarindo.co.id">
                <span className="material-symbols-outlined text-[18px]">mail</span>
                <span>info@amalichwanarindo.co.id</span>
              </a>
            </div>
          </div>
          <div className="lg:col-span-4 flex flex-col items-center lg:items-end">
            <div className="bg-surface-container-lowest/5 backdrop-blur-sm p-space-md rounded-xl max-w-sm w-full space-y-3">
              <div className="flex items-center gap-2 text-tertiary-fixed-dim">
                <span className="material-symbols-outlined text-[20px]">account_balance</span>
                <span className="font-headline-sm text-headline-sm text-xs font-bold text-surface-container-lowest">
                  {t('legalitas.cta.cardTitle')}
                </span>
              </div>
              <p className="font-label-caption text-label-caption text-on-primary-container leading-relaxed">
                {t('legalitas.cta.cardDesc')}
              </p>
              <div className="text-[11px] font-label-caption text-tertiary-fixed-dim">
                {t('legalitas.cta.cardHours')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
