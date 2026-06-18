import { useState } from 'react'

const s = { fill: 'none', stroke: '#03A6C3', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round' }
const icons = {
  treat: <svg viewBox="0 0 24 24" width="20" height="20" {...s}><path d="M3 7h18M3 12h18M3 17h18" /></svg>,
  skin: <svg viewBox="0 0 24 24" width="20" height="20" {...s}><path d="M12 3l1.8 4.6L18 9l-4.2 1.4L12 15l-1.8-4.6L6 9l4.2-1.4z" /><circle cx="18" cy="17" r="2" /></svg>,
  member: <svg viewBox="0 0 24 24" width="20" height="20" {...s}><path d="M12 3l2.6 5.6 6 .8-4.4 4.2 1.1 6L12 17l-5.3 2.6 1.1-6L3.4 9.4l6-.8z" /></svg>,
  results: <svg viewBox="0 0 24 24" width="20" height="20" {...s}><path d="M12 21s-7-4.5-7-10a4 4 0 017-2.5A4 4 0 0119 11c0 5.5-7 10-7 10z" /></svg>,
  visit: <svg viewBox="0 0 24 24" width="20" height="20" {...s}><path d="M12 21s-6-5.2-6-10a6 6 0 1112 0c0 4.8-6 10-6 10z" /><circle cx="12" cy="11" r="2.2" /></svg>,
}

const links = [
  ['#services', 'Treatments', 'treat'],
  ['#spotlight', 'Skin', 'skin'],
  ['#memberships', 'Membership', 'member'],
  ['#results', 'Results', 'results'],
  ['#contact', 'Visit', 'visit'],
]

export default function Header({ onBook }) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div className="announce">
        Sarasota's destination for wellness &amp; beauty &nbsp;·&nbsp; Complimentary consultations
      </div>
      <nav className="nav">
        <div className="nav-inner">
          <a href="#top" className="nav-logo"><img src="/assets/SRQLOGO.png" alt="SRQ Med Spa" /></a>
          <div className="nav-links">
            {links.map(([h, l]) => <a key={h} href={h}>{l}</a>)}
          </div>
          <div className="nav-right">
            <a href="tel:941-779-3004" className="nav-phone">941·779·3004</a>
            <button className="nav-cta" onClick={onBook}>Book Now</button>
            <button className={`nav-burger ${open ? 'open' : ''}`} aria-label="Menu" onClick={() => setOpen(o => !o)}>
              <span /><span /><span />
            </button>
          </div>
        </div>
        <div className={`nav-mobile ${open ? 'open' : ''}`}>
          <div className="nav-mobile-inner">
            {links.map(([h, l, k]) => (
              <a key={h} href={h} onClick={() => setOpen(false)}>
                <span className="mm-ic">{icons[k]}</span>{l}
              </a>
            ))}
            <a href="tel:941-779-3004" onClick={() => setOpen(false)}>
              <span className="mm-ic">
                <svg viewBox="0 0 24 24" width="20" height="20" {...s}><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z" /></svg>
              </span>941·779·3004
            </a>
            <button className="nav-cta" style={{ marginTop: 12 }} onClick={() => { setOpen(false); onBook() }}>Book Now</button>
          </div>
        </div>
      </nav>
    </>
  )
}
