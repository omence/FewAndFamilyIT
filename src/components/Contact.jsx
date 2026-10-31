import { useState } from 'react'
import { flushSync } from 'react-dom'
import styles from './Contact.module.css'

const EMAIL = 'hello@fewandfamilyit.com'
const PHONE_LABEL = '(559) 212-5444'

// An empty VITE_FORMSPREE_ID opens the visitor's email app instead of posting to Formspree.
const formspreeId = (import.meta.env.VITE_FORMSPREE_ID || '').trim()
const FORMSPREE_ENDPOINT = formspreeId && formspreeId !== 'YOUR_FORM_ID'
  ? `https://formspree.io/f/${formspreeId}`
  : ''

const emptyForm = { name: '', email: '', organization: '', message: '', _gotcha: '' }

function validate(form) {
  const errors = {}
  if (!form.name.trim()) errors.name = 'Enter your full name.'
  if (!form.email.trim()) errors.email = 'Enter your email address.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
    errors.email = 'Enter a valid email address.'
  }
  if (!form.message.trim()) errors.message = 'Tell us how we can help.'
  return errors
}

export default function Contact() {
  const [form, setForm] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [viaEmailApp, setViaEmailApp] = useState(false)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
    setErrors((current) => {
      if (!current[name]) return current
      const next = { ...current }
      delete next[name]
      return next
    })
  }

  const reset = () => {
    setForm(emptyForm)
    setErrors({})
    setSubmitted(false)
    setViaEmailApp(false)
    setError(null)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError(null)
    const nextErrors = validate(form)
    const firstInvalid = ['name', 'email', 'message'].find((key) => nextErrors[key])
    if (firstInvalid) {
      flushSync(() => setErrors(nextErrors))
      document.getElementById(firstInvalid)?.focus()
      return
    }
    setErrors({})

    if (form._gotcha.trim()) {
      setSubmitted(true)
      setViaEmailApp(false)
      return
    }

    const payload = {
      name: form.name.trim(),
      email: form.email.trim(),
      organization: form.organization.trim(),
      message: form.message.trim(),
    }

    if (!FORMSPREE_ENDPOINT) {
      const body = [
        `Name: ${payload.name}`,
        `Email: ${payload.email}`,
        payload.organization ? `Organization: ${payload.organization}` : null,
        '',
        payload.message,
      ].filter((line) => line !== null).join('\n')
      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent('Website inquiry')}&body=${encodeURIComponent(body)}`
      setViaEmailApp(true)
      setSubmitted(true)
      return
    }

    setLoading(true)
    setError(null)
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('Submission failed')
      setViaEmailApp(false)
      setSubmitted(true)
    } catch {
      setError(`We couldn't send that. Call ${PHONE_LABEL} or email ${EMAIL}.`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className={styles.section} aria-labelledby="contact-heading">
      <div className={`container ${styles.inner}`}>
        <div className={styles.info}>
          <span className="section-label" aria-hidden="true">Contact</span>
          <h2 id="contact-heading" className={`section-title ${styles.heading}`}>Let's Start a Conversation</h2>
          <p className={styles.sub}>
            Ready to modernize your infrastructure, build something new, or just explore what's
            possible? Reach out — we'll respond within one business day.
          </p>
          <ul className={styles.details} aria-label="Contact information">
            <li><span aria-hidden="true">📍</span> <strong>Montgomery, Texas</strong></li>
            <li><span aria-hidden="true">🌐</span> Serving Conroe &amp; Montgomery County</li>
            <li><span aria-hidden="true">📞</span> <a href="tel:+15592125444">{PHONE_LABEL}</a></li>
            <li><span aria-hidden="true">✉️</span> <a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
          </ul>
        </div>

        <div className={styles.formWrap}>
          {submitted ? (
            <div className={styles.success} role="status" aria-live="polite">
              <div className={styles.successIcon} aria-hidden="true">✅</div>
              <h3>{viaEmailApp ? 'Ready to send' : 'Message received'}</h3>
              <p>
                {viaEmailApp
                  ? `Your email app should open with this message ready to send. If it doesn't, email ${EMAIL}.`
                  : "Thanks for reaching out. We'll be in touch within one business day."}
              </p>
              <button type="button" className={styles.again} onClick={reset}>Send another message</button>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit} noValidate aria-label="Contact form">
              <div className={styles.honeypot} aria-hidden="true">
                <label htmlFor="gotcha">Leave this field blank</label>
                <input
                  id="gotcha"
                  name="_gotcha"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form._gotcha}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="name">Full Name <span aria-hidden="true">*</span><span className="sr-only">(required)</span></label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    aria-required="true"
                    aria-invalid={errors.name ? 'true' : undefined}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    autoComplete="name"
                    placeholder="Jane Smith"
                    value={form.name}
                    onChange={handleChange}
                  />
                  {errors.name && <p id="name-error" className={styles.fieldError}>{errors.name}</p>}
                </div>
                <div className={styles.field}>
                  <label htmlFor="email">Email Address <span aria-hidden="true">*</span><span className="sr-only">(required)</span></label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    aria-required="true"
                    aria-invalid={errors.email ? 'true' : undefined}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    autoComplete="email"
                    placeholder="jane@example.gov"
                    value={form.email}
                    onChange={handleChange}
                  />
                  {errors.email && <p id="email-error" className={styles.fieldError}>{errors.email}</p>}
                </div>
              </div>
              <div className={styles.field}>
                <label htmlFor="organization">Organization</label>
                <input
                  id="organization"
                  name="organization"
                  type="text"
                  autoComplete="organization"
                  placeholder="City of Conroe, Montgomery County, etc."
                  value={form.organization}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="message">How Can We Help? <span aria-hidden="true">*</span><span className="sr-only">(required)</span></label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  aria-required="true"
                  aria-invalid={errors.message ? 'true' : undefined}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  placeholder="Tell us about your project, challenge, or question..."
                  value={form.message}
                  onChange={handleChange}
                />
                {errors.message && <p id="message-error" className={styles.fieldError}>{errors.message}</p>}
              </div>
              {error && <p id="form-error" className={styles.errorMsg} role="alert">{error}</p>}
              <button type="submit" disabled={loading} className={`btn btn-primary ${styles.submit}`}>
                {loading ? 'Sending…' : 'Send Message →'}
              </button>
              <p className={styles.privacy}>
                We use your name, email, organization, and message only to reply to this inquiry.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
