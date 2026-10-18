import { useTranslation } from 'react-i18next'

export default function ProfilVisiMisi() {
  const { t } = useTranslation()

  return (
    <section className="w-full bg-surface-container py-20" id="visi-misi">
      <div className="max-w-[1280px] mx-auto px-margin">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-label-eyebrow text-label-eyebrow text-on-tertiary-container uppercase tracking-widest block mb-2">
            {t('profil.visiMisi.eyebrow')}
          </span>
          <h2 className="font-headline-xl text-headline-xl text-primary mb-4">
            {t('profil.visiMisi.title')}
          </h2>
          <p className="font-body-md text-body-md text-secondary leading-relaxed">
            {t('profil.visiMisi.desc')}
          </p>
        </div>
        {/* Vision Feature Box */}
        <div className="bg-surface-container-lowest rounded-2xl p-8 md:p-12 mb-16 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-on-tertiary-container"></div>
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start md:items-center">
            <div className="w-16 h-16 rounded-2xl bg-surface-container flex items-center justify-center shrink-0 text-on-tertiary-container shadow-xs">
              <span className="material-symbols-outlined text-[36px]">visibility</span>
            </div>
            <div className="flex flex-col space-y-2">
              <span className="font-label-eyebrow text-label-eyebrow text-on-tertiary-container uppercase tracking-wider">
                {t('profil.visiMisi.visionEyebrow')}
              </span>
              <blockquote className="font-headline-lg text-headline-lg text-primary tracking-tight leading-snug">
                {t('profil.visiMisi.visionQuote')}
              </blockquote>
            </div>
          </div>
        </div>
        {/* Mission: 4 Structured Pillar Cards */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="font-label-eyebrow text-label-eyebrow text-on-tertiary-container uppercase tracking-wider block mb-1">
                {t('profil.visiMisi.missionEyebrow')}
              </span>
              <h3 className="font-headline-md text-headline-md text-primary">
                {t('profil.visiMisi.missionTitle')}
              </h3>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Pillar 1 */}
            <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors mb-6">
                  <span className="material-symbols-outlined">balance</span>
                </div>
                <span className="font-label-caption text-label-caption text-on-tertiary-container font-bold uppercase tracking-wider block mb-1">
                  {t('profil.visiMisi.p1Tag')}
                </span>
                <h4 className="font-headline-sm text-headline-sm text-primary mb-3">
                  {t('profil.visiMisi.p1Title')}
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {t('profil.visiMisi.p1Desc')}
                </p>
              </div>
              <div className="pt-6 mt-6 bg-surface-container-low rounded-lg p-3 text-center">
                <span className="font-label-caption text-label-caption text-secondary font-medium">
                  {t('profil.visiMisi.p1Badge')}
                </span>
              </div>
            </div>
            {/* Pillar 2 */}
            <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors mb-6">
                  <span className="material-symbols-outlined">school</span>
                </div>
                <span className="font-label-caption text-label-caption text-on-tertiary-container font-bold uppercase tracking-wider block mb-1">
                  {t('profil.visiMisi.p2Tag')}
                </span>
                <h4 className="font-headline-sm text-headline-sm text-primary mb-3">
                  {t('profil.visiMisi.p2Title')}
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {t('profil.visiMisi.p2Desc')}
                </p>
              </div>
              <div className="pt-6 mt-6 bg-surface-container-low rounded-lg p-3 text-center">
                <span className="font-label-caption text-label-caption text-secondary font-medium">
                  {t('profil.visiMisi.p2Badge')}
                </span>
              </div>
            </div>
            {/* Pillar 3 */}
            <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors mb-6">
                  <span className="material-symbols-outlined">corporate_fare</span>
                </div>
                <span className="font-label-caption text-label-caption text-on-tertiary-container font-bold uppercase tracking-wider block mb-1">
                  {t('profil.visiMisi.p3Tag')}
                </span>
                <h4 className="font-headline-sm text-headline-sm text-primary mb-3">
                  {t('profil.visiMisi.p3Title')}
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {t('profil.visiMisi.p3Desc')}
                </p>
              </div>
              <div className="pt-6 mt-6 bg-surface-container-low rounded-lg p-3 text-center">
                <span className="font-label-caption text-label-caption text-secondary font-medium">
                  {t('profil.visiMisi.p3Badge')}
                </span>
              </div>
            </div>
            {/* Pillar 4 */}
            <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors mb-6">
                  <span className="material-symbols-outlined">health_and_safety</span>
                </div>
                <span className="font-label-caption text-label-caption text-on-tertiary-container font-bold uppercase tracking-wider block mb-1">
                  {t('profil.visiMisi.p4Tag')}
                </span>
                <h4 className="font-headline-sm text-headline-sm text-primary mb-3">
                  {t('profil.visiMisi.p4Title')}
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {t('profil.visiMisi.p4Desc')}
                </p>
              </div>
              <div className="pt-6 mt-6 bg-surface-container-low rounded-lg p-3 text-center">
                <span className="font-label-caption text-label-caption text-secondary font-medium">
                  {t('profil.visiMisi.p4Badge')}
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Core Values (5 Nilai Perusahaan) */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="font-label-eyebrow text-label-eyebrow text-on-tertiary-container uppercase tracking-wider block mb-1">
              {t('profil.visiMisi.valuesEyebrow')}
            </span>
            <h3 className="font-headline-md text-headline-md text-primary">
              {t('profil.visiMisi.valuesTitle')}
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {/* Nilai 1 */}
            <div className="bg-surface-container-lowest p-6 rounded-xl shadow-xs flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center text-on-tertiary-container mb-4">
                <span className="material-symbols-outlined text-[24px]">verified</span>
              </div>
              <h5 className="font-headline-sm text-headline-sm text-primary text-base mb-1">
                {t('profil.visiMisi.v1Title')}
              </h5>
              <span className="font-label-caption text-label-caption text-secondary italic mb-2">
                {t('profil.visiMisi.v1Sub')}
              </span>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                {t('profil.visiMisi.v1Desc')}
              </p>
            </div>
            {/* Nilai 2 */}
            <div className="bg-surface-container-lowest p-6 rounded-xl shadow-xs flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center text-on-tertiary-container mb-4">
                <span className="material-symbols-outlined text-[24px]">psychology</span>
              </div>
              <h5 className="font-headline-sm text-headline-sm text-primary text-base mb-1">
                {t('profil.visiMisi.v2Title')}
              </h5>
              <span className="font-label-caption text-label-caption text-secondary italic mb-2">
                {t('profil.visiMisi.v2Sub')}
              </span>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                {t('profil.visiMisi.v2Desc')}
              </p>
            </div>
            {/* Nilai 3 */}
            <div className="bg-surface-container-lowest p-6 rounded-xl shadow-xs flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center text-on-tertiary-container mb-4">
                <span className="material-symbols-outlined text-[24px]">visibility</span>
              </div>
              <h5 className="font-headline-sm text-headline-sm text-primary text-base mb-1">
                {t('profil.visiMisi.v3Title')}
              </h5>
              <span className="font-label-caption text-label-caption text-secondary italic mb-2">
                {t('profil.visiMisi.v3Sub')}
              </span>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                {t('profil.visiMisi.v3Desc')}
              </p>
            </div>
            {/* Nilai 4 */}
            <div className="bg-surface-container-lowest p-6 rounded-xl shadow-xs flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center text-on-tertiary-container mb-4">
                <span className="material-symbols-outlined text-[24px]">favorite</span>
              </div>
              <h5 className="font-headline-sm text-headline-sm text-primary text-base mb-1">
                {t('profil.visiMisi.v4Title')}
              </h5>
              <span className="font-label-caption text-label-caption text-secondary italic mb-2">
                {t('profil.visiMisi.v4Sub')}
              </span>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                {t('profil.visiMisi.v4Desc')}
              </p>
            </div>
            {/* Nilai 5 */}
            <div className="bg-surface-container-lowest p-6 rounded-xl shadow-xs flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center text-on-tertiary-container mb-4">
                <span className="material-symbols-outlined text-[24px]">policy</span>
              </div>
              <h5 className="font-headline-sm text-headline-sm text-primary text-base mb-1">
                {t('profil.visiMisi.v5Title')}
              </h5>
              <span className="font-label-caption text-label-caption text-secondary italic mb-2">
                {t('profil.visiMisi.v5Sub')}
              </span>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                {t('profil.visiMisi.v5Desc')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
