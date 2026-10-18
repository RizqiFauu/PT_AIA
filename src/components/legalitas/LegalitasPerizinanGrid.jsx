import React from 'react';
import { useTranslation } from 'react-i18next';

export default function LegalitasPerizinanGrid() {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-surface py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-margin">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="font-label-eyebrow text-label-eyebrow text-on-tertiary-container uppercase tracking-wider block mb-1">
              {t('legalitas.perizinanGrid.eyebrow')}
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary font-bold">
              {t('legalitas.perizinanGrid.title')}
            </h2>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">
            {t('legalitas.perizinanGrid.subtitle')}
          </p>
        </div>

        {/* Bento Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {/* Document 1: NIB Berbasis Risiko */}
          <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded text-xs font-semibold bg-surface-container-low text-primary font-label-caption">
                  {t('legalitas.perizinanGrid.doc1Authority')}
                </span>
                <span className="material-symbols-outlined text-[20px] text-on-tertiary-container">verified</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                {t('legalitas.perizinanGrid.doc1Title')}
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-4 leading-relaxed">
                {t('legalitas.perizinanGrid.doc1Desc')}
              </p>
              <div className="bg-surface-container rounded-lg p-3 space-y-1.5 font-label-caption text-label-caption mb-4">
                <div className="flex justify-between text-on-surface">
                  <span className="text-on-surface-variant">{t('legalitas.perizinanGrid.doc1RegLabel')}</span>
                  <span className="font-semibold text-primary">{t('legalitas.perizinanGrid.doc1RegVal')}</span>
                </div>
                <div className="flex justify-between text-on-surface">
                  <span className="text-on-surface-variant">{t('legalitas.perizinanGrid.doc1RiskLabel')}</span>
                  <span className="font-semibold text-primary">{t('legalitas.perizinanGrid.doc1RiskVal')}</span>
                </div>
                <div className="flex justify-between text-on-surface">
                  <span className="text-on-surface-variant">{t('legalitas.perizinanGrid.doc1StatusLabel')}</span>
                  <span className="text-secondary font-semibold">{t('legalitas.perizinanGrid.doc1StatusVal')}</span>
                </div>
              </div>
            </div>
            <div className="pt-2 flex items-center justify-between text-xs text-on-surface-variant">
              <span>{t('legalitas.perizinanGrid.doc1Issued')}</span>
              <span className="font-medium text-primary">{t('legalitas.perizinanGrid.doc1Validity')}</span>
            </div>
          </div>

          {/* Document 2: SIP3MI Kemenaker RI */}
          <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded text-xs font-semibold bg-surface-container-low text-primary font-label-caption">
                  {t('legalitas.perizinanGrid.doc2Authority')}
                </span>
                <span className="material-symbols-outlined text-[20px] text-on-tertiary-container">verified</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                {t('legalitas.perizinanGrid.doc2Title')}
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-4 leading-relaxed">
                {t('legalitas.perizinanGrid.doc2Desc')}
              </p>
              <div className="bg-surface-container rounded-lg p-3 space-y-1.5 font-label-caption text-label-caption mb-4">
                <div className="flex justify-between text-on-surface">
                  <span className="text-on-surface-variant">{t('legalitas.perizinanGrid.doc2RegLabel')}</span>
                  <span className="font-semibold text-primary">{t('legalitas.perizinanGrid.doc2RegVal')}</span>
                </div>
                <div className="flex justify-between text-on-surface">
                  <span className="text-on-surface-variant">{t('legalitas.perizinanGrid.doc2CatLabel')}</span>
                  <span className="font-semibold text-primary">{t('legalitas.perizinanGrid.doc2CatVal')}</span>
                </div>
                <div className="flex justify-between text-on-surface">
                  <span className="text-on-surface-variant">{t('legalitas.perizinanGrid.doc2AuditLabel')}</span>
                  <span className="text-secondary font-semibold">{t('legalitas.perizinanGrid.doc2AuditVal')}</span>
                </div>
              </div>
            </div>
            <div className="pt-2 flex items-center justify-between text-xs text-on-surface-variant">
              <span>{t('legalitas.perizinanGrid.doc2Dept')}</span>
              <span className="font-medium text-primary">{t('legalitas.perizinanGrid.doc2Status')}</span>
            </div>
          </div>

          {/* Document 3: SK Menkumham RI */}
          <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded text-xs font-semibold bg-surface-container-low text-primary font-label-caption">
                  {t('legalitas.perizinanGrid.doc3Authority')}
                </span>
                <span className="material-symbols-outlined text-[20px] text-on-tertiary-container">verified</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                {t('legalitas.perizinanGrid.doc3Title')}
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-4 leading-relaxed">
                {t('legalitas.perizinanGrid.doc3Desc')}
              </p>
              <div className="bg-surface-container rounded-lg p-3 space-y-1.5 font-label-caption text-label-caption mb-4">
                <div className="flex justify-between text-on-surface">
                  <span className="text-on-surface-variant">{t('legalitas.perizinanGrid.doc3RegLabel')}</span>
                  <span className="font-semibold text-primary">{t('legalitas.perizinanGrid.doc3RegVal')}</span>
                </div>
                <div className="flex justify-between text-on-surface">
                  <span className="text-on-surface-variant">{t('legalitas.perizinanGrid.doc3NotaryLabel')}</span>
                  <span className="font-semibold text-primary">{t('legalitas.perizinanGrid.doc3NotaryVal')}</span>
                </div>
                <div className="flex justify-between text-on-surface">
                  <span className="text-on-surface-variant">{t('legalitas.perizinanGrid.doc3CapitalLabel')}</span>
                  <span className="text-secondary font-semibold">{t('legalitas.perizinanGrid.doc3CapitalVal')}</span>
                </div>
              </div>
            </div>
            <div className="pt-2 flex items-center justify-between text-xs text-on-surface-variant">
              <span>{t('legalitas.perizinanGrid.doc3Dept')}</span>
              <span className="font-medium text-primary">{t('legalitas.perizinanGrid.doc3Status')}</span>
            </div>
          </div>

          {/* Document 4: Keanggotaan Asosiasi ASPATAKI */}
          <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded text-xs font-semibold bg-surface-container-low text-primary font-label-caption">
                  {t('legalitas.perizinanGrid.doc4Authority')}
                </span>
                <span className="material-symbols-outlined text-[20px] text-on-tertiary-container">verified</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                {t('legalitas.perizinanGrid.doc4Title')}
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-4 leading-relaxed">
                {t('legalitas.perizinanGrid.doc4Desc')}
              </p>
              <div className="bg-surface-container rounded-lg p-3 space-y-1.5 font-label-caption text-label-caption mb-4">
                <div className="flex justify-between text-on-surface">
                  <span className="text-on-surface-variant">{t('legalitas.perizinanGrid.doc4RegLabel')}</span>
                  <span className="font-semibold text-primary">{t('legalitas.perizinanGrid.doc4RegVal')}</span>
                </div>
                <div className="flex justify-between text-on-surface">
                  <span className="text-on-surface-variant">{t('legalitas.perizinanGrid.doc4EthicsLabel')}</span>
                  <span className="font-semibold text-primary">{t('legalitas.perizinanGrid.doc4EthicsVal')}</span>
                </div>
                <div className="flex justify-between text-on-surface">
                  <span className="text-on-surface-variant">{t('legalitas.perizinanGrid.doc4CertLabel')}</span>
                  <span className="text-secondary font-semibold">{t('legalitas.perizinanGrid.doc4CertVal')}</span>
                </div>
              </div>
            </div>
            <div className="pt-2 flex items-center justify-between text-xs text-on-surface-variant">
              <span>{t('legalitas.perizinanGrid.doc4Dept')}</span>
              <span className="font-medium text-primary">{t('legalitas.perizinanGrid.doc4Status')}</span>
            </div>
          </div>

          {/* Document 5: ISO 9001:2015 */}
          <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded text-xs font-semibold bg-surface-container-low text-primary font-label-caption">
                  {t('legalitas.perizinanGrid.doc5Authority')}
                </span>
                <span className="material-symbols-outlined text-[20px] text-on-tertiary-container">verified</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                {t('legalitas.perizinanGrid.doc5Title')}
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-4 leading-relaxed">
                {t('legalitas.perizinanGrid.doc5Desc')}
              </p>
              <div className="bg-surface-container rounded-lg p-3 space-y-1.5 font-label-caption text-label-caption mb-4">
                <div className="flex justify-between text-on-surface">
                  <span className="text-on-surface-variant">{t('legalitas.perizinanGrid.doc5RegLabel')}</span>
                  <span className="font-semibold text-primary">{t('legalitas.perizinanGrid.doc5RegVal')}</span>
                </div>
                <div className="flex justify-between text-on-surface">
                  <span className="text-on-surface-variant">{t('legalitas.perizinanGrid.doc5AccredLabel')}</span>
                  <span className="font-semibold text-primary">{t('legalitas.perizinanGrid.doc5AccredVal')}</span>
                </div>
                <div className="flex justify-between text-on-surface">
                  <span className="text-on-surface-variant">{t('legalitas.perizinanGrid.doc5ScopeLabel')}</span>
                  <span className="text-secondary font-semibold">{t('legalitas.perizinanGrid.doc5ScopeVal')}</span>
                </div>
              </div>
            </div>
            <div className="pt-2 flex items-center justify-between text-xs text-on-surface-variant">
              <span>{t('legalitas.perizinanGrid.doc5Dept')}</span>
              <span className="font-medium text-primary">{t('legalitas.perizinanGrid.doc5Status')}</span>
            </div>
          </div>

          {/* Document 6: NPWP & Fiskal Perusahaan */}
          <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded text-xs font-semibold bg-surface-container-low text-primary font-label-caption">
                  {t('legalitas.perizinanGrid.doc6Authority')}
                </span>
                <span className="material-symbols-outlined text-[20px] text-on-tertiary-container">verified</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                {t('legalitas.perizinanGrid.doc6Title')}
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-4 leading-relaxed">
                {t('legalitas.perizinanGrid.doc6Desc')}
              </p>
              <div className="bg-surface-container rounded-lg p-3 space-y-1.5 font-label-caption text-label-caption mb-4">
                <div className="flex justify-between text-on-surface">
                  <span className="text-on-surface-variant">{t('legalitas.perizinanGrid.doc6RegLabel')}</span>
                  <span className="font-semibold text-primary">{t('legalitas.perizinanGrid.doc6RegVal')}</span>
                </div>
                <div className="flex justify-between text-on-surface">
                  <span className="text-on-surface-variant">{t('legalitas.perizinanGrid.doc6TaxOfficeLabel')}</span>
                  <span className="font-semibold text-primary">{t('legalitas.perizinanGrid.doc6TaxOfficeVal')}</span>
                </div>
                <div className="flex justify-between text-on-surface">
                  <span className="text-on-surface-variant">{t('legalitas.perizinanGrid.doc6SkfLabel')}</span>
                  <span className="text-secondary font-semibold">{t('legalitas.perizinanGrid.doc6SkfVal')}</span>
                </div>
              </div>
            </div>
            <div className="pt-2 flex items-center justify-between text-xs text-on-surface-variant">
              <span>{t('legalitas.perizinanGrid.doc6Dept')}</span>
              <span className="font-medium text-primary">{t('legalitas.perizinanGrid.doc6Status')}</span>
            </div>
          </div>
        </div>

        {/* SYSTEM INTEGRATION REAL-TIME ARCHITECTURE BLOCK */}
        <div className="mt-8 rounded-xl bg-surface-container-lowest p-space-lg shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
            <div className="lg:col-span-4 flex flex-col space-y-3">
              <span className="px-2.5 py-1 rounded w-fit text-xs font-bold uppercase bg-surface-container text-on-tertiary-container font-label-eyebrow">
                {t('legalitas.perizinanGrid.sysBadge')}
              </span>
              <h3 className="font-headline-md text-headline-md text-primary font-bold">
                {t('legalitas.perizinanGrid.sysTitle')}
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                {t('legalitas.perizinanGrid.sysDesc')}
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs text-secondary font-semibold">
                <span className="material-symbols-outlined text-[16px]">sync_saved_locally</span>
                <span>{t('legalitas.perizinanGrid.sysSecurity')}</span>
              </div>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-surface-container-low rounded-lg p-space-md">
                <div className="flex items-center justify-between mb-3">
                  <span className="material-symbols-outlined text-primary text-[24px]">hub</span>
                  <span className="h-2 w-2 rounded-full bg-secondary"></span>
                </div>
                <h4 className="font-headline-sm text-headline-sm text-primary mb-1">
                  {t('legalitas.perizinanGrid.sysCard1Title')}
                </h4>
                <p className="font-label-caption text-label-caption text-on-surface-variant mb-2">
                  {t('legalitas.perizinanGrid.sysCard1Desc')}
                </p>
                <div className="text-xs font-semibold text-primary">
                  {t('legalitas.perizinanGrid.sysCard1Status')}
                </div>
              </div>
              <div className="bg-surface-container-low rounded-lg p-space-md">
                <div className="flex items-center justify-between mb-3">
                  <span className="material-symbols-outlined text-primary text-[24px]">storage</span>
                  <span className="h-2 w-2 rounded-full bg-secondary"></span>
                </div>
                <h4 className="font-headline-sm text-headline-sm text-primary mb-1">
                  {t('legalitas.perizinanGrid.sysCard2Title')}
                </h4>
                <p className="font-label-caption text-label-caption text-on-surface-variant mb-2">
                  {t('legalitas.perizinanGrid.sysCard2Desc')}
                </p>
                <div className="text-xs font-semibold text-primary">
                  {t('legalitas.perizinanGrid.sysCard2Status')}
                </div>
              </div>
              <div className="bg-surface-container-low rounded-lg p-space-md">
                <div className="flex items-center justify-between mb-3">
                  <span className="material-symbols-outlined text-primary text-[24px]">health_and_safety</span>
                  <span className="h-2 w-2 rounded-full bg-secondary"></span>
                </div>
                <h4 className="font-headline-sm text-headline-sm text-primary mb-1">
                  {t('legalitas.perizinanGrid.sysCard3Title')}
                </h4>
                <p className="font-label-caption text-label-caption text-on-surface-variant mb-2">
                  {t('legalitas.perizinanGrid.sysCard3Desc')}
                </p>
                <div className="text-xs font-semibold text-primary">
                  {t('legalitas.perizinanGrid.sysCard3Status')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
