import { useTranslation } from 'react-i18next'

export default function TahapPenempatan() {
  const { t } = useTranslation()

  const steps = [
    {
      num: 1,
      icon: 'info',
      titleKey: 'home.tahapPenempatan.s1Title',
      descKey: 'home.tahapPenempatan.s1Desc',
    },
    {
      num: 2,
      icon: 'checklist',
      titleKey: 'home.tahapPenempatan.s2Title',
      descKey: 'home.tahapPenempatan.s2Desc',
    },
    {
      num: 3,
      icon: 'badge',
      titleKey: 'home.tahapPenempatan.s3Title',
      descKey: 'home.tahapPenempatan.s3Desc',
    },
    {
      num: 4,
      icon: 'fact_check',
      titleKey: 'home.tahapPenempatan.s4Title',
      descKey: 'home.tahapPenempatan.s4Desc',
    },
    {
      num: 5,
      icon: 'school',
      titleKey: 'home.tahapPenempatan.s5Title',
      descKey: 'home.tahapPenempatan.s5Desc',
    },
    {
      num: 6,
      icon: 'verified',
      titleKey: 'home.tahapPenempatan.s6Title',
      descKey: 'home.tahapPenempatan.s6Desc',
    },
    {
      num: 7,
      icon: 'flight',
      titleKey: 'home.tahapPenempatan.s7Title',
      descKey: 'home.tahapPenempatan.s7Desc',
    },
  ]

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-margin">
        <div className="mb-12">
          <span className="text-label-eyebrow font-label-eyebrow text-on-tertiary-container uppercase tracking-widest block mb-2">
            {t('home.tahapPenempatan.badge')}
          </span>
          <h2 className="font-headline-xl text-headline-xl text-primary font-bold tracking-tight">
            {t('home.tahapPenempatan.title')}
          </h2>
          <p className="font-body-md text-body-md text-secondary mt-2">
            {t('home.tahapPenempatan.subtitle')}
          </p>
        </div>
        {/* Horizontal Steps Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4 mb-6">
          {steps.map((s) => (
            <div
              key={s.num}
              className="bg-surface-container-lowest p-5 rounded-xl shadow-sm flex flex-col justify-between relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-7 h-7 rounded-full bg-primary-container text-on-primary font-label-button text-xs flex items-center justify-center">
                    {s.num}
                  </span>
                  <span className="material-symbols-outlined text-[18px] text-secondary">{s.icon}</span>
                </div>
                <h3 className="font-headline-sm text-body-sm font-bold text-primary mb-1">
                  {t(s.titleKey)}
                </h3>
                <p className="font-label-caption text-label-caption text-secondary">
                  {t(s.descKey)}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* Regulatory Notice */}
        <div className="p-4 bg-surface-container-low rounded-xl flex items-center gap-3">
          <span className="material-symbols-outlined text-secondary text-[20px] shrink-0">info</span>
          <p className="font-label-caption text-label-caption text-on-surface-variant">
            <strong className="font-semibold text-primary">{t('home.tahapPenempatan.noticeTitle')}</strong>{' '}
            {t('home.tahapPenempatan.noticeDesc')}
          </p>
        </div>
      </div>
    </section>
  )
}
