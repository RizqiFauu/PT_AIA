import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function ProfilTautanTerkait() {
  const { t } = useTranslation()

  return (
    <section className="w-full bg-surface-container-lowest py-16">
      <div className="max-w-[1280px] mx-auto px-margin">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-8 pb-4">
          <div>
            <span className="font-label-eyebrow text-label-eyebrow text-on-tertiary-container uppercase tracking-wider block mb-1">
              {t('profil.tautanTerkait.eyebrow')}
            </span>
            <h3 className="font-headline-md text-headline-md text-primary">
              {t('profil.tautanTerkait.title')}
            </h3>
          </div>
          <p className="font-body-sm text-body-sm text-secondary mt-2 md:mt-0">
            {t('profil.tautanTerkait.desc')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Struktur Organisasi */}
          <Link className="group bg-surface p-6 rounded-2xl hover:bg-surface-container transition-all flex flex-col justify-between" data-path="struktur-organisasi" to="/struktur-organisasi">
            <div>
              <div className="w-12 h-12 rounded-xl bg-surface-container-lowest flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">account_tree</span>
              </div>
              <h4 className="font-headline-sm text-headline-sm text-primary mb-2 flex items-center justify-between">
                {t('profil.tautanTerkait.c1Title')}
                <span className="material-symbols-outlined text-[20px] text-on-surface-variant group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                {t('profil.tautanTerkait.c1Desc')}
              </p>
            </div>
            <span className="font-label-button text-label-button text-primary font-semibold mt-6 inline-flex items-center gap-1">
              {t('profil.tautanTerkait.c1Btn')}
            </span>
          </Link>
          {/* Card 2: Legalitas Perusahaan */}
          <Link className="group bg-surface p-6 rounded-2xl hover:bg-surface-container transition-all flex flex-col justify-between" data-path="legalitas-perusahaan" to="/legalitas-perusahaan">
            <div>
              <div className="w-12 h-12 rounded-xl bg-surface-container-lowest flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">fact_check</span>
              </div>
              <h4 className="font-headline-sm text-headline-sm text-primary mb-2 flex items-center justify-between">
                {t('profil.tautanTerkait.c2Title')}
                <span className="material-symbols-outlined text-[20px] text-on-surface-variant group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                {t('profil.tautanTerkait.c2Desc')}
              </p>
            </div>
            <span className="font-label-button text-label-button text-primary font-semibold mt-6 inline-flex items-center gap-1">
              {t('profil.tautanTerkait.c2Btn')}
            </span>
          </Link>
          {/* Card 3: Hubungi / Kontak Layanan */}
          <Link className="group bg-surface p-6 rounded-2xl hover:bg-surface-container transition-all flex flex-col justify-between" data-path="kontak" to="/kontak">
            <div>
              <div className="w-12 h-12 rounded-xl bg-surface-container-lowest flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">contact_support</span>
              </div>
              <h4 className="font-headline-sm text-headline-sm text-primary mb-2 flex items-center justify-between">
                {t('profil.tautanTerkait.c3Title')}
                <span className="material-symbols-outlined text-[20px] text-on-surface-variant group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                {t('profil.tautanTerkait.c3Desc')}
              </p>
            </div>
            <span className="font-label-button text-label-button text-primary font-semibold mt-6 inline-flex items-center gap-1">
              {t('profil.tautanTerkait.c3Btn')}
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
