import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="w-full bg-primary-container text-on-surface-variant pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-margin">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter mb-12">
          {/* Col 1 */}
          <div className="flex flex-col space-y-space-md">
            <div className="flex items-center gap-space-sm">
              <img
                alt="PT AMAL ICHWAN ARINDO Brand Lockup"
                className="h-8 w-auto object-contain"
                src="https://lh3.googleusercontent.com/aida/AEtjO1XeAdygDWIeQHdG6pJI31KtKxmRAiJ2sycy3l023Ua3bXqb1grGBu-QFQDRnArkkHTqFpPpCfXmcKpUvBpQ6b5eW4leqFIRKh2eDNJ_Sx4yjfvf6N6Zx2U3c6V_myikp3qpFEE3ak30aEBUIL2we2ulZ_GsjYgpa0ucXKw7FQUsWqN_I_0kOyZrMbz7g9ZYZ28ykHdR1f_vHM5hgSYTUQe8LJ7v1uB6xfIzKWK1p47CjbVTsJ6wwwA9_s8"
              />
              <span className="font-headline-sm text-headline-sm text-on-primary font-bold tracking-tight">
                {t('navbar.brandName')}
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-on-primary-container leading-relaxed">
              {t('footer.brandDesc')}
            </p>
            <div className="bg-surface-container-lowest/5 rounded-xl p-space-md">
              <div className="flex items-center gap-space-xs mb-1 text-tertiary-fixed-dim">
                <span className="material-symbols-outlined text-[16px]">verified</span>
                <span className="font-label-eyebrow text-label-eyebrow uppercase tracking-wider">
                  {t('footer.regulatoryTitle')}
                </span>
              </div>
              <p className="font-label-caption text-label-caption text-on-primary-container">
                {t('footer.regulatoryDesc')}
              </p>
            </div>
          </div>

          {/* Col 2 */}
          <div className="flex flex-col space-y-space-sm">
            <h3 className="font-headline-sm text-headline-sm text-on-primary mb-2">
              {t('footer.aboutTitle')}
            </h3>
            <div className="h-0.5 w-10 bg-on-tertiary-container rounded-full mb-3"></div>
            <ul className="space-y-space-sm font-body-sm text-body-sm">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[14px] text-tertiary-fixed-dim">chevron_right</span>
                <Link className="text-on-primary-container hover:text-on-primary transition-colors" to="/profil-perusahaan">
                  {t('navbar.companyProfile')}
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[14px] text-tertiary-fixed-dim">chevron_right</span>
                <Link className="text-on-primary-container hover:text-on-primary transition-colors" to="/profil-perusahaan">
                  {t('navbar.companyHistory')}
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[14px] text-tertiary-fixed-dim">chevron_right</span>
                <Link className="text-on-primary-container hover:text-on-primary transition-colors" to="/profil-perusahaan#visi-misi">
                  {t('navbar.visionMission')}
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[14px] text-tertiary-fixed-dim">chevron_right</span>
                <Link className="text-on-primary-container hover:text-on-primary transition-colors" to="/profil-perusahaan#visi-misi">
                  {t('navbar.companyValues')}
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[14px] text-tertiary-fixed-dim">chevron_right</span>
                <Link className="text-on-primary-container hover:text-on-primary transition-colors" to="/struktur-organisasi">
                  {t('navbar.orgStructure')}
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[14px] text-tertiary-fixed-dim">chevron_right</span>
                <Link className="text-on-primary-container hover:text-on-primary transition-colors" to="/legalitas-perusahaan">
                  {t('navbar.legality')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="flex flex-col space-y-space-sm">
            <h3 className="font-headline-sm text-headline-sm text-on-primary mb-2">
              {t('footer.servicesTitle')}
            </h3>
            <div className="h-0.5 w-10 bg-on-tertiary-container rounded-full mb-3"></div>
            <ul className="space-y-space-sm font-body-sm text-body-sm">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[14px] text-tertiary-fixed-dim">chevron_right</span>
                <Link className="text-on-primary-container hover:text-on-primary transition-colors" to="/layanan">
                  {t('navbar.recruitment')}
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[14px] text-tertiary-fixed-dim">chevron_right</span>
                <Link className="text-on-primary-container hover:text-on-primary transition-colors" to="/layanan">
                  {t('navbar.placement')}
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[14px] text-tertiary-fixed-dim">chevron_right</span>
                <Link className="text-on-primary-container hover:text-on-primary transition-colors" to="/negara-tujuan">
                  {t('navbar.destinations')}
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[14px] text-tertiary-fixed-dim">chevron_right</span>
                <Link className="text-on-primary-container hover:text-on-primary transition-colors" to="/lowongan-kerja">
                  {t('navbar.jobOpenings')}
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[14px] text-tertiary-fixed-dim">chevron_right</span>
                <Link className="text-on-primary-container hover:text-on-primary transition-colors" to="/layanan">
                  {t('navbar.intlPartnership')}
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[14px] text-tertiary-fixed-dim">chevron_right</span>
                <Link className="text-on-primary-container hover:text-on-primary transition-colors" to="/kontak">
                  {t('navbar.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4 */}
          <div className="flex flex-col space-y-space-sm">
            <h3 className="font-headline-sm text-headline-sm text-on-primary mb-2">
              {t('footer.contactTitle')}
            </h3>
            <div className="h-0.5 w-10 bg-on-tertiary-container rounded-full mb-3"></div>
            <ul className="space-y-space-md font-body-sm text-body-sm">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[18px] text-tertiary-fixed-dim shrink-0 mt-0.5">location_on</span>
                <span className="text-on-primary-container leading-relaxed">
                  {t('footer.officeAddress')}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[18px] text-tertiary-fixed-dim shrink-0">call</span>
                <a className="text-on-primary-container hover:text-on-primary transition-colors" href="tel:+62215558900">
                  {t('footer.phone')}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[18px] text-tertiary-fixed-dim shrink-0">mail</span>
                <a className="text-on-primary-container hover:text-on-primary transition-colors" href="mailto:info@amalichwanarindo.co.id">
                  {t('footer.email')}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[18px] text-tertiary-fixed-dim shrink-0">chat</span>
                <a className="text-on-primary-container hover:text-on-primary transition-colors" href="https://wa.me/6281289001234" target="_blank" rel="noopener noreferrer">
                  {t('footer.whatsappHelpdesk')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 mt-4 border-t border-surface-container-lowest/10 flex flex-col sm:flex-row items-center justify-between gap-space-md text-on-primary-container font-label-caption text-label-caption">
          <div>{t('footer.copyright')}</div>
          <div className="flex items-center gap-space-lg">
            <a className="hover:text-on-primary transition-colors" href="#privacy">
              {t('footer.privacyPolicy')}
            </a>
            <a className="hover:text-on-primary transition-colors" href="#terms">
              {t('footer.termsConditions')}
            </a>
            <Link className="hover:text-on-primary transition-colors" to="/kontak">
              {t('footer.whistleblowing')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
