import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function LayananDualGateway() {
  const { t } = useTranslation();

  return (
    <section className="w-full py-16 bg-surface">
      <div className="max-w-[1280px] mx-auto px-margin">
        <div className="flex flex-col mb-10">
          <span className="font-label-eyebrow text-label-eyebrow text-on-tertiary-container uppercase tracking-widest font-bold mb-1">
            {t('layanan.dualGateway.eyebrow')}
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary font-bold">
            {t('layanan.dualGateway.title')}
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            {t('layanan.dualGateway.subtitle')}
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Gateway A: Calon Tenaga Kerja */}
          <div className="group relative bg-surface-container-lowest rounded-xl p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-secondary"></div>
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded bg-secondary-container text-on-secondary-fixed-variant font-label-caption text-label-caption uppercase tracking-wider font-semibold">
                  {t('layanan.dualGateway.candidateBadge')}
                </span>
                <span className="material-symbols-outlined text-secondary text-3xl">flight_takeoff</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary font-bold group-hover:text-secondary transition-colors mb-3">
                {t('layanan.dualGateway.candidateTitle')}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                {t('layanan.dualGateway.candidateDesc')}
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8 bg-surface-container-low p-4 rounded-xl">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
                  <span className="font-label-caption text-label-caption text-on-surface font-medium">
                    {t('layanan.dualGateway.candidateF1')}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
                  <span className="font-label-caption text-label-caption text-on-surface font-medium">
                    {t('layanan.dualGateway.candidateF2')}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
                  <span className="font-label-caption text-label-caption text-on-surface font-medium">
                    {t('layanan.dualGateway.candidateF3')}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
                  <span className="font-label-caption text-label-caption text-on-surface font-medium">
                    {t('layanan.dualGateway.candidateF4')}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4 border-t border-surface-container">
              <Link className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-label-button text-label-button bg-primary text-on-primary hover:bg-primary-container transition-all" to="/lowongan-kerja">
                <span>{t('layanan.dualGateway.candidateBtnJobs')}</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
              <a className="inline-flex items-center justify-center px-5 py-3 rounded-lg font-label-button text-label-button bg-surface-container hover:bg-surface-container-high text-on-surface transition-all" href="#alur-layanan">
                {t('layanan.dualGateway.candidateBtnFlow')}
              </a>
            </div>
          </div>

          {/* Gateway B: International Employers */}
          <div className="group relative bg-surface-container-lowest rounded-xl p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-on-tertiary-container"></div>
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded bg-tertiary-fixed text-on-tertiary-fixed font-label-caption text-label-caption uppercase tracking-wider font-semibold">
                  {t('layanan.dualGateway.employerBadge')}
                </span>
                <span className="material-symbols-outlined text-on-tertiary-container text-3xl">public</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary font-bold group-hover:text-on-tertiary-container transition-colors mb-3">
                {t('layanan.dualGateway.employerTitle')}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                {t('layanan.dualGateway.employerDesc')}
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8 bg-surface-container-low p-4 rounded-xl">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-on-tertiary-container text-[18px]">verified</span>
                  <span className="font-label-caption text-label-caption text-on-surface font-medium">
                    {t('layanan.dualGateway.employerF1')}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-on-tertiary-container text-[18px]">verified</span>
                  <span className="font-label-caption text-label-caption text-on-surface font-medium">
                    {t('layanan.dualGateway.employerF2')}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-on-tertiary-container text-[18px]">verified</span>
                  <span className="font-label-caption text-label-caption text-on-surface font-medium">
                    {t('layanan.dualGateway.employerF3')}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-on-tertiary-container text-[18px]">verified</span>
                  <span className="font-label-caption text-label-caption text-on-surface font-medium">
                    {t('layanan.dualGateway.employerF4')}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4 border-t border-surface-container">
              <Link className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-label-button text-label-button bg-primary-container text-on-primary hover:bg-primary transition-all" to="/layanan-pemberi-kerja">
                <span>{t('layanan.dualGateway.employerBtnInquiry')}</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
              <Link className="inline-flex items-center justify-center px-5 py-3 rounded-lg font-label-button text-label-button bg-surface-container hover:bg-surface-container-high text-on-surface transition-all" to="/kemitraan-internasional">
                {t('layanan.dualGateway.employerBtnPortfolio')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
