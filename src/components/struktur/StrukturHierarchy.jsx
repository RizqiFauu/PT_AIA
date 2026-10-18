import { useTranslation } from 'react-i18next'

export default function StrukturHierarchy() {
  const { t } = useTranslation()

  return (
    <section className="w-full bg-surface py-space-xl">
      <div className="max-w-7xl mx-auto px-margin">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-12">
          <div>
            <span className="font-label-eyebrow text-label-eyebrow text-on-tertiary-container uppercase tracking-wider block mb-1">
              {t('struktur.hierarchy.eyebrow')}
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary font-bold tracking-tight">
              {t('struktur.hierarchy.title')}
            </h2>
          </div>
          {/* Diagram View Controls & Legend */}
          <div className="flex items-center gap-space-sm bg-surface-container-lowest p-1.5 rounded-xl shadow-sm self-start">
            <div className="flex items-center gap-2 px-3 py-1 bg-surface-container-low rounded-lg text-primary font-label-caption text-label-caption font-semibold">
              <span className="w-2.5 h-2.5 rounded-full bg-primary-container"></span>
              <span>{t('struktur.hierarchy.legendBoard')}</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 rounded-lg text-on-surface-variant font-label-caption text-label-caption">
              <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
              <span>{t('struktur.hierarchy.legendManager')}</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 rounded-lg text-on-surface-variant font-label-caption text-label-caption">
              <span className="w-2.5 h-2.5 rounded-full bg-on-tertiary-container"></span>
              <span>{t('struktur.hierarchy.legendOperational')}</span>
            </div>
          </div>
        </div>
        {/* Chart Hierarchy Container */}
        <div className="w-full bg-surface-container-lowest rounded-2xl p-6 lg:p-12 shadow-md relative overflow-x-auto">
          <div className="min-w-[980px] flex flex-col items-center">
            {/* LEVEL 1: Board of Commissioners & Shareholders */}
            <div className="relative flex flex-col items-center w-full max-w-md group">
              <div className="w-full bg-primary text-on-primary rounded-xl p-space-md shadow-lg text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative">
                {/* Metallic Gold Accent bar */}
                <div className="absolute top-0 inset-x-0 h-1 bg-tertiary-fixed-dim rounded-t-xl"></div>
                <div className="inline-flex items-center gap-1.5 bg-surface-container-lowest/10 px-2.5 py-0.5 rounded-full mb-2">
                  <span className="material-symbols-outlined text-[14px] text-tertiary-fixed">gavel</span>
                  <span className="font-label-eyebrow text-label-eyebrow text-tertiary-fixed tracking-wider uppercase">
                    {t('struktur.hierarchy.tier1Badge')}
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-primary font-bold">
                  {t('struktur.hierarchy.tier1Title')}
                </h3>
                <p className="font-label-caption text-label-caption text-on-primary-container mt-1">
                  {t('struktur.hierarchy.tier1Sub')}
                </p>
                <div className="mt-3 pt-3 bg-surface-container-lowest/5 rounded-lg text-left px-3 py-2 flex items-center justify-between">
                  <span className="text-on-primary-container font-label-caption text-label-caption">
                    {t('struktur.hierarchy.tier1Function')}
                  </span>
                  <span className="material-symbols-outlined text-tertiary-fixed text-[18px]">verified</span>
                </div>
              </div>
              {/* Vertical Connector from Level 1 to Level 2 */}
              <div className="w-0.5 h-10 bg-primary-fixed-dim my-0"></div>
            </div>
            {/* LEVEL 2: Managing Director / Direktur Utama */}
            <div className="relative flex flex-col items-center w-full max-w-md group">
              <div className="w-full bg-primary-container text-on-primary rounded-xl p-space-md shadow-lg text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative">
                <div className="absolute top-0 inset-x-0 h-1 bg-secondary-fixed rounded-t-xl"></div>
                <div className="inline-flex items-center gap-1.5 bg-surface-container-lowest/10 px-2.5 py-0.5 rounded-full mb-2">
                  <span className="material-symbols-outlined text-[14px] text-secondary-fixed">badge</span>
                  <span className="font-label-eyebrow text-label-eyebrow text-secondary-fixed tracking-wider uppercase">
                    {t('struktur.hierarchy.tier2Badge')}
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-primary font-bold">
                  {t('struktur.hierarchy.tier2Title')}
                </h3>
                <p className="font-label-caption text-label-caption text-on-primary-container mt-1">
                  {t('struktur.hierarchy.tier2Sub')}
                </p>
                <div className="mt-3 pt-3 bg-surface-container-lowest/5 rounded-lg text-left px-3 py-2 flex items-center justify-between">
                  <span className="text-on-primary-container font-label-caption text-label-caption">
                    {t('struktur.hierarchy.tier2Responsibility')}
                  </span>
                  <span className="material-symbols-outlined text-secondary-fixed text-[18px]">workspace_premium</span>
                </div>
              </div>
              {/* Stem down to horizontal bus bar for Level 3 */}
              <div className="w-0.5 h-10 bg-primary-fixed-dim"></div>
            </div>
            {/* HORIZONTAL CONNECTOR BUS BAR (Level 3 Manager Tier) */}
            <div className="w-full max-w-4xl relative flex flex-col items-center">
              {/* Horizontal cross bar */}
              <div className="w-[82%] h-0.5 bg-primary-fixed-dim"></div>
              {/* 3 Drop lines to Level 3 Cards */}
              <div className="w-full grid grid-cols-3 gap-6 pt-0">
                {/* Manager 1: Operasional */}
                <div className="flex flex-col items-center">
                  <div className="w-0.5 h-8 bg-primary-fixed-dim"></div>
                  <div className="w-full bg-surface-container-low rounded-xl p-space-md shadow-sm transition-all duration-200 hover:shadow-md hover:bg-surface-container group">
                    <div className="w-8 h-8 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary mb-2 shadow-xs">
                      <span className="material-symbols-outlined text-[20px]">settings_suggest</span>
                    </div>
                    <span className="font-label-eyebrow text-label-eyebrow text-on-surface-variant uppercase">
                      {t('struktur.hierarchy.managerBadge')}
                    </span>
                    <h4 className="font-headline-sm text-headline-sm text-primary font-semibold mt-0.5">
                      {t('struktur.hierarchy.m1Title')}
                    </h4>
                    <p className="font-label-caption text-label-caption text-secondary">
                      {t('struktur.hierarchy.m1Sub')}
                    </p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 text-xs leading-relaxed">
                      {t('struktur.hierarchy.m1Desc')}
                    </p>
                  </div>
                </div>
                {/* Manager 2: Kepatuhan & Hukum */}
                <div className="flex flex-col items-center">
                  <div className="w-0.5 h-8 bg-primary-fixed-dim"></div>
                  <div className="w-full bg-surface-container-low rounded-xl p-space-md shadow-sm transition-all duration-200 hover:shadow-md hover:bg-surface-container group">
                    <div className="w-8 h-8 rounded-lg bg-surface-container-lowest flex items-center justify-center text-on-tertiary-container mb-2 shadow-xs">
                      <span className="material-symbols-outlined text-[20px]">policy</span>
                    </div>
                    <span className="font-label-eyebrow text-label-eyebrow text-on-surface-variant uppercase">
                      {t('struktur.hierarchy.managerBadge')}
                    </span>
                    <h4 className="font-headline-sm text-headline-sm text-primary font-semibold mt-0.5">
                      {t('struktur.hierarchy.m2Title')}
                    </h4>
                    <p className="font-label-caption text-label-caption text-secondary">
                      {t('struktur.hierarchy.m2Sub')}
                    </p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 text-xs leading-relaxed">
                      {t('struktur.hierarchy.m2Desc')}
                    </p>
                  </div>
                </div>
                {/* Manager 3: Keuangan & Akuntansi */}
                <div className="flex flex-col items-center">
                  <div className="w-0.5 h-8 bg-primary-fixed-dim"></div>
                  <div className="w-full bg-surface-container-low rounded-xl p-space-md shadow-sm transition-all duration-200 hover:shadow-md hover:bg-surface-container group">
                    <div className="w-8 h-8 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary mb-2 shadow-xs">
                      <span className="material-symbols-outlined text-[20px]">account_balance_wallet</span>
                    </div>
                    <span className="font-label-eyebrow text-label-eyebrow text-on-surface-variant uppercase">
                      {t('struktur.hierarchy.managerBadge')}
                    </span>
                    <h4 className="font-headline-sm text-headline-sm text-primary font-semibold mt-0.5">
                      {t('struktur.hierarchy.m3Title')}
                    </h4>
                    <p className="font-label-caption text-label-caption text-secondary">
                      {t('struktur.hierarchy.m3Sub')}
                    </p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 text-xs leading-relaxed">
                      {t('struktur.hierarchy.m3Desc')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Vertical Connector Line to Operations Divisions (Level 4) */}
            <div className="w-full max-w-6xl flex flex-col items-center my-6">
              <div className="w-0.5 h-8 bg-primary-fixed-dim"></div>
              {/* Sub-Header for Divisional Units */}
              <div className="bg-surface-container-high px-4 py-1.5 rounded-full text-center">
                <span className="font-label-eyebrow text-label-eyebrow text-primary uppercase tracking-wider font-bold">
                  {t('struktur.hierarchy.tier4Badge')}
                </span>
              </div>
              <div className="w-0.5 h-6 bg-primary-fixed-dim"></div>
              {/* Large Horizontal Distribution Bus for 5 Operational Divisions */}
              <div className="w-[92%] h-0.5 bg-primary-fixed-dim"></div>
            </div>
            {/* LEVEL 4: 5 Distinct Operational Divisions */}
            <div className="w-full max-w-6xl grid grid-cols-5 gap-4">
              {/* Div 1: Rekrutmen & Seleksi */}
              <div className="flex flex-col items-center">
                <div className="w-0.5 h-6 bg-primary-fixed-dim"></div>
                <div className="w-full bg-surface-container-lowest rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
                  <div className="w-7 h-7 rounded-md bg-surface-container flex items-center justify-center text-primary mb-2">
                    <span className="material-symbols-outlined text-[16px]">person_search</span>
                  </div>
                  <h5 className="font-headline-sm text-headline-sm text-primary font-bold text-sm leading-snug">
                    {t('struktur.hierarchy.d1Title')}
                  </h5>
                  <p className="font-label-caption text-label-caption text-on-tertiary-container mt-0.5">
                    {t('struktur.hierarchy.d1Sub')}
                  </p>
                  <div className="mt-3 pt-2 text-xs text-on-surface-variant flex-1">
                    {t('struktur.hierarchy.d1Desc')}
                  </div>
                  <div className="mt-3 bg-surface-container-low px-2 py-1 rounded text-center font-label-caption text-label-caption text-primary">
                    {t('struktur.hierarchy.d1Tag')}
                  </div>
                </div>
              </div>
              {/* Div 2: Pelatihan & Pembekalan */}
              <div className="flex flex-col items-center">
                <div className="w-0.5 h-6 bg-primary-fixed-dim"></div>
                <div className="w-full bg-surface-container-lowest rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
                  <div className="w-7 h-7 rounded-md bg-surface-container flex items-center justify-center text-primary mb-2">
                    <span className="material-symbols-outlined text-[16px]">school</span>
                  </div>
                  <h5 className="font-headline-sm text-headline-sm text-primary font-bold text-sm leading-snug">
                    {t('struktur.hierarchy.d2Title')}
                  </h5>
                  <p className="font-label-caption text-label-caption text-on-tertiary-container mt-0.5">
                    {t('struktur.hierarchy.d2Sub')}
                  </p>
                  <div className="mt-3 pt-2 text-xs text-on-surface-variant flex-1">
                    {t('struktur.hierarchy.d2Desc')}
                  </div>
                  <div className="mt-3 bg-surface-container-low px-2 py-1 rounded text-center font-label-caption text-label-caption text-primary">
                    {t('struktur.hierarchy.d2Tag')}
                  </div>
                </div>
              </div>
              {/* Div 3: Penempatan & Dokumen */}
              <div className="flex flex-col items-center">
                <div className="w-0.5 h-6 bg-primary-fixed-dim"></div>
                <div className="w-full bg-surface-container-lowest rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
                  <div className="w-7 h-7 rounded-md bg-surface-container flex items-center justify-center text-primary mb-2">
                    <span className="material-symbols-outlined text-[16px]">flight_takeoff</span>
                  </div>
                  <h5 className="font-headline-sm text-headline-sm text-primary font-bold text-sm leading-snug">
                    {t('struktur.hierarchy.d3Title')}
                  </h5>
                  <p className="font-label-caption text-label-caption text-on-tertiary-container mt-0.5">
                    {t('struktur.hierarchy.d3Sub')}
                  </p>
                  <div className="mt-3 pt-2 text-xs text-on-surface-variant flex-1">
                    {t('struktur.hierarchy.d3Desc')}
                  </div>
                  <div className="mt-3 bg-surface-container-low px-2 py-1 rounded text-center font-label-caption text-label-caption text-primary">
                    {t('struktur.hierarchy.d3Tag')}
                  </div>
                </div>
              </div>
              {/* Div 4: Hubungan Internasional & Pemberi Kerja */}
              <div className="flex flex-col items-center">
                <div className="w-0.5 h-6 bg-primary-fixed-dim"></div>
                <div className="w-full bg-surface-container-lowest rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
                  <div className="w-7 h-7 rounded-md bg-surface-container flex items-center justify-center text-primary mb-2">
                    <span className="material-symbols-outlined text-[16px]">public</span>
                  </div>
                  <h5 className="font-headline-sm text-headline-sm text-primary font-bold text-sm leading-snug">
                    {t('struktur.hierarchy.d4Title')}
                  </h5>
                  <p className="font-label-caption text-label-caption text-on-tertiary-container mt-0.5">
                    {t('struktur.hierarchy.d4Sub')}
                  </p>
                  <div className="mt-3 pt-2 text-xs text-on-surface-variant flex-1">
                    {t('struktur.hierarchy.d4Desc')}
                  </div>
                  <div className="mt-3 bg-surface-container-low px-2 py-1 rounded text-center font-label-caption text-label-caption text-primary">
                    {t('struktur.hierarchy.d4Tag')}
                  </div>
                </div>
              </div>
              {/* Div 5: Layanan Calon Pekerja & Perlindungan */}
              <div className="flex flex-col items-center">
                <div className="w-0.5 h-6 bg-primary-fixed-dim"></div>
                <div className="w-full bg-surface-container-lowest rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
                  <div className="w-7 h-7 rounded-md bg-surface-container flex items-center justify-center text-primary mb-2">
                    <span className="material-symbols-outlined text-[16px]">health_and_safety</span>
                  </div>
                  <h5 className="font-headline-sm text-headline-sm text-primary font-bold text-sm leading-snug">
                    {t('struktur.hierarchy.d5Title')}
                  </h5>
                  <p className="font-label-caption text-label-caption text-on-tertiary-container mt-0.5">
                    {t('struktur.hierarchy.d5Sub')}
                  </p>
                  <div className="mt-3 pt-2 text-xs text-on-surface-variant flex-1">
                    {t('struktur.hierarchy.d5Desc')}
                  </div>
                  <div className="mt-3 bg-surface-container-low px-2 py-1 rounded text-center font-label-caption text-label-caption text-primary">
                    {t('struktur.hierarchy.d5Tag')}
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
