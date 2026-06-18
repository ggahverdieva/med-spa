import { useRef } from 'react'

const i = { fill: 'none', strokeWidth: 2.4, strokeLinecap: 'round', strokeLinejoin: 'round' }

const cards = [
  {
    img: 'card-iv.webp', cat: 'Wellness · IV Therapy', acc: 'teal', title: 'IV Vitamin Infusions',
    desc: 'Custom-formulated drips to hydrate, energize, and restore — guided by our nurses.',
    icon: <g><path d="M26 8h12M32 8v10M32 18c-9 0-15 8-15 18a15 15 0 0030 0c0-10-6-18-15-18z" /><path d="M24 38h16" /></g>,
  },
  {
    img: 'card-morpheus.webp', cat: 'Aesthetics · Skin', acc: 'gold', title: 'Morpheus8 Skin Renewal',
    desc: 'Microneedling with RF to tighten, smooth, and rebuild collagen from within.',
    icon: <g><path d="M32 10c12 0 21 9 21 21" /><circle cx="32" cy="34" r="17" /><path d="M32 24v6M32 38v6M22 34h6M36 34h6" /></g>,
  },
  {
    img: 'card-xeomin.webp', cat: 'Anti-Wrinkle', acc: 'teal', title: 'Xeomin — better than Botox',
    desc: 'Naturally soften frown lines with a purer, fast-acting alternative.',
    icon: <g><path d="M42 12 52 22 26 48l-12 2 2-12z" /><path d="M37 17l10 10" /><path d="M13 52h16" /></g>,
  },
  {
    img: 'card-weightloss.webp', cat: 'Metabolic · GLP-1', acc: 'gold', title: 'Medical Weight Loss',
    desc: 'Physician-guided semaglutide and vitamin programs tailored to your goals.',
    icon: <g><path d="M16 24h32l-3 28H19z" /><path d="M24 24c0-6 3-11 8-11s8 5 8 11" /><path d="M32 32v12M26 38h12" /></g>,
  },
  {
    img: 'card-sculpt.webp', cat: 'Contouring', acc: 'teal', title: 'Body Sculpting',
    desc: 'Non-invasive sculpting to define and tone — with no downtime.',
    icon: <g><path d="M8 28c8-6 14-6 20 0s12 6 20 0 10-5 8-3" /><path d="M8 40c8-6 14-6 20 0s12 6 20 0 10-5 8-3" /></g>,
  },
  {
    img: 'card-redlight.webp', cat: 'Recovery · Light', acc: 'gold', title: 'Red Light Therapy',
    desc: 'Natural, non-invasive light to recover faster, calm skin, and glow.',
    icon: <g><circle cx="32" cy="32" r="12" /><path d="M32 10v8M32 46v8M10 32h8M46 32h8M17 17l6 6M41 41l6 6M47 17l-6 6M23 41l-6 6" /></g>,
  },
]

export default function Services() {
  const ref = useRef(null)
  const scroll = (dx) => ref.current?.scrollBy({ left: dx, behavior: 'smooth' })
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="services-head" data-reveal>
          <div className="eyebrow center"><span className="bar" />Signature Services<span className="bar" /></div>
          <h2 className="h2" style={{ marginTop: 0 }}>Treatments tailored to you.</h2>
          <p>From IV wellness to advanced skin renewal — every treatment is customized to your body and your goals.</p>
        </div>
      </div>

      <div className="carousel" ref={ref} data-reveal>
        {cards.map(c => (
          <article className={`svc-card ${c.acc}-acc`} key={c.title}>
            <div className="svc-arch"><img src={`/assets/${c.img}`} alt={c.title} /></div>
            <div className="svc-body">
              <div className="svc-cat">{c.cat}</div>
              <div className="svc-titlerow">
                <span className={`svc-ic ${c.acc}`}>
                  <svg viewBox="0 0 64 64" width="22" height="22" stroke={c.acc === 'gold' ? '#CDA232' : '#03A6C3'} {...i}>{c.icon}</svg>
                </span>
                <h3>{c.title}</h3>
              </div>
              <p>{c.desc}</p>
            </div>
            <a href="#contact" className="svc-plus">+</a>
          </article>
        ))}
      </div>

      <div className="carousel-nav">
        <button aria-label="Previous" onClick={() => scroll(-366)}>‹</button>
        <button aria-label="Next" onClick={() => scroll(366)}>›</button>
      </div>
    </section>
  )
}
