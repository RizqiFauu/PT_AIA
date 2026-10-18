import React from 'react';
import { useTranslation } from 'react-i18next';

export default function LegalitasCompliance() {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-surface-container-low py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-margin">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="font-label-eyebrow text-label-eyebrow text-on-tertiary-container uppercase tracking-wider block mb-2">
            {t('legalitas.compliance.eyebrow')}
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary font-bold tracking-tight">
            {t('legalitas.compliance.title')}
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">
            {t('legalitas.compliance.desc')}
          </p>
        </div>

        {/* Compliance Pillars 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {/* Pillar 1 */}
          <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between relative overflow-hidden">
            <div className="w-1.5 h-12 bg-on-tertiary-container absolute top-6 left-0 rounded-r"></div>
            <div>
              <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined text-[26px]">gavel</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary font-bold mb-3">
                {t('legalitas.compliance.p1Title')}
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-4">
                {t('legalitas.compliance.p1Desc')}
              </p>
              <ul className="space-y-2.5 font-label-caption text-label-caption text-on-surface">
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[16px] text-on-tertiary-container shrink-0">check_circle</span>
                  <span>{t('legalitas.compliance.p1Item1')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[16px] text-on-tertiary-container shrink-0">check_circle</span>
                  <span>{t('legalitas.compliance.p1Item2')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[16px] text-on-tertiary-container shrink-0">check_circle</span>
                  <span>{t('legalitas.compliance.p1Item3')}</span>
                </li>
              </ul>
            </div>
            <div className="mt-8 pt-4 border-t border-surface-container text-xs text-on-surface-variant">
              <span>{t('legalitas.compliance.p1Standard')}</span>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between relative overflow-hidden">
            <div className="w-1.5 h-12 bg-on-tertiary-container absolute top-6 left-0 rounded-r"></div>
            <div>
              <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined text-[26px]">payments</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary font-bold mb-3">
                {t('legalitas.compliance.p2Title')}
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-4">
                {t('legalitas.compliance.p2Desc')}
              </p>
              <ul className="space-y-2.5 font-label-caption text-label-caption text-on-surface">
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[16px] text-on-tertiary-container shrink-0">check_circle</span>
                  <span>{t('legalitas.compliance.p2Item1')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[16px] text-on-tertiary-container shrink-0">check_circle</span>
                  <span>{t('legalitas.compliance.p2Item2')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[16px] text-on-tertiary-container shrink-0">check_circle</span>
                  <span>{t('legalitas.compliance.p2Item3')}</span>
                </li>
              </ul>
            </div>
            <div className="mt-8 pt-4 border-t border-surface-container text-xs text-on-surface-variant">
              <span>{t('legalitas.compliance.p2Standard')}</span>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between relative overflow-hidden">
            <div className="w-1.5 h-12 bg-on-tertiary-container absolute top-6 left-0 rounded-r"></div>
            <div>
              <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined text-[26px]">front_hand</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary font-bold mb-3">
                {t('legalitas.compliance.p3Title')}
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-4">
                {t('legalitas.compliance.p3Desc')}
              </p>
              <ul className="space-y-2.5 font-label-caption text-label-caption text-on-surface">
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[16px] text-on-tertiary-container shrink-0">check_circle</span>
                  <span>{t('legalitas.compliance.p3Item1')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[16px] text-on-tertiary-container shrink-0">check_circle</span>
                  <span>{t('legalitas.compliance.p3Item2')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[16px] text-on-tertiary-container shrink-0">check_circle</span>
                  <span>{t('legalitas.compliance.p3Item3')}</span>
                </li>
              </ul>
            </div>
            <div className="mt-8 pt-4 border-t border-surface-container text-xs text-on-surface-variant">
              <span>{t('legalitas.compliance.p3Standard')}</span>
            </div>
          </div>
        </div>

        {/* Human Dignity Charter Quote Box */}
        <div className="mt-12 bg-surface-container rounded-xl p-space-lg flex flex-col md:flex-row items-center gap-space-lg">
          <div className="w-16 h-16 rounded-full bg-surface-container-lowest flex items-center justify-center text-on-tertiary-container shrink-0 shadow-sm">
            <span className="material-symbols-outlined text-[32px]">assignment_turned_in</span>
          </div>
          <div>
            <h4 className="font-headline-sm text-headline-sm text-primary mb-1">
              {t('legalitas.compliance.charterTitle')}
            </h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              {t('legalitas.compliance.charterQuote')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
