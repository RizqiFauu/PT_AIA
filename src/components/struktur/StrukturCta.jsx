import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function StrukturCta() {
  const { t } = useTranslation()

  return (
    <section className="w-full bg-surface-container-lowest py-space-xl">
      <div className="max-w-7xl mx-auto px-margin">
        <div className="bg-surface rounded-2xl p-8 lg:p-12 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-gutter">
          <div className="max-w-2xl">
            <span className="font-label-eyebrow text-label-eyebrow text-on-tertiary-container uppercase tracking-wider block mb-1">
              {t('struktur.cta.eyebrow')}
            </span>
            <h2 className="font-headline-md text-headline-md text-primary font-bold">
              {t('struktur.cta.title')}
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">
              {t('struktur.cta.subtitle')}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-space-sm w-full lg:w-auto shrink-0">
            <Link
              className="w-full sm:w-auto text-center px-space-lg py-3.5 bg-primary text-on-primary rounded-xl font-label-button text-label-button hover:bg-primary-container transition-colors shadow-sm"
              data-path="kemitraan-internasional"
              to="/layanan"
            >
              {t('navbar.employerServices')}
            </Link>
            <Link
              className="w-full sm:w-auto text-center px-space-lg py-3.5 bg-surface-container-low text-primary rounded-xl font-label-button text-label-button hover:bg-surface-container hover:text-on-surface transition-colors"
              data-path="kontak"
              to="/kontak"
            >
              {t('struktur.cta.button')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
