import React from 'react';
import { useTranslation } from 'react-i18next';

export default function LayananCapabilityMetrics() {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-primary-container text-on-primary py-12">
      <div className="max-w-[1280px] mx-auto px-margin">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col border-l-2 border-on-tertiary-container pl-4">
            <span className="font-headline-xl text-headline-xl font-bold text-tertiary-fixed-dim">
              {t('layanan.metrics.m1Value')}
            </span>
            <span className="font-label-caption text-label-caption text-primary-fixed uppercase tracking-wider mt-1">
              {t('layanan.metrics.m1Label')}
            </span>
            <span className="font-body-sm text-body-sm text-on-primary-container mt-0.5">
              {t('layanan.metrics.m1Desc')}
            </span>
          </div>
          <div className="flex flex-col border-l-2 border-on-tertiary-container pl-4">
            <span className="font-headline-xl text-headline-xl font-bold text-tertiary-fixed-dim">
              {t('layanan.metrics.m2Value')}
            </span>
            <span className="font-label-caption text-label-caption text-primary-fixed uppercase tracking-wider mt-1">
              {t('layanan.metrics.m2Label')}
            </span>
            <span className="font-body-sm text-body-sm text-on-primary-container mt-0.5">
              {t('layanan.metrics.m2Desc')}
            </span>
          </div>
          <div className="flex flex-col border-l-2 border-on-tertiary-container pl-4">
            <span className="font-headline-xl text-headline-xl font-bold text-tertiary-fixed-dim">
              {t('layanan.metrics.m3Value')}
            </span>
            <span className="font-label-caption text-label-caption text-primary-fixed uppercase tracking-wider mt-1">
              {t('layanan.metrics.m3Label')}
            </span>
            <span className="font-body-sm text-body-sm text-on-primary-container mt-0.5">
              {t('layanan.metrics.m3Desc')}
            </span>
          </div>
          <div className="flex flex-col border-l-2 border-on-tertiary-container pl-4">
            <span className="font-headline-xl text-headline-xl font-bold text-tertiary-fixed-dim">
              {t('layanan.metrics.m4Value')}
            </span>
            <span className="font-label-caption text-label-caption text-primary-fixed uppercase tracking-wider mt-1">
              {t('layanan.metrics.m4Label')}
            </span>
            <span className="font-body-sm text-body-sm text-on-primary-container mt-0.5">
              {t('layanan.metrics.m4Desc')}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
