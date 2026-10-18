import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Berita() {
  const { t } = useTranslation()

  const articles = [
    {
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPFFC30osMWhAVvazEhxk0g7cSTTjp_dpdP2cE0MRFDfQHmA5z-13iPfhJ-n9gNyz9q7EP4GyCw0z4uMYG9KJIUSsPWB7oSFMjDV76IMjtFl3NVcftF5hPP2uW3_9GUp3pUZJU8mZJF5butJ19N5Z6xonS6E4ez3Xzwq16S2co_FlauZKZyp2qIWXyJi4eLvJ8WulUaIWYhyL3hmEiv1ZhN926seM6eSSwWYhc9GfRobhyipuRNH31Lg',
      tagKey: 'home.berita.a1Tag',
      dateKey: 'home.berita.a1Date',
      titleKey: 'home.berita.a1Title',
      descKey: 'home.berita.a1Desc',
    },
    {
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBgAn02no7tSqxoEryWkSUaDSxCt1-TGPc9PO3KZAY76Lv7P0wv5JBZJP3sN-q2YV81Fl7ZmBvP0htw6V454OVmD9aBqNVAA22aIyYtYlC9d_Lx_mwvPiaYB3PYRGsAyCq46xsTooQu3ArKpSFayyvkegzxD9RoTs0KUjS9FHA6XLhJK7GrsZBWIKB59GCuTps1kJC4JAWbmzQ68mf1wI9sCc7WM6Nl986OH9dTO7weCLvqt7sKGYnGEg',
      tagKey: 'home.berita.a2Tag',
      dateKey: 'home.berita.a2Date',
      titleKey: 'home.berita.a2Title',
      descKey: 'home.berita.a2Desc',
    },
    {
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJiB6RinDjsO1MHcnWGk4MaxLoekr9nwoYOZsPLYw0S8qxsama0wlrBfoYgWjrv7k8Vn-y7XtrCAVC3OeC-j5Ml8j70415lhA4jYK_Hs8IlnSzMuOG67oxiIDVCMkYgWVrCNkfe7FIMrVFL23lWCVQRxVLyuEOlX_8oT3dkbvQ0h78qFXLcEA7eRcwuhXT9cr8VADUi17nKYfoqwvGz8RAc8rRtfR8Ot9rzmQ_7gFozXjaDN3GLei6mQ',
      tagKey: 'home.berita.a3Tag',
      dateKey: 'home.berita.a3Date',
      titleKey: 'home.berita.a3Title',
      descKey: 'home.berita.a3Desc',
    },
  ]

  return (
    <section className="py-20 bg-surface" id="berita">
      <div className="max-w-7xl mx-auto px-margin">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-label-eyebrow font-label-eyebrow text-on-tertiary-container uppercase tracking-widest block mb-2">
              {t('home.berita.badge')}
            </span>
            <h2 className="font-headline-xl text-headline-xl text-primary font-bold tracking-tight">
              {t('home.berita.title')}
            </h2>
            <p className="font-body-md text-body-md text-secondary mt-2">
              {t('home.berita.subtitle')}
            </p>
          </div>
          <Link
            className="inline-flex items-center gap-2 font-label-button text-label-button text-primary hover:text-on-tertiary-container transition-colors group"
            to="/lowongan-kerja"
          >
            <span>{t('home.berita.viewAll')}</span>
            <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((art, i) => (
            <article
              key={i}
              className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 bg-surface-container">
                  <img
                    className="w-full h-full object-cover"
                    src={art.img}
                    alt={t(art.titleKey)}
                  />
                  <span className="absolute top-3 left-3 bg-surface-container-lowest text-primary text-[11px] font-bold px-2 py-0.5 rounded shadow-sm">
                    {t(art.tagKey)}
                  </span>
                </div>
                <div className="p-6">
                  <div className="text-label-caption font-label-caption text-secondary mb-2">
                    {t(art.dateKey)}
                  </div>
                  <h3 className="font-headline-sm text-body-md font-bold text-primary mb-3 hover:text-on-tertiary-container transition-colors">
                    {t(art.titleKey)}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    {t(art.descKey)}
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-0">
                <Link
                  className="inline-flex items-center gap-1 text-label-button font-label-button text-primary hover:text-on-tertiary-container"
                  to="/lowongan-kerja"
                >
                  <span>{t('home.berita.readMore')}</span>
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
