import { useTranslation } from 'react-i18next'

export default function StrukturGovernanceStats() {
  const { t } = useTranslation()

  return (
    <section className="w-full bg-surface-container-low py-space-xl">
      <div className="max-w-7xl mx-auto px-margin">
        <div className="bg-primary text-on-primary rounded-3xl p-8 lg:p-12 shadow-xl relative overflow-hidden">
          {/* Abstract architectural background graphic using inline SVG */}
          <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 pointer-events-none">
            <svg className="w-full h-full object-cover" fill="none" viewBox="0 0 400 400">
              <circle cx="200" cy="200" r="180" stroke="currentColor" strokeDasharray="8 8" strokeWidth="1.5"></circle>
              <circle cx="200" cy="200" r="130" stroke="currentColor" strokeWidth="2"></circle>
              <circle cx="200" cy="200" r="80" stroke="currentColor" strokeWidth="1"></circle>
              <path d="M200 20 L200 380 M20 200 L380 200" stroke="currentColor" strokeWidth="1.5"></path>
            </svg>
          </div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
            <div className="lg:col-span-8 space-y-space-md">
              <div className="inline-flex items-center gap-2 bg-surface-container-lowest/10 px-3 py-1 rounded-full text-tertiary-fixed">
                <span className="material-symbols-outlined text-[16px]">verified</span>
                <span className="font-label-eyebrow text-label-eyebrow uppercase tracking-wider">
                  {t('struktur.governanceStats.eyebrow')}
                </span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-primary font-bold">
                {t('struktur.governanceStats.title')}
              </h2>
              <p className="font-body-md text-body-md text-on-primary-container max-w-2xl">
                {t('struktur.governanceStats.desc')}
              </p>
              {/* Statistical Metric Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
                <div className="bg-surface-container-lowest/5 rounded-xl p-4">
                  <span className="font-headline-lg text-headline-lg text-tertiary-fixed font-bold block">100%</span>
                  <span className="font-label-caption text-label-caption text-on-primary-container">
                    {t('struktur.governanceStats.stat1Label')}
                  </span>
                </div>
                <div className="bg-surface-container-lowest/5 rounded-xl p-4">
                  <span className="font-headline-lg text-headline-lg text-secondary-fixed font-bold block">
                    {t('struktur.governanceStats.stat2Value')}
                  </span>
                  <span className="font-label-caption text-label-caption text-on-primary-container">
                    {t('struktur.governanceStats.stat2Label')}
                  </span>
                </div>
                <div className="bg-surface-container-lowest/5 rounded-xl p-4 col-span-2 sm:col-span-1">
                  <span className="font-headline-lg text-headline-lg text-on-primary font-bold block">
                    {t('struktur.governanceStats.stat3Value')}
                  </span>
                  <span className="font-label-caption text-label-caption text-on-primary-container">
                    {t('struktur.governanceStats.stat3Label')}
                  </span>
                </div>
              </div>
            </div>
            {/* Whistleblowing / Contact Channel Box */}
            <div className="lg:col-span-4 bg-surface-container-lowest text-on-surface p-space-lg rounded-2xl shadow-lg flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-space-sm mb-3 text-error">
                  <span className="material-symbols-outlined text-[24px]">campaign</span>
                  <span className="font-label-eyebrow text-label-eyebrow uppercase tracking-wider font-bold">
                    {t('struktur.governanceStats.whistleEyebrow')}
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary font-bold">
                  {t('struktur.governanceStats.whistleTitle')}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
                  {t('struktur.governanceStats.whistleDesc')}
                </p>
              </div>
              <div className="mt-6 pt-4 space-y-space-sm">
                <a className="w-full flex items-center justify-center gap-2 px-space-md py-3 bg-primary text-on-primary rounded-xl font-label-button text-label-button hover:bg-primary-container transition-colors shadow-sm" href="mailto:kepatuhan@amalichwanarindo.co.id">
                  <span className="material-symbols-outlined text-[18px]">security</span>
                  <span>{t('struktur.governanceStats.whistleBtn')}</span>
                </a>
                <p className="font-label-caption text-label-caption text-center text-on-surface-variant">
                  {t('struktur.governanceStats.whistleGuarantee')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
