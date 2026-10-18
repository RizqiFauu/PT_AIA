import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function ProfilHero() {
  const { t } = useTranslation()

  return (
    <>
      {/* Top Breadcrumb & Administrative Notice Strip */}
      <section className="w-full bg-surface-container-lowest">
        <div className="max-w-[1280px] mx-auto px-margin py-4 flex flex-col md:flex-row md:items-center justify-between gap-3">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-label-caption text-label-caption text-on-surface-variant">
            <Link className="hover:text-primary transition-colors flex items-center gap-1" data-path="beranda" to="/">
              <span className="material-symbols-outlined text-[16px]">home</span>
              {t('navbar.home')}
            </Link>
            <span className="text-outline-variant">/</span>
            <Link className="hover:text-primary transition-colors" data-path="tentang-kami" to="/profil-perusahaan">
              {t('navbar.about')}
            </Link>
            <span className="text-outline-variant">/</span>
            <span className="font-semibold text-primary">{t('profil.hero.breadcrumbCurrent')}</span>
          </nav>
          {/* Status Indicator / Draft Verification Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-high rounded-full self-start md:self-auto">
            <span className="w-2 h-2 rounded-full bg-on-tertiary-container animate-pulse"></span>
            <span className="font-label-caption text-label-caption text-on-surface font-semibold tracking-wide">
              {t('profil.hero.draftNotice')}
            </span>
          </div>
        </div>
      </section>
      {/* Editorial Page Hero */}
      <section className="w-full bg-surface-container-low py-12 md:py-20 relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-margin relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Hero Text */}
            <div className="lg:col-span-7 flex flex-col space-y-4">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-8 bg-on-tertiary-container"></span>
                <span className="font-label-eyebrow text-label-eyebrow text-on-tertiary-container tracking-widest uppercase">
                  {t('profil.hero.eyebrow')}
                </span>
              </div>
              <h1 className="font-display-hero text-display-hero text-primary tracking-tight">
                {t('profil.hero.title')}
              </h1>
              <p className="font-body-lg text-body-lg text-secondary leading-relaxed max-w-2xl pt-2">
                {t('profil.hero.desc')}
              </p>
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-on-primary font-label-button text-label-button rounded-xl hover:bg-primary-container transition-all shadow-md" href="#visi-misi">
                  <span>{t('profil.hero.btnExplore')}</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_downward</span>
                </a>
                <a className="inline-flex items-center gap-2 px-6 py-3.5 bg-surface-container-lowest text-primary font-label-button text-label-button rounded-xl hover:bg-surface-container transition-all" href="#tata-kelola">
                  <span className="material-symbols-outlined text-[18px] text-on-tertiary-container">verified_user</span>
                  <span>{t('profil.hero.btnGovernance')}</span>
                </a>
              </div>
            </div>
            {/* Metric Mosaic Cards */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm flex flex-col justify-between space-y-3">
                <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">gavel</span>
                </div>
                <div>
                  <span className="font-headline-lg text-headline-lg text-primary block">{t('profil.hero.stat1Value')}</span>
                  <span className="font-label-caption text-label-caption text-secondary uppercase font-bold tracking-wider">{t('profil.hero.stat1Title')}</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">{t('profil.hero.stat1Desc')}</p>
              </div>
              <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm flex flex-col justify-between space-y-3">
                <div className="w-10 h-10 rounded-xl bg-secondary-container flex items-center justify-center text-on-secondary-container">
                  <span className="material-symbols-outlined">public</span>
                </div>
                <div>
                  <span className="font-headline-lg text-headline-lg text-primary block">{t('profil.hero.stat2Value')}</span>
                  <span className="font-label-caption text-label-caption text-secondary uppercase font-bold tracking-wider">{t('profil.hero.stat2Title')}</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">{t('profil.hero.stat2Desc')}</p>
              </div>
              <div className="col-span-2 bg-primary-container text-on-primary p-6 rounded-2xl shadow-md flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-surface-container-lowest/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-tertiary-fixed-dim text-[24px]">workspace_premium</span>
                  </div>
                  <div>
                    <h4 className="font-headline-sm text-headline-sm text-on-primary">{t('profil.hero.bannerTitle')}</h4>
                    <p className="font-body-sm text-body-sm text-primary-fixed-dim">{t('profil.hero.bannerDesc')}</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-tertiary-fixed-dim text-[28px] hidden sm:block">handshake</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
