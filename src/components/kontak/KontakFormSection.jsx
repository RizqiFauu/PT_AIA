import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const COMPANY_WA = '6281289001234'
const COMPANY_EMAIL = 'info@amalichwanarindo.co.id'
const COMPANY_TEL = '+622183704567'

// Endpoint Formspree: https://formspree.io/f/xxxxxxx  (isi di file .env sebagai VITE_FORM_ENDPOINT)
const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT

const INITIAL_FORM = { name: '', email: '', phone: '', topic: '', message: '', consent: false, website: '' }

const TOPIC_OPTIONS = [
  { value: 'lowongan', key: 'kontak.form.topicOption1' },
  { value: 'pemberi-kerja', key: 'kontak.form.topicOption2' },
  { value: 'legalitas', key: 'kontak.form.topicOption3' },
  { value: 'blk-kerjasama', key: 'kontak.form.topicOption4' },
  { value: 'umum', key: 'kontak.form.topicOption5' }
]

const fieldClass = (hasError) =>
  `w-full bg-white border rounded-xl px-4 py-3 text-body-md text-on-surface placeholder:text-outline focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all ${hasError ? 'border-red-500' : 'border-outline-variant/60'
  }`

function InfoRow({ icon, title, children, href, external }) {
  const body = href ? (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="text-sm text-white font-medium hover:underline break-words"
    >
      {children}
    </a>
  ) : (
    <p className="text-sm text-white/80 leading-relaxed whitespace-pre-line">{children}</p>
  )
  return (
    <div className="flex items-start gap-4">
      <div className="w-11 h-11 rounded-xl bg-white/10 text-white flex items-center justify-center shrink-0">
        <span className="material-symbols-outlined text-[22px]" aria-hidden="true">{icon}</span>
      </div>
      <div className="min-w-0 pt-0.5">
        <h3 className="text-xs font-semibold text-white/60 mb-0.5">{title}</h3>
        {body}
      </div>
    </div>
  )
}

function Field({ id, label, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-on-surface mb-1.5">{label}</label>
      {children}
      {error && <p id={`${id}-error`} className="text-xs text-red-600 mt-1.5 font-medium">{error}</p>}
    </div>
  )
}

