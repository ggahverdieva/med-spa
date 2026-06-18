const points = [
  ['Medical-grade results', 'Advanced devices, expert hands.'],
  ['Personalized plans', 'Built around your goals.'],
  ['Wellness + aesthetics', 'Everything in one place.'],
  ['A relaxing escape', 'Breathe, unwind, restore.'],
]

export default function Welcome() {
  return (
    <section className="welcome">
      <div className="welcome-grid">
        <div data-reveal className="welcome-media">
          <div className="pic"><img src="/assets/welcome.webp" alt="Inside SRQ Med Spa" /></div>
          <div className="welcome-badge"><span className="b1">SRQ</span><span className="b2">Med Spa</span></div>
        </div>
        <div data-reveal>
          <div className="eyebrow"><span className="bar" />Welcome</div>
          <h2 style={{ marginTop: 22 }}>A med spa for wellness, beauty &amp; rejuvenation.</h2>
          <p>Struggling to prioritize your self-care? Feeling overwhelmed finding balance? Located in the heart of Sarasota, SRQ Med Spa is here to help you feel your best — inside and out. Discover personalized care, innovative treatments, and a warm, inviting space.</p>
          <div className="welcome-points">
            {points.map(([t, d]) => (
              <div className="wp" key={t}><span className="star">✦</span><div><div className="t">{t}</div><div className="d">{d}</div></div></div>
            ))}
          </div>
          <a href="#contact" className="link-arrow" style={{ marginTop: 36 }}>Ask Katherine a question <span style={{ fontSize: 18 }}>→</span></a>
        </div>
      </div>
    </section>
  )
}
