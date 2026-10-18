import { useTranslation } from 'react-i18next'

export default function MengapaMemilihKami() {
  const { t } = useTranslation()

  const reasons = [
    {
      icon: 'assignment_turned_in',
      titleKey: 'home.mengapaMemilihKami.r1Title',
      descKey: 'home.mengapaMemilihKami.r1Desc',
    },
    {
      icon: 'visibility',
      titleKey: 'home.mengapaMemilihKami.r2Title',
      descKey: 'home.mengapaMemilihKami.r2Desc',
    },
    {
      icon: 'gavel',
      titleKey: 'home.mengapaMemilihKami.r3Title',
      descKey: 'home.mengapaMemilihKami.r3Desc',
    },
    {
      icon: 'apartment',
      titleKey: 'home.mengapaMemilihKami.r4Title',
      descKey: 'home.mengapaMemilihKami.r4Desc',
    },
    {
      icon: 'support_agent',
      titleKey: 'home.mengapaMemilihKami.r5Title',
      descKey: 'home.mengapaMemilihKami.r5Desc',
    },
    {
      icon: 'forum',
      titleKey: 'home.mengapaMemilihKami.r6Title',
      descKey: 'home.mengapaMemilihKami.r6Desc',
    },
  ]

  return (
    <section className="py-20 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto px-margin">
        <div className="mb-14">
          <span className="text-label-eyebrow font-label-eyebrow text-on-tertiary-container uppercase tracking-widest block mb-2">
            {t('home.mengapaMemilihKami.badge')}
          </span>
          <h2 className="font-headline-xl text-headline-xl text-primary font-bold tracking-tight">
            {t('home.mengapaMemilihKami.title')}
          </h2>
          <p className="font-body-md text-body-md text-secondary mt-2 max-w-xl">
            {t('home.mengapaMemilihKami.subtitle')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((r, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-surface flex items-center justify-center text-primary shrink-0 shadow-sm">
                <span className="material-symbols-outlined text-[24px]">{r.icon}</span>
              </div>
              <div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                  {t(r.titleKey)}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {t(r.descKey)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
