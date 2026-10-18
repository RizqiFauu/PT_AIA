import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section className="relative w-full bg-surface-container-lowest overflow-hidden py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Hero Content (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-container-low text-on-tertiary-container text-label-eyebrow font-label-eyebrow tracking-widest uppercase mb-6 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container"></span>
              <span>{t('home.hero.eyebrow')}</span>
            </div>
            {/* Headline */}
            <h1 className="font-display-hero text-headline-xl lg:text-display-hero text-primary font-bold tracking-tight mb-4 leading-tight">
              {t('home.hero.title')}
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-10 leading-relaxed">
              {t('home.hero.desc')}
            </p>
            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-12">
              <Link className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-primary-container text-on-primary font-label-button text-label-button shadow-md hover:bg-primary transition-all" to="/profil-perusahaan">
                <span>{t('home.hero.ctaLearn')}</span>
                <span className="material-symbols-outlined text-[18px] ml-2 text-tertiary-fixed">arrow_forward</span>
              </Link>
              <Link className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-surface-container-lowest text-primary font-label-button text-label-button shadow-sm hover:bg-surface-container-low transition-all" to="/kontak">
                {t('home.hero.ctaConsult')}
              </Link>
            </div>
            {/* Trust Metrics Bar */}
            <div className="w-full pt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 bg-surface-container-low/60 rounded-xl p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center text-on-tertiary-container shadow-sm shrink-0">
                  <span className="material-symbols-outlined text-[20px]">verified_user</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-button text-label-button text-primary">{t('home.hero.metric1Title')}</span>
                  <span className="font-label-caption text-label-caption text-secondary">{t('home.hero.metric1Sub')}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center text-on-tertiary-container shadow-sm shrink-0">
                  <span className="material-symbols-outlined text-[20px]">policy</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-button text-label-button text-primary">{t('home.hero.metric2Title')}</span>
                  <span className="font-label-caption text-label-caption text-secondary">{t('home.hero.metric2Sub')}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center text-on-tertiary-container shadow-sm shrink-0">
                  <span className="material-symbols-outlined text-[20px]">handshake</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-button text-label-button text-primary">{t('home.hero.metric3Title')}</span>
                  <span className="font-label-caption text-label-caption text-secondary">{t('home.hero.metric3Sub')}</span>
                </div>
              </div>
            </div>
          </div>
          {/* Hero Visual (5 Cols) */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-lg lg:max-w-none rounded-xl overflow-hidden shadow-xl bg-surface-container">
              <img alt="PT Amal Ichwan Arindo Strategic Operations & Candidate Advisory" className="w-full h-[520px] object-cover object-center" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwTHa5vRmnq9ycnKmwJ99bWxnYlsG0OzPDE73vgYl6JkmjTgkGhqpL_kxVklrZ0_RQv9Jym9F231ED-Lsn82Z3qUeHOX6FOOvVOwbRe1hLKe6tr9OOhS5YMw06UZSxSz0kos-FgkxOSFUtO7eImwprnIhi7PZxgYpllAEPUtri49GDseskKQYoGEGbtmIxhVhPQvV2TQxipR1iHOvfUj6cSaRvQH3nyVfTcKqnVqpwmMpSFeMBA82X9A" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent pointer-events-none"></div>
              {/* Architectural Gold Corner Accents */}
              <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-tertiary-fixed pointer-events-none"></div>
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-tertiary-fixed pointer-events-none"></div>
              {/* Floating Verified Placement Tag */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-lg bg-surface-container-lowest/95 backdrop-blur-sm shadow-md flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined text-[20px]">public</span>
                  </div>
                  <div>
                    <p className="font-headline-sm text-body-sm font-bold text-primary">{t('home.hero.floatingTagTitle')}</p>
                    <p className="font-label-caption text-label-caption text-secondary">{t('home.hero.floatingTagDesc')}</p>
                  </div>
                </div>
                <span className="inline-flex px-2 py-0.5 rounded text-[11px] font-bold bg-secondary-fixed text-primary">{t('home.hero.floatingBadge')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
