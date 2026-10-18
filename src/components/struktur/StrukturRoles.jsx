import { useTranslation } from 'react-i18next'

export default function StrukturRoles() {
  const { t } = useTranslation()

  return (
    <section className="w-full bg-surface-container-lowest py-space-xl">
      <div className="max-w-7xl mx-auto px-margin">
        {/* Section Title */}
        <div className="max-w-3xl mb-12">
          <span className="font-label-eyebrow text-label-eyebrow text-on-tertiary-container uppercase tracking-wider block mb-1">
            {t('struktur.roles.eyebrow')}
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary font-bold tracking-tight">
            {t('struktur.roles.title')}
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2">
            {t('struktur.roles.desc')}
          </p>
        </div>
        {/* Grid of 4 Core Functional Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {/* Pillar 1: Kepemimpinan Strategis & Hubungan Luar Negeri */}
          <div className="bg-surface rounded-2xl p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary text-on-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-[24px]">corporate_fare</span>
                </div>
                <span className="font-label-eyebrow text-label-eyebrow bg-surface-container px-3 py-1 rounded-full text-primary">
                  {t('struktur.roles.p1Badge')}
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary font-bold">
                {t('struktur.roles.p1Title')}
              </h3>
              <p className="font-body-sm text-body-sm text-secondary font-medium mt-0.5">
                {t('struktur.roles.p1Sub')}
              </p>
              <ul className="mt-space-md space-y-space-sm text-on-surface-variant font-body-sm text-body-sm">
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">check_circle</span>
                  <span>{t('struktur.roles.p1Point1')}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">check_circle</span>
                  <span>{t('struktur.roles.p1Point2')}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">check_circle</span>
                  <span>{t('struktur.roles.p1Point3')}</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 bg-surface-container-low rounded-xl px-4 py-2.5 flex items-center justify-between">
              <span className="font-label-caption text-label-caption text-on-surface-variant">
                {t('struktur.roles.p1FootLabel')}
              </span>
              <span className="font-label-button text-label-button text-primary font-semibold">
                {t('struktur.roles.p1FootValue')}
              </span>
            </div>
          </div>
          {/* Pillar 2: Pembinaan Teknis & BLK-LN */}
          <div className="bg-surface rounded-2xl p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-on-tertiary-container text-on-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-[24px]">model_training</span>
                </div>
                <span className="font-label-eyebrow text-label-eyebrow bg-tertiary-fixed text-on-tertiary-fixed px-3 py-1 rounded-full">
                  {t('struktur.roles.p2Badge')}
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary font-bold">
                {t('struktur.roles.p2Title')}
              </h3>
              <p className="font-body-sm text-body-sm text-secondary font-medium mt-0.5">
                {t('struktur.roles.p2Sub')}
              </p>
              <ul className="mt-space-md space-y-space-sm text-on-surface-variant font-body-sm text-body-sm">
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-on-tertiary-container text-[18px] shrink-0 mt-0.5">check_circle</span>
                  <span>{t('struktur.roles.p2Point1')}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-on-tertiary-container text-[18px] shrink-0 mt-0.5">check_circle</span>
                  <span>{t('struktur.roles.p2Point2')}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-on-tertiary-container text-[18px] shrink-0 mt-0.5">check_circle</span>
                  <span>{t('struktur.roles.p2Point3')}</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 bg-surface-container-low rounded-xl px-4 py-2.5 flex items-center justify-between">
              <span className="font-label-caption text-label-caption text-on-surface-variant">
                {t('struktur.roles.p2FootLabel')}
              </span>
              <span className="font-label-button text-label-button text-primary font-semibold">
                {t('struktur.roles.p2FootValue')}
              </span>
            </div>
          </div>
          {/* Pillar 3: Kepatuhan Dokumen, Imigrasi & Regulasi */}
          <div className="bg-surface rounded-2xl p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary-container text-on-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-[24px]">verified</span>
                </div>
                <span className="font-label-eyebrow text-label-eyebrow bg-surface-container-high px-3 py-1 rounded-full text-primary">
                  {t('struktur.roles.p3Badge')}
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary font-bold">
                {t('struktur.roles.p3Title')}
              </h3>
              <p className="font-body-sm text-body-sm text-secondary font-medium mt-0.5">
                {t('struktur.roles.p3Sub')}
              </p>
              <ul className="mt-space-md space-y-space-sm text-on-surface-variant font-body-sm text-body-sm">
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">check_circle</span>
                  <span>{t('struktur.roles.p3Point1')}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">check_circle</span>
                  <span>{t('struktur.roles.p3Point2')}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">check_circle</span>
                  <span>{t('struktur.roles.p3Point3')}</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 bg-surface-container-low rounded-xl px-4 py-2.5 flex items-center justify-between">
              <span className="font-label-caption text-label-caption text-on-surface-variant">
                {t('struktur.roles.p3FootLabel')}
              </span>
              <span className="font-label-button text-label-button text-primary font-semibold">
                {t('struktur.roles.p3FootValue')}
              </span>
            </div>
          </div>
          {/* Pillar 4: Perlindungan Hak, Advokasi & Pasca-Penempatan */}
          <div className="bg-surface rounded-2xl p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-secondary text-on-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-[24px]">support_agent</span>
                </div>
                <span className="font-label-eyebrow text-label-eyebrow bg-secondary-fixed text-on-secondary-fixed px-3 py-1 rounded-full">
                  {t('struktur.roles.p4Badge')}
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary font-bold">
                {t('struktur.roles.p4Title')}
              </h3>
              <p className="font-body-sm text-body-sm text-secondary font-medium mt-0.5">
                {t('struktur.roles.p4Sub')}
              </p>
              <ul className="mt-space-md space-y-space-sm text-on-surface-variant font-body-sm text-body-sm">
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">check_circle</span>
                  <span>{t('struktur.roles.p4Point1')}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">check_circle</span>
                  <span>{t('struktur.roles.p4Point2')}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">check_circle</span>
                  <span>{t('struktur.roles.p4Point3')}</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 bg-surface-container-low rounded-xl px-4 py-2.5 flex items-center justify-between">
              <span className="font-label-caption text-label-caption text-on-surface-variant">
                {t('struktur.roles.p4FootLabel')}
              </span>
              <span className="font-label-button text-label-button text-primary font-semibold">
                {t('struktur.roles.p4FootValue')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
