import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function CompanyIntro() {
  const { t } = useTranslation()

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual Column */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative rounded-xl overflow-hidden shadow-md bg-surface-container-lowest">
              <img
                className="w-full h-[460px] object-cover rounded-xl"
                data-alt="A modern professional recruitment facility in Indonesia with candidates receiving guidance from experienced manpower placement advisors, clean minimalist corporate interior, warm daylight, high detail, editorial style"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxb0wkyXwe3eXY9_c-hPG3a_HG9xN17RHmGF-uvgddPF9MwfMN9h1WhytkI6U24fFtBIaqShYsOQYh5gUN9F_bLGAdT9sfGemNufva14hVzbRZIb8hp96pv3UHQTsYlBZ4rEwgDEmmYhX1SrQgr1GxG7SZgN-oLg-LHykhI7ebM3cGmvkWioOVa73hDur0Dx0bMG4fz7BgOyBzw3gAqWJkiEcihyvfYfGktQixqPD8gao2JBGdoaCHeA"
                alt="A modern professional recruitment facility in Indonesia with candidates receiving guidance from experienced manpower placement advisors, clean minimalist corporate interior, warm daylight, high detail, editorial style"
              />
              {/* Overlay Badge Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-primary-container text-on-primary p-5 rounded-xl shadow-lg">
                <div className="flex items-center gap-3 mb-2">
                  <span className="material-symbols-outlined text-tertiary-fixed-dim text-[24px]">verified</span>
                  <span className="font-headline-sm text-headline-sm text-on-primary">{t('home.companyIntro.badgeTitle')}</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-primary-container leading-relaxed">
                  {t('home.companyIntro.badgeDesc')}
                </p>
              </div>
            </div>
          </div>
          {/* Editorial Overview */}
          <div className="lg:col-span-7 flex flex-col items-start order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-surface-container-high text-primary font-label-eyebrow text-label-eyebrow uppercase tracking-wider mb-4">
              {t('home.companyIntro.badge')}
            </div>
            <h2 className="font-headline-xl text-headline-xl text-primary font-bold mb-6 tracking-tight leading-snug">
              {t('home.companyIntro.title')}
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 leading-relaxed">
              {t('home.companyIntro.desc')}
            </p>
            {/* 3 Concise Value Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full mb-8">
              <div className="p-5 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-lg bg-surface-container-low flex items-center justify-center text-primary mb-3">
                    <span className="material-symbols-outlined text-[18px]">find_in_page</span>
                  </div>
                  <h3 className="font-headline-sm text-body-md font-bold text-primary mb-1">{t('home.companyIntro.card1Title')}</h3>
                  <p className="font-body-sm text-label-caption text-secondary">{t('home.companyIntro.card1Desc')}</p>
                </div>
              </div>
              <div className="p-5 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-lg bg-surface-container-low flex items-center justify-center text-primary mb-3">
                    <span className="material-symbols-outlined text-[18px]">workspace_premium</span>
                  </div>
                  <h3 className="font-headline-sm text-body-md font-bold text-primary mb-1">{t('home.companyIntro.card2Title')}</h3>
                  <p className="font-body-sm text-label-caption text-secondary">{t('home.companyIntro.card2Desc')}</p>
                </div>
              </div>
              <div className="p-5 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-lg bg-surface-container-low flex items-center justify-center text-primary mb-3">
                    <span className="material-symbols-outlined text-[18px]">security</span>
                  </div>
                  <h3 className="font-headline-sm text-body-md font-bold text-primary mb-1">{t('home.companyIntro.card3Title')}</h3>
                  <p className="font-body-sm text-label-caption text-secondary">{t('home.companyIntro.card3Desc')}</p>
                </div>
              </div>
            </div>
            <Link className="inline-flex items-center gap-2 font-label-button text-label-button text-primary hover:text-on-tertiary-container transition-colors group" to="/profil-perusahaan">
              <span className="font-bold underline underline-offset-4">{t('home.companyIntro.learnMore')}</span>
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
