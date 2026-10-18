import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function CtaBanner() {
  const { t } = useTranslation()

  return (
    <section className="py-20 bg-primary-container text-on-primary">
      <div className="max-w-7xl mx-auto px-margin text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-lowest/10 text-tertiary-fixed text-label-eyebrow font-label-eyebrow tracking-widest uppercase mb-6">
            {t('home.cta.badge')}
          </div>
          <h2 className="font-headline-xl text-headline-xl lg:text-display-hero text-on-primary font-bold tracking-tight mb-4 leading-tight">
            {t('home.cta.title')}
          </h2>
          <p className="font-body-lg text-body-lg text-on-primary-container max-w-2xl mx-auto mb-10 leading-relaxed">
            {t('home.cta.subtitle')}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-surface-container-lowest text-primary font-label-button text-label-button shadow-md hover:bg-surface-container-low transition-all"
              to="/kontak"
            >
              <span className="material-symbols-outlined text-[20px] mr-2">chat</span>
              <span>{t('home.cta.btnContact')}</span>
            </Link>
            <Link
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-surface-container-lowest/10 text-on-primary font-label-button text-label-button shadow-sm hover:bg-surface-container-lowest/20 transition-all"
              to="/lowongan-kerja"
            >
              <span className="material-symbols-outlined text-[20px] mr-2">work</span>
              <span>{t('home.cta.btnJobs')}</span>
            </Link>
          </div>
          {/* Hotline Badge */}
          <div className="mt-12 inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-surface-container-lowest/5 text-on-primary-container text-label-caption">
            <span className="w-2 h-2 rounded-full bg-tertiary-fixed animate-ping"></span>
            <span>{t('home.cta.hotline')}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
