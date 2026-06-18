const s = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round' }

export default function BottomNav({ onBook }) {
  return (
    <nav className="bottomnav" aria-label="Mobile">
      <a href="#services" className="bn-item">
        <svg viewBox="0 0 24 24" width="22" height="22" {...s}><path d="M3 7h18M3 12h18M3 17h18" /></svg>
        <span>Treatments</span>
      </a>
      <a href="#results" className="bn-item">
        <svg viewBox="0 0 24 24" width="22" height="22" {...s}><path d="M12 21s-7-4.5-7-10a4 4 0 017-2.5A4 4 0 0119 11c0 5.5-7 10-7 10z" /></svg>
        <span>Results</span>
      </a>
      <div className="bn-center">
        <button className="bn-fab" onClick={onBook} aria-label="Book now">
          <svg viewBox="0 0 24 24" width="24" height="24" {...s} strokeWidth="2"><path d="M8 2v3M16 2v3M3.5 9h17M5 5h14a1 1 0 011 1v13a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1z" /><path d="M9 14l2 2 4-4" /></svg>
        </button>
        <span className="bn-fab-label">Book</span>
      </div>
      <a href="#memberships" className="bn-item">
        <svg viewBox="0 0 24 24" width="22" height="22" {...s}><path d="M12 2 15 8.5 22 9.5l-5 4.5 1.5 7L12 17.5 5.5 21l1.5-7-5-4.5 7-1z" /></svg>
        <span>Member</span>
      </a>
      <a href="tel:941-779-3004" className="bn-item">
        <svg viewBox="0 0 24 24" width="22" height="22" {...s}><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z" /></svg>
        <span>Call</span>
      </a>
    </nav>
  )
}