export default function KontakFormSection() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState(INITIAL_FORM)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [via, setVia] = useState('email') // email | whatsapp

  const topicLabel = () => {
    const item = TOPIC_OPTIONS.find((o) => o.value === formData.topic)
    return item ? t(item.key) : formData.topic
  }

  const buildMessage = () =>
    [
      'Halo PT Amal Ichwan Arindo, saya menghubungi melalui formulir kontak website.',
      '',
      `Nama: ${formData.name.trim()}`,
      `Email: ${formData.email.trim()}`,
      `Telepon/WhatsApp: ${formData.phone.trim()}`,
      `Topik: ${topicLabel()}`,
      '',
      'Pesan:',
      formData.message.trim()
    ].join('\n')

  const validate = () => {
    const errs = {}
    if (!formData.name.trim()) errs.name = t('kontak.form.validationName')
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim()))
      errs.email = t('kontak.form.validationEmail')
    if (!formData.phone.trim() || formData.phone.trim().length < 9) errs.phone = t('kontak.form.validationPhone')
    if (!formData.topic) errs.topic = t('kontak.form.validationTopic')
    if (!formData.message.trim() || formData.message.trim().length < 10) errs.message = t('kontak.form.validationMessage')
    if (!formData.consent) errs.consent = t('kontak.form.validationConsent')
    return errs
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
    if (status === 'error') setStatus('idle')
  }

  const openWhatsApp = () =>
    window.open(`https://wa.me/${COMPANY_WA}?text=${encodeURIComponent(buildMessage())}`, '_blank', 'noopener,noreferrer')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      const first = Object.keys(validationErrors)[0]
      document.getElementById(first === 'consent' ? 'contact-consent' : `contact-${first}`)?.focus()
      return
    }
    setErrors({})

    // Honeypot: bot mengisi field tersembunyi ini, manusia tidak
    if (formData.website) {
      setStatus('success')
      setFormData(INITIAL_FORM)
      return
    }

    // Belum ada endpoint (mis. masih development): cadangan lewat WhatsApp perusahaan
    if (!FORM_ENDPOINT) {
      console.warn('VITE_FORM_ENDPOINT belum diisi, memakai WhatsApp sebagai cadangan.')
      openWhatsApp()
      setVia('whatsapp')
      setStatus('success')
      setFormData(INITIAL_FORM)
      return
    }

    setStatus('loading')
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `Pesan website: ${topicLabel()} - ${formData.name.trim()}`,
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          topic: topicLabel(),
          message: formData.message.trim()
        })
      })
      if (!res.ok) throw new Error('Gagal mengirim')
      setVia('email')
      setStatus('success')
      setFormData(INITIAL_FORM)
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="py-14 lg:py-20 bg-primary/[0.03]" id="form-kontak">
      <div className="max-w-7xl mx-auto px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Kiri: info kontak (kartu gelap sebagai pusat perhatian) */}
          <aside className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="rounded-2xl bg-primary text-white p-space-lg lg:p-space-xl shadow-lg">
              <h2 className="font-headline-md text-headline-md font-bold tracking-tight mb-2">
                {t('kontak.info.cardTitle')}
              </h2>
              <p className="text-sm text-white/75 leading-relaxed mb-8">{t('kontak.info.cardSubtitle')}</p>

              <div className="space-y-6">
                <InfoRow icon="location_on" title={t('kontak.info.addressTitle')}>
                  {t('kontak.info.address')}
                </InfoRow>
                <InfoRow icon="call" title={t('kontak.info.phoneTitle')} href={`tel:${COMPANY_TEL}`}>
                  {t('kontak.info.phone')}
                </InfoRow>
                <InfoRow icon="chat" title={t('kontak.info.whatsappTitle')} href={`https://wa.me/${COMPANY_WA}`} external>
                  {t('kontak.info.whatsapp')}
                </InfoRow>
                <InfoRow icon="mail" title={t('kontak.info.emailTitle')} href={`mailto:${COMPANY_EMAIL}`}>
                  {t('kontak.info.email')}
                </InfoRow>
                <InfoRow icon="schedule" title={t('kontak.info.hoursTitle')}>
                  {t('kontak.info.hours')}
                </InfoRow>
              </div>

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(t('kontak.info.address'))}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white underline-offset-4 hover:underline"
              >
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">map</span>
                {t('kontak.info.mapsLink', 'Buka di Google Maps')}
              </a>

              <div className="mt-8 rounded-xl bg-white/10 p-4 flex items-center gap-3">
                <span className="material-symbols-outlined text-[28px] shrink-0" aria-hidden="true">verified</span>
                <div className="min-w-0">
                  <span className="text-xs text-white/70 font-semibold block">{t('kontak.info.sip3miTitle')}</span>
                  <span className="text-sm font-semibold block mt-0.5 break-words">{t('kontak.info.sip3mi')}</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Kanan: form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-white border border-outline-variant/40 p-space-lg lg:p-space-xl shadow-sm">
              {status === 'success' ? (
                <div role="status" className="py-10 text-center">
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                    <span className="material-symbols-outlined text-[36px]" aria-hidden="true">check_circle</span>
                  </div>
                  <h2 className="font-headline-md text-headline-md font-bold text-on-surface mb-2">
                    {t('kontak.form.successTitle')}
                  </h2>
                  <p className="text-on-surface-variant max-w-md mx-auto leading-relaxed mb-8">
                    {via === 'whatsapp' ? t('kontak.form.successWaDesc') : t('kontak.form.successDesc')}
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="inline-flex items-center gap-2 rounded-xl border border-primary px-6 py-3 font-semibold text-primary hover:bg-primary/5 transition-colors"
                  >
                    {t('kontak.form.sendAnother', 'Kirim pesan lain')}
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-xs font-semibold mb-3">
                      <span className="material-symbols-outlined text-[15px]" aria-hidden="true">send</span>
                      <span>{t('kontak.form.badge')}</span>
                    </div>
                    <h2 className="font-headline-md text-headline-md font-bold tracking-tight text-on-surface">
                      {t('kontak.form.title')}
                    </h2>
                    <p className="text-on-surface-variant mt-1 leading-relaxed">{t('kontak.form.subtitle')}</p>
                  </div>

                  {status === 'error' && (
                    <div role="alert" className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-900 flex items-start gap-3">
                      <span className="material-symbols-outlined text-red-600 text-[24px] shrink-0" aria-hidden="true">error</span>
                      <div>
                        <h4 className="font-semibold text-sm">{t('kontak.form.errorTitle')}</h4>
                        <p className="text-xs text-red-800 mt-1 leading-relaxed">{t('kontak.form.errorDesc')}</p>
                        <button
                          type="button"
                          onClick={openWhatsApp}
                          className="mt-2 text-xs font-semibold text-red-900 underline underline-offset-2"
                        >
                          {t('kontak.form.errorWaBtn', 'Kirim lewat WhatsApp saja')}
                        </button>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    {/* Honeypot anti-spam (disembunyikan) */}
                    <div className="hidden" aria-hidden="true">
                      <input type="text" name="website" tabIndex={-1} autoComplete="off" value={formData.website} onChange={handleChange} />
                    </div>

                    <Field id="contact-name" label={t('kontak.form.nameLabel')} error={errors.name}>
                      <input id="contact-name" name="name" type="text" autoComplete="name" value={formData.name}
                        onChange={handleChange} placeholder={t('kontak.form.namePlaceholder')}
                        aria-invalid={!!errors.name} aria-describedby={errors.name ? 'contact-name-error' : undefined}
                        className={fieldClass(errors.name)} />
                    </Field>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <Field id="contact-email" label={t('kontak.form.emailLabel')} error={errors.email}>
                        <input id="contact-email" name="email" type="email" autoComplete="email" value={formData.email}
                          onChange={handleChange} placeholder={t('kontak.form.emailPlaceholder')}
                          aria-invalid={!!errors.email} aria-describedby={errors.email ? 'contact-email-error' : undefined}
                          className={fieldClass(errors.email)} />
                      </Field>
                      <Field id="contact-phone" label={t('kontak.form.phoneLabel')} error={errors.phone}>
                        <input id="contact-phone" name="phone" type="tel" autoComplete="tel" value={formData.phone}
                          onChange={handleChange} placeholder={t('kontak.form.phonePlaceholder')}
                          aria-invalid={!!errors.phone} aria-describedby={errors.phone ? 'contact-phone-error' : undefined}
                          className={fieldClass(errors.phone)} />
                      </Field>
                    </div>

                    <Field id="contact-topic" label={t('kontak.form.topicLabel')} error={errors.topic}>
                      <select id="contact-topic" name="topic" value={formData.topic} onChange={handleChange}
                        aria-invalid={!!errors.topic} aria-describedby={errors.topic ? 'contact-topic-error' : undefined}
                        className={fieldClass(errors.topic)}>
                        <option value="">{t('kontak.form.topicPlaceholder')}</option>
                        {TOPIC_OPTIONS.map((o) => (
                          <option key={o.value} value={o.value}>{t(o.key)}</option>
                        ))}
                      </select>
                    </Field>

                    <Field id="contact-message" label={t('kontak.form.messageLabel')} error={errors.message}>
                      <textarea id="contact-message" name="message" rows={5} value={formData.message}
                        onChange={handleChange} placeholder={t('kontak.form.messagePlaceholder')}
                        aria-invalid={!!errors.message} aria-describedby={errors.message ? 'contact-message-error' : undefined}
                        className={`${fieldClass(errors.message)} resize-y min-h-[120px]`} />
                    </Field>

                    <div>
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input id="contact-consent" type="checkbox" name="consent" checked={formData.consent}
                          onChange={handleChange} aria-invalid={!!errors.consent}
                          aria-describedby={errors.consent ? 'contact-consent-error' : undefined}
                          className="mt-1 h-4 w-4 shrink-0 rounded border-outline-variant text-primary focus:ring-primary" />
                        <span className="text-sm text-on-surface-variant leading-snug">{t('kontak.form.privacyConsent')}</span>
                      </label>
                      {errors.consent && (
                        <p id="contact-consent-error" className="text-xs text-red-600 mt-1.5 font-medium">{errors.consent}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full sm:w-auto sm:min-w-[220px] inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold bg-primary text-on-primary hover:bg-primary-container focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-all shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === 'loading' ? (
                        <>
                          <span className="material-symbols-outlined animate-spin text-[18px]" aria-hidden="true">progress_activity</span>
                          <span>{t('kontak.form.sendingBtn')}</span>
                        </>
                      ) : (
                        <>
                          <span className="material-symbols-outlined text-[18px]" aria-hidden="true">send</span>
                          <span>{t('kontak.form.submitBtn')}</span>
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}