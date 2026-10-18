import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function LegalitasPortalVerifikasi() {
  const { t } = useTranslation();
  const [docNumber, setDocNumber] = useState('');
  const [verifiedId, setVerifiedId] = useState('');
  const [isVerified, setIsVerified] = useState(false);

  const handleVerification = (e) => {
    e.preventDefault();
    if (docNumber.trim() !== '') {
      setVerifiedId(docNumber.trim().toUpperCase());
      setIsVerified(true);
    }
  };

  return (
    <section className="w-full bg-surface py-16 md:py-24" id="portal-verifikasi">
      <div className="max-w-7xl mx-auto px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          {/* Left Column: Verification Tool */}
          <div className="lg:col-span-6 bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[22px]">search_check</span>
              </div>
              <div>
                <h3 className="font-headline-md text-headline-md text-primary font-bold">
                  {t('legalitas.portalVerifikasi.card1Title')}
                </h3>
                <p className="font-label-caption text-label-caption text-on-surface-variant">
                  {t('legalitas.portalVerifikasi.card1Subtitle')}
                </p>
              </div>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 leading-relaxed">
              {t('legalitas.portalVerifikasi.card1Desc')}
            </p>
            <form className="space-y-4" id="verifyForm" onSubmit={handleVerification}>
              <div>
                <label className="block font-label-button text-label-button text-on-surface mb-1.5 text-xs" htmlFor="docNumber">
                  {t('legalitas.portalVerifikasi.inputLabel')}
                </label>
                <div className="relative">
                  <input
                    className="w-full h-11 px-3.5 rounded-lg bg-surface text-on-surface text-body-sm placeholder:text-outline focus:outline-none focus:bg-surface-container-low transition-colors"
                    id="docNumber"
                    name="docNumber"
                    placeholder={t('legalitas.portalVerifikasi.inputPlaceholder')}
                    required
                    type="text"
                    value={docNumber}
                    onChange={(e) => setDocNumber(e.target.value)}
                  />
                  <button className="absolute right-1.5 top-1.5 bottom-1.5 px-4 rounded-md bg-primary text-on-primary font-label-button text-label-button text-xs flex items-center gap-1.5 hover:bg-primary-container transition-colors" type="submit">
                    <span className="material-symbols-outlined text-[16px]">verified</span>
                    <span>{t('legalitas.portalVerifikasi.btnCheck')}</span>
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-2.5 rounded bg-surface-container-low text-on-surface">
                  <span className="font-semibold block text-primary">{t('legalitas.portalVerifikasi.typeLabel')}</span>
                  <span className="text-on-surface-variant">{t('legalitas.portalVerifikasi.typeVal')}</span>
                </div>
                <div className="p-2.5 rounded bg-surface-container-low text-on-surface">
                  <span className="font-semibold block text-primary">{t('legalitas.portalVerifikasi.accuracyLabel')}</span>
                  <span className="text-on-surface-variant">{t('legalitas.portalVerifikasi.accuracyVal')}</span>
                </div>
              </div>
              {/* Result simulation placeholder */}
              {isVerified && (
                <div className="mt-4 p-4 rounded-lg bg-surface-container-low" id="verifyResult">
                  <div className="flex items-center gap-2 text-primary font-semibold text-xs mb-1">
                    <span className="material-symbols-outlined text-[18px] text-on-tertiary-container">check_circle</span>
                    <span>{t('legalitas.portalVerifikasi.resultTitle')}</span>
                  </div>
                  <p className="font-label-caption text-label-caption text-on-surface-variant">
                    {t('legalitas.portalVerifikasi.resultPrefix')}{' '}
                    <strong className="text-on-surface" id="queriedId">{verifiedId}</strong>{' '}
                    {t('legalitas.portalVerifikasi.resultSuffix')}
                  </p>
                </div>
              )}
            </form>
            <div className="mt-6 pt-4 border-t border-surface-container flex items-center justify-between text-xs text-on-surface-variant">
              <span>{t('legalitas.portalVerifikasi.scanHelp')}</span>
              <a className="text-primary font-semibold hover:underline" href="tel:+62215558900">
                {t('legalitas.portalVerifikasi.scanLink')}
              </a>
            </div>
          </div>
          {/* Right Column: Whistleblowing & Anti-Fraud Channel */}
          <div className="lg:col-span-6 bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[22px]">campaign</span>
              </div>
              <div>
                <h3 className="font-headline-md text-headline-md text-primary font-bold">
                  {t('legalitas.portalVerifikasi.card2Title')}
                </h3>
                <p className="font-label-caption text-label-caption text-on-surface-variant">
                  {t('legalitas.portalVerifikasi.card2Subtitle')}
                </p>
              </div>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 leading-relaxed">
              {t('legalitas.portalVerifikasi.card2Desc')}
            </p>
            <div className="space-y-3">
              <a className="p-3.5 rounded-lg bg-surface-container flex items-center justify-between hover:bg-surface-container-high transition-colors group" href="mailto:kepatuhan@amalichwanarindo.co.id">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-surface-container-lowest flex items-center justify-center text-primary shadow-xs">
                    <span className="material-symbols-outlined text-[18px]">mail</span>
                  </div>
                  <div>
                    <span className="font-headline-sm text-headline-sm text-xs font-bold text-primary block">
                      {t('legalitas.portalVerifikasi.emailTitle')}
                    </span>
                    <span className="font-label-caption text-label-caption text-on-surface-variant">kepatuhan@amalichwanarindo.co.id</span>
                  </div>
                </div>
                <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors text-[18px]">chevron_right</span>
              </a>
              <a className="p-3.5 rounded-lg bg-surface-container flex items-center justify-between hover:bg-surface-container-high transition-colors group" href="#">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-surface-container-lowest flex items-center justify-center text-primary shadow-xs">
                    <span className="material-symbols-outlined text-[18px]">support_agent</span>
                  </div>
                  <div>
                    <span className="font-headline-sm text-headline-sm text-xs font-bold text-primary block">
                      {t('legalitas.portalVerifikasi.hotlineTitle')}
                    </span>
                    <span className="font-label-caption text-label-caption text-on-surface-variant">0800-1-ICHWAN (0800-1-424926)</span>
                  </div>
                </div>
                <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors text-[18px]">chevron_right</span>
              </a>
              <div className="p-3.5 rounded-lg bg-surface-container-low flex items-start gap-3 text-xs text-on-surface">
                <span className="material-symbols-outlined text-[18px] text-on-tertiary-container shrink-0 mt-0.5">lock</span>
                <p className="leading-relaxed text-on-surface-variant">
                  <strong>{t('legalitas.portalVerifikasi.confidentialityTitle')}</strong> {t('legalitas.portalVerifikasi.confidentialityDesc')}
                </p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-surface-container flex items-center justify-between text-xs text-on-surface-variant">
              <span>{t('legalitas.portalVerifikasi.managedBy')}</span>
              <span className="text-on-tertiary-container font-semibold">{t('legalitas.portalVerifikasi.sla')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
