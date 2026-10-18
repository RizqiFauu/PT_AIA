import { useTranslation } from 'react-i18next'

export default function ProfilTataKelola() {
  const { t } = useTranslation()

  return (
    <section className="w-full bg-primary-container text-on-primary py-16" id="tata-kelola">
      <div className="max-w-[1280px] mx-auto px-margin">
        <div className="bg-surface-container-lowest/5 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 flex flex-col space-y-4">
              <div className="inline-flex items-center gap-2">
                <span className="material-symbols-outlined text-tertiary-fixed-dim">verified</span>
                <span className="font-label-eyebrow text-label-eyebrow text-tertiary-fixed-dim uppercase tracking-wider">
                  {t('profil.tataKelola.eyebrow')}
                </span>
              </div>
              <h3 className="font-headline-lg text-headline-lg text-on-primary">
                {t('profil.tataKelola.title')}
              </h3>
              <p className="font-body-md text-body-md text-primary-fixed-dim leading-relaxed">
                {t('profil.tataKelola.descP1')} <em>{t('profil.tataKelola.descEm')}</em> {t('profil.tataKelola.descP2')}
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px] text-tertiary-fixed-dim">check_circle</span>
                  <span className="font-body-sm text-body-sm text-on-primary">
                    {t('profil.tataKelola.point1')}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px] text-tertiary-fixed-dim">check_circle</span>
                  <span className="font-body-sm text-body-sm text-on-primary">
                    {t('profil.tataKelola.point2')}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px] text-tertiary-fixed-dim">check_circle</span>
                  <span className="font-body-sm text-body-sm text-on-primary">
                    {t('profil.tataKelola.point3')}
                  </span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 bg-surface-container-lowest/10 p-6 rounded-xl flex flex-col space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-tertiary-fixed-dim text-tertiary flex items-center justify-center font-bold">
                  <span className="material-symbols-outlined">campaign</span>
                </div>
                <div>
                  <h5 className="font-headline-sm text-headline-sm text-on-primary text-base">
                    {t('profil.tataKelola.whistleTitle')}
                  </h5>
                  <p className="font-label-caption text-label-caption text-primary-fixed-dim">
                    {t('profil.tataKelola.whistleSub')}
                  </p>
                </div>
              </div>
              <p className="font-body-sm text-body-sm text-primary-fixed-dim">
                {t('profil.tataKelola.whistleDesc')}
              </p>
              <a className="inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-surface-container-lowest text-primary font-label-button text-label-button rounded-lg hover:bg-surface-container transition-colors" href="mailto:kepatuhan@amalichwanarindo.co.id">
                <span className="material-symbols-outlined text-[16px]">mail</span>
                <span>{t('profil.tataKelola.whistleBtn')}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
