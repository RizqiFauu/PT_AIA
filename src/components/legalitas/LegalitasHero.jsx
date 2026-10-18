import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function LegalitasHero() {
  const { t } = useTranslation();

  return (
    <>
      {/* BREADCRUMB & METRIC TOPBAR */}
      <section className="w-full bg-surface-container-low py-4">
        <div className="max-w-7xl mx-auto px-margin flex flex-col md:flex-row md:items-center justify-between gap-3">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2">
            <Link className="font-label-caption text-label-caption text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1" to="/">
              <span className="material-symbols-outlined text-[15px]">home</span>
              <span>{t('legalitas.hero.breadcrumbHome')}</span>
            </Link>
            <span className="text-outline-variant text-xs">/</span>
            <Link className="font-label-caption text-label-caption text-on-surface-variant hover:text-primary transition-colors" to="/profil-perusahaan">
              {t('legalitas.hero.breadcrumbAbout')}
            </Link>
            <span className="text-outline-variant text-xs">/</span>
            <span className="font-label-caption text-label-caption text-primary font-semibold">
              {t('legalitas.hero.breadcrumbCurrent')}
            </span>
          </nav>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-surface-container-lowest text-on-surface text-xs font-medium shadow-sm">
              <span className="h-2 w-2 rounded-full bg-on-tertiary-container animate-pulse"></span>
              {t('legalitas.hero.apiConnected')}
            </span>
            <span className="text-xs text-on-surface-variant font-label-caption hidden sm:inline">
              {t('legalitas.hero.syncUpdate')}
            </span>
          </div>
        </div>
      </section>

      {/* EDITORIAL HEADER & ARCHITECTURAL STATS */}
      <section className="w-full bg-surface py-16 md:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-margin">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
            {/* Left Editorial Block */}
            <div className="lg:col-span-8 flex flex-col space-y-4">
              <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded bg-surface-container text-on-tertiary-container font-label-eyebrow text-label-eyebrow uppercase tracking-widest">
                <span className="material-symbols-outlined text-[16px]">verified_user</span>
                {t('legalitas.hero.eyebrow')}
              </div>
              <h1 className="font-headline-xl text-headline-xl text-primary font-bold tracking-tight max-w-4xl">
                {t('legalitas.hero.title')}
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed max-w-3xl">
                {t('legalitas.hero.desc')}
              </p>
              {/* Audit Registry Tags */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-container-lowest shadow-sm">
                  <span className="material-symbols-outlined text-[18px] text-on-tertiary-container">policy</span>
                  <span className="font-label-button text-label-button text-on-surface text-xs">
                    {t('legalitas.hero.tag1')}
                  </span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-container-lowest shadow-sm">
                  <span className="material-symbols-outlined text-[18px] text-on-tertiary-container">badge</span>
                  <span className="font-label-button text-label-button text-on-surface text-xs">
                    {t('legalitas.hero.tag2')}
                  </span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-container-lowest shadow-sm">
                  <span className="material-symbols-outlined text-[18px] text-on-tertiary-container">workspace_premium</span>
                  <span className="font-label-button text-label-button text-on-surface text-xs">
                    {t('legalitas.hero.tag3')}
                  </span>
                </div>
              </div>
            </div>
            {/* Right Side Regulatory Status Card */}
            <div className="lg:col-span-4 w-full">
              <div className="bg-primary-container text-on-primary rounded-xl p-space-lg shadow-xl relative overflow-hidden">
                <div className="absolute -right-8 -bottom-8 w-36 h-36 rounded-full bg-on-tertiary-container/10 pointer-events-none"></div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-surface-container-highest/10">
                  <span className="font-label-eyebrow text-label-eyebrow tracking-wider uppercase text-tertiary-fixed-dim">
                    {t('legalitas.hero.cardEyebrow')}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[11px] font-bold uppercase bg-on-tertiary-container text-primary font-headline-sm">
                    {t('legalitas.hero.cardBadge')}
                  </span>
                </div>
                <div className="space-y-4">
                  <div>
                    <span className="font-label-caption text-label-caption text-on-primary-container block">
                      {t('legalitas.hero.cardEntityLabel')}
                    </span>
                    <span className="font-headline-sm text-headline-sm font-semibold tracking-tight text-surface-container-lowest">
                      {t('legalitas.hero.cardEntityValue')}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div>
                      <span className="font-label-caption text-label-caption text-on-primary-container block">
                        {t('legalitas.hero.cardLawLabel')}
                      </span>
                      <span className="font-body-sm text-body-sm font-medium text-surface-container-lowest">
                        {t('legalitas.hero.cardLawValue')}
                      </span>
                    </div>
                    <div>
                      <span className="font-label-caption text-label-caption text-on-primary-container block">
                        {t('legalitas.hero.cardJurisdictionLabel')}
                      </span>
                      <span className="font-body-sm text-body-sm font-medium text-surface-container-lowest">
                        {t('legalitas.hero.cardJurisdictionValue')}
                      </span>
                    </div>
                  </div>
                  <div>
                    <span className="font-label-caption text-label-caption text-on-primary-container block">
                      {t('legalitas.hero.cardDepositLabel')}
                    </span>
                    <span className="font-body-sm text-body-sm font-semibold text-tertiary-fixed-dim">
                      {t('legalitas.hero.cardDepositValue')}
                    </span>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-surface-container-highest/10 flex items-center justify-between text-xs text-on-primary-container">
                  <span>{t('legalitas.hero.cardStandard')}</span>
                  <span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">verified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
