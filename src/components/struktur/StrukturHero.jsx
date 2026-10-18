import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function StrukturHero() {
  const { t } = useTranslation()

  return (
    <>
      {/* Top Accent Band & Breadcrumb */}
      <section className="w-full bg-surface-container-low py-space-md">
        <div className="max-w-7xl mx-auto px-margin">
          <nav aria-label="Breadcrumb" className="flex items-center gap-space-xs text-on-surface-variant font-label-caption text-label-caption">
            <Link className="hover:text-primary transition-colors flex items-center gap-1" data-path="beranda" to="/">
              <span className="material-symbols-outlined text-[16px]">home</span>
              <span>{t('navbar.home')}</span>
            </Link>
            <span className="material-symbols-outlined text-[14px] text-outline-variant">chevron_right</span>
            <Link className="text-on-surface-variant hover:text-primary transition-colors" to="/profil-perusahaan">
              {t('navbar.about')}
            </Link>
            <span className="material-symbols-outlined text-[14px] text-outline-variant">chevron_right</span>
            <span className="text-primary font-semibold">{t('navbar.orgStructure')}</span>
          </nav>
        </div>
      </section>
      {/* Editorial Page Header with Photographic Anchor */}
      <section className="w-full bg-surface-container-lowest py-space-xl">
        <div className="max-w-7xl mx-auto px-margin">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
            {/* Title & Governance Context */}
            <div className="lg:col-span-7 flex flex-col space-y-space-md">
              <div className="inline-flex items-center gap-2 self-start bg-surface-container-high text-primary px-3 py-1 rounded-full">
                <span className="material-symbols-outlined text-[16px] text-on-tertiary-container">account_balance</span>
                <span className="font-label-eyebrow text-label-eyebrow tracking-widest uppercase">
                  {t('struktur.hero.eyebrow')}
                </span>
              </div>
              <h1 className="font-headline-xl text-headline-xl text-primary tracking-tight">
                {t('struktur.hero.title')}
                <span className="block text-secondary text-headline-lg font-headline-lg mt-1 font-normal">
                  {t('struktur.hero.subTitle')}
                </span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                {t('struktur.hero.desc')}
              </p>
              {/* Governance Notice Chip */}
              <div className="bg-surface-container p-space-md rounded-xl flex items-start gap-space-sm shadow-sm">
                <span className="material-symbols-outlined text-on-tertiary-container text-[20px] shrink-0 mt-0.5">verified_user</span>
                <div>
                  <p className="font-label-button text-label-button text-primary font-semibold">
                    {t('struktur.hero.noticeTitle')}
                  </p>
                  <p className="font-label-caption text-label-caption text-on-surface-variant mt-0.5">
                    {t('struktur.hero.noticeDesc')}
                  </p>
                </div>
              </div>
            </div>
            {/* Executive Visual Anchor */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl bg-surface-container-high aspect-[4/3] group">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  data-alt="Modern high-level corporate board meeting at PT Amal Ichwan Arindo. Professional executives, men and women in tailored navy and charcoal blazers, gathered around a natural timber conference table in a glass-walled skyscraper boardroom overlooking Jakarta city center. Warm ambient lighting, soft daylight streaming through floor-to-ceiling windows, subtle tablet charts, premium corporate dignity and calm authority."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrFALhVqpUKcBD1XLAEzNnqVik6cD8-Aydyjl02S6qPdWwea3v_4HIdyfrJ9TI7H0uEPcUnPAjfZdMBEdNo8kGHWA3MC0vAkVCwwt-Lx41BSC5xTnkyByPIsVkL8xGN5dZsz4xP4xvd9ZDEqssi_IfsCGJbSA-g8EvxW7eSpO0DtuXxqgAFtQmsQFdk2sdZasEZI7v6GFpv3C7g94aVLMo-Eq_QWC6WATsz_3lK8hN9Z7aM2nERmCmhw"
                  alt="Modern high-level corporate board meeting at PT Amal Ichwan Arindo"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent flex flex-col justify-end p-space-lg text-on-primary">
                  <span className="font-label-eyebrow text-label-eyebrow uppercase tracking-wider text-tertiary-fixed">
                    {t('struktur.hero.imgTag')}
                  </span>
                  <p className="font-body-sm text-body-sm text-surface-container-lowest/90 font-medium mt-1">
                    {t('struktur.hero.imgDesc')}
                  </p>
                </div>
              </div>
              {/* Ambient geometric badge floating */}
              <div className="absolute -bottom-4 -left-4 bg-primary text-on-primary p-space-md rounded-xl shadow-lg hidden sm:flex items-center gap-space-sm">
                <div className="w-10 h-10 rounded-lg bg-surface-container-lowest/10 flex items-center justify-center text-tertiary-fixed">
                  <span className="material-symbols-outlined text-[24px]">diversity_3</span>
                </div>
                <div>
                  <span className="font-headline-sm text-headline-sm font-bold block leading-none">100%</span>
                  <span className="font-label-caption text-label-caption text-on-primary-container">
                    {t('struktur.hero.statLabel')}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
