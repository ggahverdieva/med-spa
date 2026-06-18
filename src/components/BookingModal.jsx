import { useState } from 'react'

const services = [
  'IV Vitamin Infusions', 'Morpheus8 Skin Renewal', 'Xeomin / Anti-Wrinkle',
  'Medical Weight Loss', 'Body Sculpting', 'Red Light Therapy', 'Not sure yet — help me choose',
]
const times = ['Morning (10am–12pm)', 'Afternoon (12pm–3pm)', 'Late afternoon (3pm–5pm)']

export default function BookingModal({ open, onClose }) {
  const [step, setStep] = useState(1)
  const [d, setD] = useState({ service: '', name: '', phone: '', email: '', date: '', time: '' })
  const [done, setDone] = useState(false)
  if (!open) return null

  const set = (k, v) => setD(p => ({ ...p, [k]: v }))
  const close = () => { onClose(); setTimeout(() => { setStep(1); setDone(false); setD({ service: '', name: '', phone: '', email: '', date: '', time: '' }) }, 250) }
  const canNext = step === 1 ? d.service : step === 2 ? d.name && d.phone : true
  const submit = (e) => { e.preventDefault(); setDone(true) }

  return (
    <div className="modal-overlay" onClick={close}>
      <div className="modal book" onClick={e => e.stopPropagation()} role="dialog" aria-modal="true">
        <button className="modal-x" onClick={close} aria-label="Close">×</button>

        {done ? (
          <div className="book-done">
            <div className="book-check">✦</div>
            <h3>You're booked in spirit!</h3>
            <p>Thank you, {d.name || 'friend'}. Our team will call you at {d.phone || 'your number'} to confirm your {d.service.toLowerCase()} consultation. We can't wait to meet you.</p>
            <button className="btn-teal" onClick={close}>Done</button>
          </div>
        ) : (
          <>
            <div className="book-head">
              <div className="eyebrow"><span className="bar" />Book a free consultation</div>
              <h3>Let's plan your glow.</h3>
              <div className="book-steps">
                {[1, 2, 3].map(n => (
                  <span key={n} className={`bs ${step === n ? 'on' : ''} ${step > n ? 'done' : ''}`}>{step > n ? '✓' : n}</span>
                ))}
              </div>
            </div>

            <div className="book-body">
              {step === 1 && (
                <>
                  <label className="book-label">Which treatment are you interested in?</label>
                  <div className="book-services">
                    {services.map(s => (
                      <button key={s} type="button" className={`book-chip ${d.service === s ? 'on' : ''}`} onClick={() => set('service', s)}>{s}</button>
                    ))}
                  </div>
                </>
              )}
              {step === 2 && (
                <div className="book-fields">
                  <label className="book-label">Your details</label>
                  <input placeholder="Full name" value={d.name} onChange={e => set('name', e.target.value)} />
                  <input placeholder="Phone number" inputMode="tel" value={d.phone} onChange={e => set('phone', e.target.value)} />
                  <input placeholder="Email (optional)" type="email" value={d.email} onChange={e => set('email', e.target.value)} />
                </div>
              )}
              {step === 3 && (
                <form className="book-fields" onSubmit={submit}>
                  <label className="book-label">When works best?</label>
                  <input type="date" value={d.date} onChange={e => set('date', e.target.value)} />
                  <div className="book-times">
                    {times.map(t => (
                      <button key={t} type="button" className={`book-chip ${d.time === t ? 'on' : ''}`} onClick={() => set('time', t)}>{t}</button>
                    ))}
                  </div>
                  <button type="submit" className="btn-teal book-submit">Request my appointment</button>
                </form>
              )}
            </div>

            {step < 3 && (
              <div className="book-nav">
                {step > 1 ? <button className="book-back" onClick={() => setStep(s => s - 1)}>← Back</button> : <span />}
                <button className="btn-teal" disabled={!canNext} onClick={() => canNext && setStep(s => s + 1)}>Continue</button>
              </div>
            )}
            {step === 3 && (
              <div className="book-nav">
                <button className="book-back" onClick={() => setStep(2)}>← Back</button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}
