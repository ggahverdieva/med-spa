import { useState } from 'react'

export default function Footer({ onBook, onLegal }) {
  const [sent, setSent] = useState(false)
  return (
    <footer id="contact" className="footer">
      <div className="footer-grid" data-reveal>
        <div>
          <div className="eyebrow"><span className="bar" />Visit Us</div>
          <h2 style={{ marginTop: 18 }}>Begin your self-care journey.</h2>
          <p className="lead">Book a no-cost consultation with Katherine to learn how SRQ Med Spa can help you look and feel your best.</p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <button className="btn-gold" onClick={onBook}>Book a consultation</button>
            <a href="tel:941-779-3004" className="footer-call">Call 941·779·3004</a>
          </div>
          <div className="footer-meta">
            <div><div className="k">Location</div><div className="v">1473 Main Street<br />Sarasota, FL 34236</div></div>
            <div><div className="k">Hours</div><div className="v">Mon–Fri · 10am–5pm<br />Saturday · 10am–2pm</div></div>
            <div><div className="k">Email</div><div className="v"><a href="mailto:info@srqmedspa.com">info@srqmedspa.com</a></div></div>
          </div>
        </div>
        <div className="news">
          <div className="t">Stay in the glow</div>
          <p>Special offers and news from SRQ Med Spa, straight to your inbox.</p>
          <form onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
            <input type="text" placeholder="First name" />
            <input type="email" placeholder="Email address" required />
            <button type="submit">Sign me up</button>
          </form>
          {sent && <div className="ok">Thank you — you're on the list. ✦</div>}
        </div>
      </div>
      <div className="footer-bottom">
        <img src="/assets/SRQLOGO.png" alt="SRQ Med Spa" style={{ filter: 'brightness(0) invert(1)' }} />
        <div className="footer-social">
          <a href="https://www.instagram.com/srq_med_spa/">Instagram</a>
          <a href="https://www.facebook.com/profile.php?id=100088033256980">Facebook</a>
          <a href="https://www.youtube.com/@srqmedspa/">YouTube</a>
        </div>
        <div className="footer-legal">
          <button onClick={() => onLegal('privacy')}>Privacy</button>
          <button onClick={() => onLegal('terms')}>Terms</button>
          <button onClick={() => onLegal('disclaimer')}>Disclaimer</button>
        </div>
        <div className="footer-copy">© 2026 SRQ Med Spa · Sarasota, FL</div>
      </div>
    </footer>
  )
}
