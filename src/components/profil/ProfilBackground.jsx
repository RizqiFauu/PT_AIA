import { useTranslation } from 'react-i18next'

export default function ProfilBackground() {
  const { t } = useTranslation()

  return (
    <section className="w-full bg-surface-container-lowest py-20">
      <div className="max-w-[1280px] mx-auto px-margin">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="font-label-eyebrow text-label-eyebrow text-on-tertiary-container uppercase tracking-widest block mb-2">
            {t('profil.background.eyebrow')}
          </span>
          <h2 className="font-headline-xl text-headline-xl text-primary mb-4">
            {t('profil.background.title')}
          </h2>
          <p className="font-body-md text-body-md text-secondary leading-relaxed">
            {t('profil.background.desc')}
          </p>
        </div>
        {/* Split Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Visual & Operational Framework Column */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            <div className="relative rounded-2xl overflow-hidden shadow-lg group">
              <img
                className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-500"
                data-alt="Modern executive conference room where professional Indonesian recruiters and international overseas employers collaborate over candidate dossiers, warm natural sunlight streaming through high-rise windows, deep navy and architectural timber accents, photorealistic documentary corporate style"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXXeJf0XJ9XzXN96yZqEHhd71wcSoN2kLAkToPOMmYcvl8kCsPkT99IzsZkF7fSZoZlz0amW85OJMzUqR1k7I3G_iUKOkp0Regln60cB7jXq29zxFx528g-K5VqkHSOej2717EdMxj44gSWWdVV9YOZqr1PB8AejTF6-JySQNaFRC50SzXU-xUJU2gdfBJmfoJg170DOzw2Yt9zT8owYFovwRf2dlQFqsi5OkJLF_d_42PrWZFuZt3lQ"
                alt="Modern executive conference room where professional Indonesian recruiters and international overseas employers collaborate over candidate dossiers"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent flex flex-col justify-end p-6 text-on-primary">
                <span className="font-label-eyebrow text-label-eyebrow text-tertiary-fixed-dim uppercase tracking-wider mb-1">
                  {t('profil.background.imgTitle')}
                </span>
                <p className="font-body-sm text-body-sm text-on-primary max-w-md">
                  {t('profil.background.imgDesc')}
                </p>
              </div>
            </div>
            {/* Infographic Data Box: Operational Architecture */}
            <div className="bg-surface p-6 rounded-2xl shadow-sm">
              <h3 className="font-headline-sm text-headline-sm text-primary mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-on-tertiary-container">hub</span>
                {t('profil.background.pillarTitle')}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                <div className="p-4 bg-surface-container-lowest rounded-xl shadow-xs">
                  <span className="font-headline-md text-headline-md text-primary block font-bold">
                    {t('profil.background.stat1Value')}
                  </span>
                  <span className="font-body-sm text-body-sm text-secondary">
                    {t('profil.background.stat1Label')}
                  </span>
                </div>
                <div className="p-4 bg-surface-container-lowest rounded-xl shadow-xs">
                  <span className="font-headline-md text-headline-md text-primary block font-bold">
                    {t('profil.background.stat2Value')}
                  </span>
                  <span className="font-body-sm text-body-sm text-secondary">
                    {t('profil.background.stat2Label')}
                  </span>
                </div>
                <div className="p-4 bg-surface-container-lowest rounded-xl shadow-xs">
                  <span className="font-headline-md text-headline-md text-primary block font-bold">
                    {t('profil.background.stat3Value')}
                  </span>
                  <span className="font-body-sm text-body-sm text-secondary">
                    {t('profil.background.stat3Label')}
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Narrative Column */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            <div className="bg-surface-container-low p-8 rounded-2xl">
              <h3 className="font-headline-md text-headline-md text-primary mb-3">
                {t('profil.background.historyTitle')}
              </h3>
              <p className="font-body-md text-body-md text-on-surface leading-relaxed mb-4">
                {t('profil.background.historyP1Prefix')} <strong>PT Amal Ichwan Arindo</strong> {t('profil.background.historyP1Suffix')}
              </p>
              <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                {t('profil.background.historyP2')}
              </p>
            </div>
            {/* Milestones & Development Track Record */}
            <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm">
              <h4 className="font-headline-sm text-headline-sm text-primary mb-5 flex items-center gap-2">
                <span className="material-symbols-outlined text-on-tertiary-container">history_edu</span>
                {t('profil.background.trajectoryTitle')}
              </h4>
              <div className="space-y-5">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center shrink-0 font-bold text-primary">
                    {t('profil.background.m1Num')}
                  </div>
                  <div>
                    <h5 className="font-headline-sm text-headline-sm text-primary text-base">
                      {t('profil.background.m1Title')}
                    </h5>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">
                      {t('profil.background.m1Desc')}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center shrink-0 font-bold text-primary">
                    {t('profil.background.m2Num')}
                  </div>
                  <div>
                    <h5 className="font-headline-sm text-headline-sm text-primary text-base">
                      {t('profil.background.m2Title')}
                    </h5>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">
                      {t('profil.background.m2Desc')}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center shrink-0 font-bold text-primary">
                    {t('profil.background.m3Num')}
                  </div>
                  <div>
                    <h5 className="font-headline-sm text-headline-sm text-primary text-base">
                      {t('profil.background.m3Title')}
                    </h5>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">
                      {t('profil.background.m3Desc')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
