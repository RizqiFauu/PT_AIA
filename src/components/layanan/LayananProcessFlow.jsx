import React from 'react';
import { useTranslation } from 'react-i18next';

export default function LayananProcessFlow() {
  const { t } = useTranslation();

  return (
    <section className="w-full py-16 bg-surface-container-low">
      <div className="max-w-[1280px] mx-auto px-margin">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="font-label-eyebrow text-label-eyebrow text-on-tertiary-container uppercase tracking-widest font-bold">
            {t('layanan.processFlow.eyebrow')}
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary font-bold mt-1">
            {t('layanan.processFlow.title')}
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2">
            {t('layanan.processFlow.desc')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {/* Step 1 */}
          <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm flex flex-col relative">
            <div className="w-10 h-10 rounded-full bg-primary text-on-primary font-bold flex items-center justify-center mb-4">1</div>
            <h3 className="font-headline-sm text-headline-sm text-primary font-bold mb-2">
              {t('layanan.processFlow.step1Title')}
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              {t('layanan.processFlow.step1Desc')}
            </p>
          </div>
          {/* Step 2 */}
          <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm flex flex-col relative">
            <div className="w-10 h-10 rounded-full bg-primary text-on-primary font-bold flex items-center justify-center mb-4">2</div>
            <h3 className="font-headline-sm text-headline-sm text-primary font-bold mb-2">
              {t('layanan.processFlow.step2Title')}
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              {t('layanan.processFlow.step2Desc')}
            </p>
          </div>
          {/* Step 3 */}
          <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm flex flex-col relative">
            <div className="w-10 h-10 rounded-full bg-primary text-on-primary font-bold flex items-center justify-center mb-4">3</div>
            <h3 className="font-headline-sm text-headline-sm text-primary font-bold mb-2">
              {t('layanan.processFlow.step3Title')}
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              {t('layanan.processFlow.step3Desc')}
            </p>
          </div>
          {/* Step 4 */}
          <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm flex flex-col relative">
            <div className="w-10 h-10 rounded-full bg-primary text-on-primary font-bold flex items-center justify-center mb-4">4</div>
            <h3 className="font-headline-sm text-headline-sm text-primary font-bold mb-2">
              {t('layanan.processFlow.step4Title')}
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              {t('layanan.processFlow.step4Desc')}
            </p>
          </div>
          {/* Step 5 */}
          <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm flex flex-col relative">
            <div className="w-10 h-10 rounded-full bg-primary text-on-primary font-bold flex items-center justify-center mb-4">5</div>
            <h3 className="font-headline-sm text-headline-sm text-primary font-bold mb-2">
              {t('layanan.processFlow.step5Title')}
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              {t('layanan.processFlow.step5Desc')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
