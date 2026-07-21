import { useState, useRef, useEffect, useId } from 'react'
import { motion } from 'framer-motion'
import { Check, ArrowRight } from './ui/Icons'
import { EASE } from '../lib/motion'
import { FORM, CONVERSION } from '../content/site'

/**
 * The single lead form. Built once, reused wherever a form is needed —
 * the docs (08/11/15) are explicit about not rebuilding it per section.
 *
 * Fields are exactly: Name → Email → What do you need help with?
 * No company, no phone — every extra field costs completions.
 */
export default function LeadForm() {
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [errors, setErrors] = useState({})
  const successRef = useRef(null)
  const uid = useId()

  // Move focus to the confirmation so screen readers announce the outcome.
  useEffect(() => {
    if (status === 'success') successRef.current?.focus()
  }, [status])

  const validate = (data) => {
    const next = {}
    if (!data.name.trim()) next.name = 'Please add your name.'
    if (!data.email.trim()) next.email = 'Please add an email so I can reply.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) next.email = 'That email doesn’t look right.'
    if (!data.message.trim()) next.message = 'A sentence about the problem is plenty.'
    // Website is optional — only sanity-check it if something was typed.
    // Deliberately lenient: accepts "site.com", "www.site.com", full URLs.
    if (data.website.trim() && !/^([a-z]+:\/\/)?[^\s.]+\.[^\s]{2,}$/i.test(data.website.trim())) {
      next.website = 'That doesn’t look like a web address.'
    }
    return next
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    const data = {
      auditType: form.auditType.value,
      name: form.name.value,
      email: form.email.value,
      website: form.website.value,
      message: form.message.value,
    }

    const found = validate(data)
    setErrors(found)
    if (Object.keys(found).length) return

    if (!CONVERSION.formspreeId) {
      // Fail loudly rather than showing a success state that sends nothing.
      console.error(
        '[LeadForm] No Formspree ID configured. Set CONVERSION.formspreeId in src/content/site.js — this submission was NOT sent.',
      )
      setStatus('error')
      return
    }

    setStatus('submitting')
    try {
      const res = await fetch(`https://formspree.io/f/${CONVERSION.formspreeId}`, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error(`Formspree responded ${res.status}`)
      setStatus('success')
      form.reset()
    } catch (err) {
      console.error('[LeadForm] Submission failed:', err)
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div
        ref={successRef}
        tabIndex={-1}
        className="rounded-2xl border border-lime/40 bg-lime/10 p-8 text-center outline-none"
      >
        <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-lime text-ink">
          <Check className="h-5 w-5" />
        </span>
        <h3 className="mt-4 text-[19px] font-bold text-ink">{FORM.successTitle}</h3>
        <p className="mx-auto mt-2 max-w-sm text-[14.5px] leading-relaxed text-warm-grey">
          {FORM.successBody}
        </p>
      </div>
    )
  }

  const field =
    'w-full rounded-xl border border-card-border bg-white px-4 py-3.5 text-[15px] text-ink placeholder:text-warm-grey-light focus:border-ink/40 focus:outline-none focus:ring-2 focus:ring-lime/50'

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      {/* Audit choice leads — the offer is the strongest thing on the form. */}
      <fieldset>
        <legend className="mb-1.5 block text-[13.5px] font-semibold text-ink">
          {FORM.fields.auditType.label}
        </legend>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
          {FORM.fields.auditType.options.map((opt) => (
            <label
              key={opt.value}
              className="group relative flex cursor-pointer items-center justify-center rounded-xl border border-card-border bg-white px-3 py-3.5 text-center text-[13px] font-medium text-warm-grey transition-colors has-[:checked]:border-ink has-[:checked]:bg-ink has-[:checked]:text-white hover:border-ink/40"
            >
              <input
                type="radio"
                name="auditType"
                value={opt.value}
                defaultChecked={opt.value === FORM.fields.auditType.default}
                className="sr-only"
              />
              {opt.label}
            </label>
          ))}
        </div>
      </fieldset>

      {['name', 'email', 'website', 'message'].map((key) => {
        const cfg = FORM.fields[key]
        const id = `${uid}-${key}`
        const errId = `${id}-error`
        const isTextarea = key === 'message'
        return (
          <div key={key}>
            <label htmlFor={id} className="mb-1.5 block text-[13.5px] font-semibold text-ink">
              {cfg.label}
              {cfg.optional && (
                <span className="ml-1.5 font-normal text-warm-grey-light">(optional)</span>
              )}
            </label>
            {isTextarea ? (
              <textarea
                id={id}
                name={key}
                rows={3}
                placeholder={cfg.placeholder}
                aria-invalid={Boolean(errors[key])}
                aria-describedby={errors[key] ? errId : undefined}
                className={`${field} resize-y`}
              />
            ) : (
              <input
                id={id}
                name={key}
                type={key === 'email' ? 'email' : key === 'website' ? 'url' : 'text'}
                inputMode={key === 'website' ? 'url' : undefined}
                autoComplete={key === 'email' ? 'email' : key === 'website' ? 'url' : 'name'}
                placeholder={cfg.placeholder}
                aria-invalid={Boolean(errors[key])}
                aria-describedby={errors[key] ? errId : undefined}
                className={field}
              />
            )}
            {errors[key] && (
              <p id={errId} className="mt-1.5 text-[13px] text-[#C05A4D]">
                {errors[key]}
              </p>
            )}
          </div>
        )
      })}

      <motion.button
        type="submit"
        disabled={status === 'submitting'}
        whileHover={{ scale: status === 'submitting' ? 1 : 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2, ease: EASE }}
        className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-[15px] font-semibold text-white hover:bg-black disabled:opacity-60"
      >
        {status === 'submitting' ? FORM.submitting : FORM.submit}
        {status !== 'submitting' && (
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        )}
      </motion.button>

      {status === 'error' && (
        <p role="alert" className="text-[13.5px] leading-relaxed text-[#C05A4D]">
          {FORM.errorBody}
        </p>
      )}

      <p className="text-center text-[12.5px] text-warm-grey-light">{CONVERSION.noLockIn}</p>
    </form>
  )
}
