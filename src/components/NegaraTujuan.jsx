import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function NegaraTujuan() {
  const { t } = useTranslation()

  const countries = [
    {
      flag: '🇹🇼',
      nameKey: 'home.negaraTujuan.cTaiwan',
      badgeKey: 'home.negaraTujuan.badgeVerified',
      badgeClass: 'bg-surface-container text-secondary',
      sectors: [
        'home.negaraTujuan.secManufacturing',
        'home.negaraTujuan.secCaregiver',
        'home.negaraTujuan.secConstruction',
      ],
    },
    {
      flag: '🇲🇾',
      nameKey: 'home.negaraTujuan.cMalaysia',
      badgeKey: 'home.negaraTujuan.badgeVerified',
      badgeClass: 'bg-surface-container text-secondary',
      sectors: [
        'home.negaraTujuan.secFactoryAssembly',
        'home.negaraTujuan.secPlantation',
        'home.negaraTujuan.secServices',
      ],
    },
    {
      flag: '🇸🇬',
      nameKey: 'home.negaraTujuan.cSingapore',
      badgeKey: 'home.negaraTujuan.badgeVerified',
      badgeClass: 'bg-surface-container text-secondary',
      sectors: [
        'home.negaraTujuan.secHospitality',
        'home.negaraTujuan.secCaregiver',
        'home.negaraTujuan.secRetail',
      ],
    },
    {
      flag: '🇭🇰',
      nameKey: 'home.negaraTujuan.cHongKong',
      badgeKey: 'home.negaraTujuan.badgeVerified',
      badgeClass: 'bg-surface-container text-secondary',
      sectors: [
        'home.negaraTujuan.secSpecialCaregiver',
        'home.negaraTujuan.secFormalDomestic',
      ],
    },
    {
      flag: '🇸🇦',
      nameKey: 'home.negaraTujuan.cSaudi',
      badgeKey: 'home.negaraTujuan.badgeSpsk',
      badgeClass: 'bg-surface-container text-secondary',
      sectors: [
        'home.negaraTujuan.secHealthHospital',
        'home.negaraTujuan.secConstructionServices',
      ],
    },
    {
      flag: '🇧🇳',
      nameKey: 'home.negaraTujuan.cBrunei',
      badgeKey: 'home.negaraTujuan.badgeVerified',
      badgeClass: 'bg-surface-container text-secondary',
      sectors: [
        'home.negaraTujuan.secInfrastructure',
        'home.negaraTujuan.secWeldingTech',
        'home.negaraTujuan.secCulinary',
      ],
    },
    {
      flag: '🇵🇱',
      nameKey: 'home.negaraTujuan.cPoland',
      badgeKey: 'home.negaraTujuan.badgeEurope',
      badgeClass: 'bg-secondary-fixed text-primary',
      sectors: [
        'home.negaraTujuan.secProcessingPlant',
        'home.negaraTujuan.secWarehouseLogistics',
      ],
    },
  ]

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-margin">
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <span className="text-label-eyebrow font-label-eyebrow text-on-tertiary-container uppercase tracking-widest block mb-2">
            {t('home.negaraTujuan.badge')}
          </span>
          <h2 className="font-headline-xl text-headline-xl text-primary font-bold tracking-tight">
            {t('home.negaraTujuan.title')}
          </h2>
          <p className="font-body-md text-body-md text-secondary mt-2">
            {t('home.negaraTujuan.subtitle')}
          </p>
        </div>

        {/* Countries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {countries.map((c, i) => (
            <div
              key={i}
              className="bg-surface-container-lowest rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl">{c.flag}</span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${c.badgeClass}`}>
                    {t(c.badgeKey)}
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-1">
                  {t(c.nameKey)}
                </h3>
                <p className="font-label-caption text-label-caption text-secondary mb-3">
                  {t('home.negaraTujuan.mainSectors')}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {c.sectors.map((sec, j) => (
                    <span key={j} className="text-xs bg-surface-container-low px-2 py-1 rounded text-primary">
                      {t(sec)}
                    </span>
                  ))}
                </div>
              </div>
              <Link
                className="text-body-sm font-label-button text-primary hover:text-on-tertiary-container flex items-center justify-between pt-3 border-t border-surface-container-low"
                to="/negara-tujuan"
              >
                <span>{t('home.negaraTujuan.viewDetails')}</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>
          ))}

          {/* Global Destination Summary Card */}
          <div className="bg-primary-container text-on-primary rounded-xl p-5 shadow-md flex flex-col justify-between">
            <div>
              <span className="material-symbols-outlined text-tertiary-fixed text-[32px] mb-3">travel_explore</span>
              <h3 className="font-headline-sm text-headline-sm text-on-primary mb-2">
                {t('home.negaraTujuan.promoTitle')}
              </h3>
              <p className="font-body-sm text-body-sm text-on-primary-container leading-relaxed mb-4">
                {t('home.negaraTujuan.promoDesc')}
              </p>
            </div>
            <Link
              className="text-body-sm font-label-button text-tertiary-fixed hover:text-on-primary flex items-center justify-between pt-3"
              to="/kontak"
            >
              <span>{t('home.negaraTujuan.promoBtn')}</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
