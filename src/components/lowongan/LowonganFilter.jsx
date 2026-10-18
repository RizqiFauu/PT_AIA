import React from 'react';

export default function LowonganFilter({
  searchQuery,
  setSearchQuery,
  selectedCountry,
  setSelectedCountry,
  selectedSector,
  setSelectedSector,
  zeroCostOnly,
  setZeroCostOnly,
  onApply
}) {
  return (
    <section className="w-full bg-surface-container-low px-margin py-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-6">
        {/* Search Controls Box */}
        <div className="bg-surface-container-lowest rounded-xl p-space-md sm:p-space-lg shadow-sm flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
            {/* Text Query */}
            <div className="md:col-span-5 relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">search</span>
              <input
                className="w-full h-11 pl-10 pr-4 bg-surface rounded-lg font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                id="jobSearchInput"
                placeholder="Cari posisi kerja, skill teknis, atau sertifikasi..."
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            {/* Country Dropdown */}
            <div className="md:col-span-3">
              <select
                className="w-full h-11 px-3 bg-surface rounded-lg font-body-sm text-body-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                id="countryFilter"
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
              >
                <option value="all">Semua Negara Tujuan</option>
                <option value="taiwan">Taiwan</option>
                <option value="jepang">Jepang</option>
                <option value="malaysia">Malaysia</option>
                <option value="timurtengah">Arab Saudi &amp; UEA</option>
                <option value="polandia">Polandia (Eropa)</option>
              </select>
            </div>
            {/* Sector Dropdown */}
            <div className="md:col-span-2">
              <select
                className="w-full h-11 px-3 bg-surface rounded-lg font-body-sm text-body-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                id="sectorFilter"
                value={selectedSector}
                onChange={(e) => setSelectedSector(e.target.value)}
              >
                <option value="all">Semua Sektor</option>
                <option value="manufaktur">Manufaktur &amp; Presisi</option>
                <option value="caregiver">Caregiver / Medis</option>
                <option value="hospitality">Perhotelan &amp; F&amp;B</option>
                <option value="logistik">Logistik &amp; Distribusi</option>
                <option value="konstruksi">Konstruksi Sipil</option>
              </select>
            </div>
            {/* Action Button */}
            <div className="md:col-span-2">
              <button
                className="w-full h-11 bg-primary text-on-primary font-label-button text-label-button rounded-lg hover:bg-primary-container transition-colors flex items-center justify-center gap-1.5"
                id="applyFiltersBtn"
                onClick={onApply}
                type="button"
              >
                <span className="material-symbols-outlined text-[18px]">tune</span>
                <span>Terapkan</span>
              </button>
            </div>
          </div>
          {/* Filter bar bottom: Zero Cost Toggle & Quick Tags */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-3">
            <div className="flex items-center gap-3">
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  className="sr-only peer"
                  id="zeroCostToggle"
                  type="checkbox"
                  checked={zeroCostOnly}
                  onChange={(e) => setZeroCostOnly(e.target.checked)}
                />
                <div className="w-11 h-6 bg-surface-container rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
              <span className="font-body-sm text-body-sm text-on-surface font-medium flex items-center gap-1">
                <span>Hanya Tampilkan Posisi Bebas Biaya Penempatan (Zero Cost Sesuai Kepdirjen)</span>
                <span className="material-symbols-outlined text-[16px] text-on-tertiary-container" title="Berdasarkan Peraturan BP2MI No. 09 Tahun 2020">info</span>
              </span>
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
              <span className="font-label-caption text-label-caption text-outline shrink-0">Populer:</span>
              <button
                className="px-2.5 py-1 rounded bg-surface text-on-surface font-label-caption text-label-caption hover:bg-surface-container transition-colors shrink-0"
                type="button"
                onClick={() => setSearchQuery('Tokutei Ginou')}
              >
                Tokutei Ginou
              </button>
              <button
                className="px-2.5 py-1 rounded bg-surface text-on-surface font-label-caption text-label-caption hover:bg-surface-container transition-colors shrink-0"
                type="button"
                onClick={() => setSearchQuery('CNC Taichung')}
              >
                CNC Taichung
              </button>
              <button
                className="px-2.5 py-1 rounded bg-surface text-on-surface font-label-caption text-label-caption hover:bg-surface-container transition-colors shrink-0"
                type="button"
                onClick={() => setSearchQuery('Perawat Lansia')}
              >
                Perawat Lansia
              </button>
              <button
                className="px-2.5 py-1 rounded bg-surface text-on-surface font-label-caption text-label-caption hover:bg-surface-container transition-colors shrink-0"
                type="button"
                onClick={() => setSearchQuery('Schengen Polandia')}
              >
                Schengen Polandia
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
