export default function Hero({ onBook }) {
  return (
    <section id="top" className="hero">
      <div className="glow glow-a" />
      <div className="glow glow-b" />
      <div className="hero-inner">
        <div data-reveal className="hero-copy">
          <div className="eyebrow"><span className="bar" />Med Spa · Sarasota, FL</div>
          <h1 style={{ marginTop: 26 }}>Look younger.<span className="br-d"><br /></span> Feel better.<br /><span className="gold">Live radiant.</span></h1>
          <p className="hero-sub">Personalized wellness, beauty, and rejuvenation in the heart of downtown Sarasota — thoughtfully guided by Katherine and her caring team.</p>
          <div className="hero-actions">
            <button className="btn-teal" onClick={onBook}>Book a free consultation</button>
            <a href="#services" className="link-arrow gold">Explore treatments <span style={{ fontSize: 18 }}>→</span></a>
          </div>
          <div className="hero-stats">
            <div><div className="stat-num">15+</div><div className="stat-lbl">Signature services</div></div>
            <div className="divider" />
            <div><div className="stat-num">4.9★</div><div className="stat-lbl">Loved by Sarasota</div></div>
            <div className="divider" />
            <div><div className="stat-num">1:1</div><div className="stat-lbl">Personal care</div></div>
          </div>
        </div>

        <div data-reveal className="hero-media">
          <div className="hero-arch">
            <img src="/assets/hero.webp" alt="SRQ Med Spa — radiant skin and wellness" />
          </div>
          <div className="hero-float">
            <span className="ic">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s-7-4.5-7-10a4 4 0 017-2.5A4 4 0 0119 11c0 5.5-7 10-7 10z" /></svg>
            </span>
            <div style={{ lineHeight: 1.35 }}>
              <div style={{ fontSize: 14, fontWeight: 700 }}>Wellness, inside &amp; out</div>
              <div style={{ fontSize: 12.5, color: 'var(--gray)', marginTop: 2 }}>A calm, welcoming space</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
