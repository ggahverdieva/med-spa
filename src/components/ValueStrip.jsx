const s = { fill: 'none', strokeWidth: 1.4, strokeLinecap: 'round', strokeLinejoin: 'round' }

const items = [
  { color: 'var(--gold)', t: 'Recover faster', d: 'Bounce back from workouts & travel.', path: <path d="M13 2 4 14h6l-1 8 9-12h-6z" /> },
  { color: 'var(--teal)', t: 'Build immunity', d: "Strengthen your body's defenses.", path: <g><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></g> },
  { color: 'var(--gold)', t: 'More energy', d: 'Feel sharper and more alive daily.', path: <g><circle cx="12" cy="12" r="4.5" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" /></g> },
  { color: 'var(--teal)', t: 'Anti-aging & sleep', d: 'Restore, glow, and rest deeply.', path: <path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z" /> },
]

export default function ValueStrip() {
  return (
    <section className="value">
      <div className="value-grid" data-reveal>
        {items.map(it => (
          <div className="value-item" key={it.t}>
            <div className="ic" style={{ color: it.color }}>
              <svg viewBox="0 0 24 24" stroke="currentColor" {...s}>{it.path}</svg>
            </div>
            <div className="t">{it.t}</div>
            <div className="d">{it.d}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
