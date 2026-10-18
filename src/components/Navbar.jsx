import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import logoImg from '../assets/logoperusahaan.jfif'

const LOGO_SRC = logoImg

const NAV = [
  { key: 'home', to: '/', labelKey: 'navbar.home' },
  {
    key: 'about',
    labelKey: 'navbar.about',
    children: [
      { to: '/profil-perusahaan', labelKey: 'navbar.companyProfile' },
      { to: '/struktur-organisasi', labelKey: 'navbar.orgStructure' },
      { to: '/legalitas-perusahaan', labelKey: 'navbar.legality' },
    ],
  },
  { key: 'services', to: '/layanan', labelKey: 'navbar.services' },
  { key: 'countries', to: '/negara-tujuan', labelKey: 'navbar.destinations' },
  { key: 'jobs', to: '/lowongan-kerja', labelKey: 'navbar.jobOpenings' },
]

const CTA = { to: '/kontak', labelKey: 'navbar.contactUs' }

const linkBase =
  'font-label-button text-label-button transition-colors rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary'
const desktopLink = ({ isActive }) =>
  `${linkBase} px-space-sm py-2 ${
    isActive ? 'text-primary font-semibold' : 'text-on-surface-variant hover:text-on-surface'
  }`

/* ---------- Dropdown desktop (hover + klik + keyboard) ---------- */
function Dropdown({ item, t, pathname }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const isActive = item.children.some((c) => pathname.startsWith(c.to))

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    const onDown = (e) => ref.current && !ref.current.contains(e.target) && setOpen(false)
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={`${linkBase} px-space-sm py-2 flex items-center gap-1 ${
          isActive || open ? 'text-primary font-semibold' : 'text-on-surface-variant hover:text-on-surface'
        }`}
      >
        {t(item.labelKey)}
        <span
          className={`material-symbols-outlined text-[18px] transition-transform duration-200 ${
            open ? 'rotate-180' : ''
          }`}
          aria-hidden="true"
        >
          expand_more
        </span>
      </button>

      {/* pt-2 menjaga hover tidak "putus" saat kursor pindah ke menu */}
      <div
        className={`absolute left-0 top-full w-72 pt-2 transition duration-150 ${
          open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1 pointer-events-none'
        }`}
      >
        <div
          role="menu"
          className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-space-xs shadow-lg flex flex-col"
        >
          {item.children.map((c) => (
            <NavLink
              key={c.to}
              to={c.to}
              role="menuitem"
              tabIndex={open ? 0 : -1}
              className={({ isActive: a }) =>
                `${linkBase} px-space-md py-space-sm ${
                  a
                    ? 'bg-surface-container text-primary font-semibold'
                    : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
                }`
              }
            >
              {t(c.labelKey)}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ---------- Toggle bahasa ---------- */
function LangToggle({ currentLang, onChangeLang }) {
  return (
    <div
      role="group"
      aria-label="Language"
      className="inline-flex items-center bg-surface-container-low p-0.5 rounded-full"
    >
      {['id', 'en'].map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => onChangeLang(l)}
          aria-pressed={currentLang === l}
          className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-colors ${
            currentLang === l
              ? 'bg-surface-container-lowest text-primary shadow-sm'
              : 'text-on-surface-variant hover:text-on-surface'
          }`}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  )
}

/* ---------- Navbar ---------- */
export default function Navbar() {
  const { pathname } = useLocation()
  const { t, i18n } = useTranslation()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openGroup, setOpenGroup] = useState(null) // accordion di mobile

  const currentLang = i18n.language?.startsWith('en') ? 'en' : 'id'

  const handleLangChange = (newLang) => {
    i18n.changeLanguage(newLang)
  }

  // Tutup menu mobile tiap pindah halaman
  useEffect(() => {
    setMobileOpen(false)
    setOpenGroup(null)
  }, [pathname])

  // Kunci scroll body saat drawer terbuka
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-surface-container-lowest/90 backdrop-blur-md border-b border-outline-variant/40">
      <div className="h-16 lg:h-20 max-w-7xl mx-auto px-margin flex items-center justify-between gap-gutter">
        {/* Brand */}
        <Link
          to="/"
          className="flex items-center gap-space-sm shrink-0 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
        >
          <img src={LOGO_SRC} alt="PT Amal Ichwan Arindo" className="h-8 w-auto object-contain" />
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="font-headline-sm text-headline-sm text-primary tracking-tight">
              {t('navbar.brandName')}
            </span>
            <span className="text-xs text-on-surface-variant">
              {t('navbar.brandSub')}
            </span>
          </div>
        </Link>

        {/* Menu desktop */}
        <nav aria-label="Main" className="hidden xl:flex items-center gap-space-xs">
          {NAV.map((item) =>
            item.children ? (
              <Dropdown key={item.key} item={item} t={t} pathname={pathname} />
            ) : (
              <NavLink key={item.key} to={item.to} end={item.to === '/'} className={desktopLink}>
                {t(item.labelKey)}
              </NavLink>
            )
          )}
        </nav>

        {/* Aksi kanan */}
        <div className="flex items-center gap-space-sm shrink-0">
          <LangToggle currentLang={currentLang} onChangeLang={handleLangChange} />
          <Link
            to={CTA.to}
            className="hidden sm:inline-flex items-center justify-center px-space-md py-2.5 rounded-xl font-label-button text-label-button bg-primary text-on-primary hover:bg-primary-container transition-colors"
          >
            {t(CTA.labelKey)}
          </Link>
          <button
            type="button"
            className="xl:hidden w-10 h-10 grid place-items-center rounded-full text-on-surface hover:bg-surface-container transition-colors"
            aria-label="Menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span className="material-symbols-outlined" aria-hidden="true">
              {mobileOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {mobileOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="xl:hidden fixed inset-x-0 top-16 bottom-0 overflow-y-auto bg-surface-container-lowest px-margin py-space-md"
        >
          <ul className="flex flex-col">
            {NAV.map((item) => (
              <li key={item.key} className="border-b border-outline-variant/30">
                {item.children ? (
                  <>
                    <button
                      type="button"
                      aria-expanded={openGroup === item.key}
                      onClick={() => setOpenGroup(openGroup === item.key ? null : item.key)}
                      className="w-full flex items-center justify-between py-space-md font-label-button text-label-button text-on-surface"
                    >
                      {t(item.labelKey)}
                      <span
                        className={`material-symbols-outlined transition-transform ${
                          openGroup === item.key ? 'rotate-180' : ''
                        }`}
                        aria-hidden="true"
                      >
                        expand_more
                      </span>
                    </button>
                    {openGroup === item.key && (
                      <ul className="pb-space-sm pl-space-md flex flex-col">
                        {item.children.map((c) => (
                          <li key={c.to}>
                            <NavLink
                              to={c.to}
                              className={({ isActive }) =>
                                `block py-space-sm font-label-button text-label-button ${
                                  isActive ? 'text-primary font-semibold' : 'text-on-surface-variant'
                                }`
                              }
                            >
                              {t(c.labelKey)}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <NavLink
                    to={item.to}
                    end={item.to === '/'}
                    className={({ isActive }) =>
                      `block py-space-md font-label-button text-label-button ${
                        isActive ? 'text-primary font-semibold' : 'text-on-surface'
                      }`
                    }
                  >
                    {t(item.labelKey)}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>

          <Link
            to={CTA.to}
            className="mt-space-lg flex items-center justify-center px-space-md py-3 rounded-xl font-label-button text-label-button bg-primary text-on-primary"
          >
            {t(CTA.labelKey)}
          </Link>
        </nav>
      )}
    </header>
  )
}