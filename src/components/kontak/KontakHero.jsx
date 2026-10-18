import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

/*
 * Hero halaman /kontak, strukturnya sama dengan halaman Negara Tujuan:
 * breadcrumb bar -> hero (teks kiri + kartu ringkasan kanan).
 * pt-16 lg:pt-20 = tinggi navbar yang fixed, jadi hapus kalau Layout sudah memberi jarak atas.
 */
export default function KontakHero() {
  const { t } = useTranslation()

  return (
    <div className="pt-16 lg:pt-20">
      {/* Breadcrumb bar */}
      <div className="bg-primary/5 border-b border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-margin py-3 flex flex-wrap items-center justify-between gap-3">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-on-surface-variant">
            <span className="material-symbols-outlined text-[18px]" aria-hidden="true">home</span>
            <Link to="/" className="hover:text-primary hover:underline">
              {t('navbar.home')}
            </Link>
            <span className="material-symbols-outlined text-[16px]" aria-hidden="true">chevron_right</span>
            <span className="font-semibold text-primary">{t('navbar.contactUs')}</span>
          </nav>

          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-on-surface-variant">
            <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
            {t('kontak.hero.statusPill', 'Kanal resmi PT Amal Ichwan Arindo')}
          </span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-surface py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-margin grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          <div className="lg:col-span-8">
            <span className="inline-flex items-center gap-2 rounded-lg bg-[#f6f0e0] px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[#9a7b2f] mb-5">
              <span className="material-symbols-outlined text-[16px]" aria-hidden="true">support_agent</span>
              {t('kontak.hero.badge')}
            </span>

            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-on-surface leading-[1.15] mb-5">
              {t('kontak.hero.title')}
            </h1>

            <p className="text-base lg:text-lg text-on-surface-variant leading-relaxed max-w-3xl">
              {t('kontak.hero.desc')}
            </p>
          </div>

          {/* Kartu ringkasan (gaya "Standar Proteksi") */}
          <div className="lg:col-span-4">
            <div className="rounded-2xl bg-primary/5 p-6">
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-bold uppercase tracking-wider text-on-surface">
                  {t('kontak.hero.cardTitle', 'Kanal kontak resmi')}
                </span>
                <span className="material-symbols-outlined text-on-surface" aria-hidden="true">verified_user</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-2xl font-bold text-on-surface">{t('kontak.hero.stat1Value', '2 Jalur')}</p>
                  <p className="text-sm text-on-surface-variant mt-1">{t('kontak.hero.stat1Label', 'Email & WhatsApp')}</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-on-surface">{t('kontak.hero.stat2Value', '5 Topik')}</p>
                  <p className="text-sm text-on-surface-variant mt-1">{t('kontak.hero.stat2Label', 'Layanan informasi')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}