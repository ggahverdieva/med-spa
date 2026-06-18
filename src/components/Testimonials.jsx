const quotes = [
  { c: 'gold', t: "A terrific menu of services, a relaxing environment, and knowledgeable professionals. I've used the weight-loss service, IV hydration, and B-12 shots.", who: 'DEBBIE · Google Review' },
  { c: 'teal', t: 'Best location in Sarasota. Very knowledgeable in red light therapy, IV vitamins, and facials. 10 out of 10.', who: 'DAVID · Google Review' },
  { c: 'teal', t: 'A fabulous microneedling session — the biggest bang for your buck. Exceptionally impressed with the knowledge and expertise.', who: 'HILLARY · Google Review' },
  { c: 'gold', t: 'Katherine has put together an experienced, caring staff and a wonderful space. Wellness and growth truly begin here.', who: 'ADAM · Google Review' },
]

export default function Testimonials() {
  return (
    <section className="testi">
      <div className="testi-head" data-reveal>
        <div className="k">Kind words</div>
        <h2 className="h2">Loved by Sarasota.</h2>
      </div>
      <div className="testi-grid" data-reveal>
        {quotes.map((q, idx) => (
          <blockquote className="quote" key={idx}>
            <div className={`mark ${q.c}`}>“</div>
            <p>{q.t}</p>
            <footer>{q.who}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  )
}
