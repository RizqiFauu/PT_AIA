import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Kredibilitas() {
  const { t } = useTranslation()

  const blocks = [
    {
      icon: 'domain',
      titleKey: 'home.kredibilitas.b1Title',
      descKey: 'home.kredibilitas.b1Desc',
    },
    {
      icon: 'license',
      titleKey: 'home.kredibilitas.b2Title',
      descKey: 'home.kredibilitas.b2Desc',
    },
    {
      icon: 'contract',
      titleKey: 'home.kredibilitas.b3Title',
      descKey: 'home.kredibilitas.b3Desc',
    },
    {
      icon: 'shield',
      titleKey: 'home.kredibilitas.b4Title',
      descKey: 'home.kredibilitas.b4Desc',
    },
  ]

  return (
    <section className="py-20 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 flex flex-col">
            <span className="text-label-eyebrow font-label-eyebrow text-on-tertiary-container uppercase tracking-widest block mb-2">
              {t('home.kredibilitas.badge')}
            </span>
            <h2 className="font-headline-xl text-headline-xl text-primary font-bold tracking-tight mb-4">
              {t('home.kredibilitas.title')}
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
              {t('home.kredibilitas.desc')}
            </p>
            <div className="p-5 rounded-xl bg-surface-container-low mb-6">
              <h4 className="font-headline-sm text-body-md font-bold text-primary mb-2">
                {t('home.kredibilitas.boxTitle')}
              </h4>
              <p className="font-body-sm text-label-caption text-secondary mb-3">
                {t('home.kredibilitas.boxDesc')}
              </p>
              <Link
                className="inline-flex items-center gap-1.5 font-label-button text-label-button text-primary hover:text-on-tertiary-container font-semibold"
                to="/legalitas-perusahaan"
              >
                <span>{t('home.kredibilitas.boxLink')}</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {blocks.map((b, i) => (
              <div key={i} className="p-6 rounded-xl bg-surface shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary mb-4 shadow-sm">
                  <span className="material-symbols-outlined text-[20px]">{b.icon}</span>
                </div>
                <h3 className="font-headline-sm text-body-md font-bold text-primary mb-2">
                  {t(b.titleKey)}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {t(b.descKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
