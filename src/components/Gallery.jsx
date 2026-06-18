const tiles = ['gal-iv.webp', 'gal-shot.webp', 'gal-redlight.webp', 'gal-products.webp']

export default function Gallery() {
  return (
    <section className="gallery">
      <div className="gallery-head" data-reveal>
        <div>
          <div className="k">@srq_med_spa</div>
          <h2>From our world.</h2>
        </div>
        <a href="https://www.instagram.com/srq_med_spa/" className="link-arrow">Follow on Instagram →</a>
      </div>
      <div className="gallery-grid" data-reveal>
        {tiles.map((t, i) => (
          <div className="tile" key={t}><img src={`/assets/${t}`} alt={`SRQ Med Spa ${i + 1}`} loading="lazy" /></div>
        ))}
      </div>
    </section>
  )
}
