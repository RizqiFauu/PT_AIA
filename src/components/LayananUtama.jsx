import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function LayananUtama() {
  const { t } = useTranslation()

  return (
    <section className="py-20 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto px-margin">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-label-eyebrow font-label-eyebrow text-on-tertiary-container uppercase tracking-widest block mb-2">
              {t('home.layananUtama.badge')}
            </span>
            <h2 className="font-headline-xl text-headline-xl text-primary font-bold tracking-tight">
              {t('home.layananUtama.title')}
            </h2>
            <p className="font-body-md text-body-md text-secondary mt-2 max-w-xl">
              {t('home.layananUtama.subtitle')}
            </p>
          </div>
          <div className="inline-flex items-center gap-2 text-label-caption font-label-caption text-secondary bg-surface-container-low px-3 py-1.5 rounded-lg">
            <span className="w-2 h-2 rounded-full bg-tertiary-container"></span>
            {t('home.layananUtama.complianceNotice')}
          </div>
        </div>
        {/* 6 Clean White Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Service 1 */}
          <div className="bg-surface rounded-xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-surface-container-lowest flex items-center justify-center text-primary group-hover:bg-primary-container group-hover:text-on-primary transition-colors shadow-sm">
                  <span className="material-symbols-outlined text-[24px]">group_search</span>
                </div>
                <span className="text-[11px] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-surface-container text-secondary">
                  {t('home.layananUtama.service1Badge')}
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                {t('home.layananUtama.service1Title')}
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-6">
                {t('home.layananUtama.service1Desc')}
              </p>
            </div>
            <Link className="inline-flex items-center gap-1.5 text-label-button font-label-button text-primary group-hover:text-on-tertiary-container transition-colors" to="/layanan">
              <span>{t('home.layananUtama.service1Link')}</span>
              <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">chevron_right</span>
            </Link>
          </div>
          {/* Service 2 */}
          <div className="bg-surface rounded-xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-surface-container-lowest flex items-center justify-center text-primary group-hover:bg-primary-container group-hover:text-on-primary transition-colors shadow-sm">
                  <span className="material-symbols-outlined text-[24px]">flight_takeoff</span>
                </div>
                <span className="text-[11px] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-surface-container text-secondary">
                  {t('home.layananUtama.service2Badge')}
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                {t('home.layananUtama.service2Title')}
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-6">
                {t('home.layananUtama.service2Desc')}
              </p>
            </div>
            <Link className="inline-flex items-center gap-1.5 text-label-button font-label-button text-primary group-hover:text-on-tertiary-container transition-colors" to="/layanan">
              <span>{t('home.layananUtama.service2Link')}</span>
              <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">chevron_right</span>
            </Link>
          </div>
          {/* Service 3 */}
          <div className="bg-surface rounded-xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-surface-container-lowest flex items-center justify-center text-primary group-hover:bg-primary-container group-hover:text-on-primary transition-colors shadow-sm">
                  <span className="material-symbols-outlined text-[24px]">engineering</span>
                </div>
                <span className="text-[11px] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-secondary-fixed text-primary">
                  {t('home.layananUtama.service3Badge')}
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                {t('home.layananUtama.service3Title')}
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-6">
                {t('home.layananUtama.service3Desc')}
              </p>
            </div>
            <Link className="inline-flex items-center gap-1.5 text-label-button font-label-button text-primary group-hover:text-on-tertiary-container transition-colors" to="/layanan">
              <span>{t('home.layananUtama.service3Link')}</span>
              <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">chevron_right</span>
            </Link>
          </div>
          {/* Service 4 */}
          <div className="bg-surface rounded-xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-surface-container-lowest flex items-center justify-center text-primary group-hover:bg-primary-container group-hover:text-on-primary transition-colors shadow-sm">
                  <span className="material-symbols-outlined text-[24px]">medical_services</span>
                </div>
                <span className="text-[11px] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-surface-container text-secondary">
                  {t('home.layananUtama.service4Badge')}
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                {t('home.layananUtama.service4Title')}
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-6">
                {t('home.layananUtama.service4Desc')}
              </p>
            </div>
            <Link className="inline-flex items-center gap-1.5 text-label-button font-label-button text-primary group-hover:text-on-tertiary-container transition-colors" to="/lowongan-kerja">
              <span>{t('home.layananUtama.service4Link')}</span>
              <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">chevron_right</span>
            </Link>
          </div>
          {/* Service 5 */}
          <div className="bg-surface rounded-xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-surface-container-lowest flex items-center justify-center text-primary group-hover:bg-primary-container group-hover:text-on-primary transition-colors shadow-sm">
                  <span className="material-symbols-outlined text-[24px]">precision_manufacturing</span>
                </div>
                <span className="text-[11px] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-surface-container text-secondary">
                  {t('home.layananUtama.service5Badge')}
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                {t('home.layananUtama.service5Title')}
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-6">
                {t('home.layananUtama.service5Desc')}
              </p>
            </div>
            <Link className="inline-flex items-center gap-1.5 text-label-button font-label-button text-primary group-hover:text-on-tertiary-container transition-colors" to="/lowongan-kerja">
              <span>{t('home.layananUtama.service5Link')}</span>
              <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">chevron_right</span>
            </Link>
          </div>
          {/* Service 6 */}
          <div className="bg-surface rounded-xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-surface-container-lowest flex items-center justify-center text-primary group-hover:bg-primary-container group-hover:text-on-primary transition-colors shadow-sm">
                  <span className="material-symbols-outlined text-[24px]">corporate_fare</span>
                </div>
                <span className="text-[11px] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-surface-container-high text-primary">
                  {t('home.layananUtama.service6Badge')}
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                {t('home.layananUtama.service6Title')}
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-6">
                {t('home.layananUtama.service6Desc')}
              </p>
            </div>
            <Link className="inline-flex items-center gap-1.5 text-label-button font-label-button text-primary group-hover:text-on-tertiary-container transition-colors" to="/layanan">
              <span>{t('home.layananUtama.service6Link')}</span>
              <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">chevron_right</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
