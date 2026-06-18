const rows = [
  ['Morpheus8', ' — RF microneedling for deep collagen renewal'],
  ['Lumecca IPL', ' — fade sun spots, redness, and discoloration'],
  ['Forma', ' — gentle radiofrequency skin tightening'],
]

export default function Spotlight() {
  return (
    <section id="spotlight" className="spotlight">
      <div className="glow-c" />
      <div className="spotlight-grid">
        <div data-reveal>
          <div className="eyebrow"><span className="bar" />Featured · Skin</div>
          <h2 style={{ marginTop: 22 }}>Reveal smoother, firmer, more radiant skin.</h2>
          <p className="lead">Our advanced skin suite — Morpheus8, Forma, Lumecca, and Xeomin — works beneath the surface to tighten, even tone, and restore a natural, lit-from-within glow.</p>
          <div className="spot-list">
            {rows.map(([b, t]) => (
              <div className="spot-row" key={b}><span className="star">✦</span><div style={{ flex: 1 }}><b>{b}</b><span>{t}</span></div></div>
            ))}
          </div>
          <a href="#contact" className="btn-gold">Explore skin treatments</a>
        </div>
        <div data-reveal>
          <div className="spotlight-arch"><img src="/assets/spotlight.webp" alt="Radiant, glowing skin after treatment" /></div>
        </div>
      </div>
    </section>
  )
}
