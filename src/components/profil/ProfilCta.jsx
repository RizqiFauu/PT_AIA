import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function ProfilCta() {
  const { t } = useTranslation()

  return (
    <section className="w-full bg-surface-container-low py-16">
      <div className="max-w-[1280px] mx-auto px-margin">
        <div className="bg-primary text-on-primary rounded-3xl p-8 md:p-14 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="relative z-10 max-w-2xl">
            <span className="font-label-eyebrow text-label-eyebrow text-tertiary-fixed-dim uppercase tracking-wider block mb-2">
              {t('profil.cta.eyebrow')}
            </span>
            <h3 className="font-headline-lg text-headline-lg text-on-primary mb-3">
              {t('profil.cta.title')}
            </h3>
            <p className="font-body-md text-body-md text-primary-fixed-dim leading-relaxed">
              {t('profil.cta.subtitle')}
            </p>
          </div>
          <div className="relative z-10 flex flex-col sm:flex-row gap-4 shrink-0 w-full sm:w-auto">
            <Link className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-tertiary-fixed-dim text-tertiary font-label-button text-label-button rounded-xl hover:bg-tertiary-fixed transition-colors shadow-md" to="/kontak">
              <span>{t('profil.cta.button')}</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
            <Link className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-surface-container-lowest/10 text-on-primary font-label-button text-label-button rounded-xl hover:bg-surface-container-lowest/20 transition-colors" to="/lowongan-kerja">
              <span>{t('navbar.jobOpenings')}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
