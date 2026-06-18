import { useRef, useState } from 'react'

const items = [
  { n: 1, cap: 'Skin tightening & contour', pill: 'teal' },
  { n: 2, cap: 'Texture & fine lines', pill: 'gold' },
  { n: 3, cap: 'Even tone & radiance', pill: 'teal' },
  { n: 4, cap: 'Firmer jawline & lift', pill: 'gold' },
  { n: 5, cap: 'Reduced redness & spots', pill: 'teal' },
  { n: 6, cap: 'Collagen renewal & glow', pill: 'gold' },
]

function Slider({ n, cap, pill }) {
  const [pos, setPos] = useState(50)
  const ref = useRef(null)
  const drag = useRef(false)
  const move = (x) => {
    const r = ref.current.getBoundingClientRect()
    setPos(Math.max(0, Math.min(100, ((x - r.left) / r.width) * 100)))
  }
  return (
    <figure className="ba-fig">
      <div
        className="ba"
        ref={ref}
        onPointerDown={(e) => { drag.current = true; e.currentTarget.setPointerCapture(e.pointerId); move(e.clientX) }}
        onPointerMove={(e) => drag.current && move(e.clientX)}
        onPointerUp={() => (drag.current = false)}
        onPointerCancel={() => (drag.current = false)}
      >
        <img src={`/assets/ba${n}-after.webp`} alt="After treatment" draggable="false" />
        <img src={`/assets/ba${n}-before.webp`} alt="Before treatment" draggable="false" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }} />
        <span className="tag tag-before">BEFORE</span>
        <span className="tag tag-after">AFTER</span>
        <div className="ba-divider" style={{ left: `${pos}%` }}>
          <div className="ba-knob">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6 4 12l5 6M15 6l5 6-5 6" /></svg>
          </div>
        </div>
      </div>
      <figcaption className="ba-cap"><span className={`pill ${pill}`}>DRAG TO COMPARE</span> {cap}</figcaption>
    </figure>
  )
}

export default function Results() {
  return (
    <section id="results" className="results">
      <div className="results-head" data-reveal>
        <div className="eyebrow center"><span className="bar" />Real Results<span className="bar" /></div>
        <h2 className="h2" style={{ marginTop: 0 }}>Visible change, naturally.</h2>
        <p>Real rejuvenation — skin tightening, smoother texture, and a natural glow. Drag any photo to see before &amp; after.</p>
      </div>
      <div className="ba-grid" data-reveal>
        {items.map(it => <Slider key={it.n} {...it} />)}
      </div>
    </section>
  )
}
