const steps = [
  { n: 1, acc: 'gold', img: 'journey-1.webp', t: 'Book an appointment', d: 'Our team helps you find the right combination of treatments for your needs.' },
  { n: 2, acc: 'teal', img: 'journey-2.webp', t: 'Your customized plan', d: 'Treatments are packaged into a plan unique to your health and goals.' },
  { n: 3, acc: 'gold', img: 'journey-3.webp', t: 'Relax & enjoy', d: 'Breathe and unwind while our experienced team does the work.' },
]

export default function Journey() {
  return (
    <section id="journey" className="journey">
      <div className="journey-head" data-reveal>
        <div className="k">How it works</div>
        <h2 className="h2">Your SRQ journey</h2>
      </div>
      <div className="journey-grid" data-reveal>
        {steps.map(st => (
          <div className={`journey-step ${st.acc}`} key={st.n}>
            <div className="journey-photo">
              <div className="ring" />
              <div className="img"><img src={`/assets/${st.img}`} alt={st.t} /></div>
              <div className="num">{st.n}</div>
            </div>
            <h3>{st.t}</h3>
            <p>{st.d}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
