import { Link } from '../router'

/* Responsive 16:9 YouTube embed, framed to match the page's rounded media. */
function Video({ id, title }) {
  return (
    <div className="wl-video">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${id}?rel=0`}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  )
}

/* Photo framed in the page's arched / rounded media shapes. */
function Photo({ src, alt, className = '', style }) {
  return (
    <div className={`wl-photo ${className}`} style={style}>
      <img src={src} alt={alt} loading="lazy" />
    </div>
  )
}

const vs = { fill: 'none', strokeWidth: 1.4, strokeLinecap: 'round', strokeLinejoin: 'round' }
const promise = [
  ['Compassion', 'Guided with care, judgment-free.'],
  ['Expertise', 'Physician-guided, medical-grade.'],
  ['Proven solutions', 'Real results that finally last.'],
]
const closeValues = [
  { color: 'var(--teal)', t: 'Safe', d: 'Physician-guided, medical-grade care.', path: <g><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></g> },
  { color: 'var(--gold)', t: 'Convenient', d: 'Easy self-administration at home.', path: <g><path d="M3 11l9-8 9 8" /><path d="M5 9.5V21h14V9.5" /><path d="M10 21v-6h4v6" /></g> },
  { color: 'var(--teal)', t: 'Personalized', d: 'A plan built around your goals.', path: <path d="M12 21s-7-4.5-7-10a4 4 0 017-2.5A4 4 0 0119 11c0 5.5-7 10-7 10z" /> },
]

export default function WeightLoss({ onBook }) {
  return (
    <main className="wl">
      {/* ============ HERO ============ */}
      <section className="wl-hero">
        <div className="glow glow-a" />
        <div className="glow glow-b" />
        <div className="wl-hero-inner">
          <div data-reveal>
            <nav className="wl-crumb">
              <Link to="/">Home</Link><span>›</span><span>Medical Weight Loss</span>
            </nav>
            <div className="eyebrow"><span className="bar" />Medical Weight Loss · Sarasota, FL</div>
            <h1>Transform Your Body <span className="teal">with Effective Weight Loss Strategies.</span></h1>
            <p className="wl-sub">Safe. Personalized. Life Changing.</p>
            <p className="wl-lead">Physician-guided semaglutide, tirzepatide, peptides, and vitamin programs —
              tailored to your goals and supported every step of the way by Katherine and her team.</p>
            <div className="wl-actions">
              <button className="btn-teal" onClick={onBook}>Book your treatment</button>
              <a href="#consult" className="link-arrow gold">Schedule your consultation <span style={{ fontSize: 18 }}>→</span></a>
            </div>
            <div className="hero-stats">
              <div><div className="stat-num">15–20%</div><div className="stat-lbl">Avg. weight loss</div></div>
              <div className="divider" />
              <div><div className="stat-num">FDA</div><div className="stat-lbl">Approved options</div></div>
              <div className="divider" />
              <div><div className="stat-num">1:1</div><div className="stat-lbl">Medical support</div></div>
            </div>
          </div>
          <div className="hero-media" data-reveal>
            <Photo src="/assets/wl-hero.png" alt="Transform your body with effective weight loss strategies" className="arch" style={{ height: 560 }} />
            <div className="hero-float">
              <span className="ic">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s-7-4.5-7-10a4 4 0 017-2.5A4 4 0 0119 11c0 5.5-7 10-7 10z" /></svg>
              </span>
              <div style={{ lineHeight: 1.35 }}>
                <div style={{ fontSize: 14, fontWeight: 700 }}>Guided every step</div>
                <div style={{ fontSize: 12.5, color: 'var(--gray)', marginTop: 2 }}>Self-administer at home</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ WE UNDERSTAND YOUR STRUGGLE — Welcome style ============ */}
      <section className="welcome">
        <div className="welcome-grid">
          <div data-reveal className="welcome-media">
            <Video id="Zbs5kMSH_iY" title="Weight Loss Questions and Answers — SRQ Med Spa" />
            <div className="welcome-badge"><span className="b1">SRQ</span><span className="b2">Med Spa</span></div>
          </div>
          <div data-reveal>
            <div className="eyebrow"><span className="bar" />Compassion · Expertise</div>
            <h2 style={{ marginTop: 22 }}>We understand your struggle.</h2>
            <p>If you're watching this video, you're probably feeling frustrated with your weight. We get it.
              It's never been harder to keep the weight off, even when you're eating responsibly and taking care
              of yourself. At SRQ Med Spa, we're here to guide you through this journey with compassion, expertise,
              and proven solutions.</p>
            <div className="welcome-points">
              {promise.map(([t, d]) => (
                <div className="wp" key={t}><span className="star">✦</span><div><div className="t">{t}</div><div className="d">{d}</div></div></div>
              ))}
            </div>
            <a className="btn-gold" style={{ marginTop: 34 }}
               href="mailto:info@srqmedspa.com?subject=Side%20Effect%20Prevention%20%26%20Management%20Cheat%20Sheet">
              Download the FREE Cheat Sheet
            </a>
          </div>
        </div>
      </section>

      {/* ============ READY TO LOSE WEIGHT — Spotlight style ============ */}
      <section className="spotlight">
        <div className="glow-c" />
        <div className="spotlight-grid">
          <div data-reveal>
            <div className="eyebrow"><span className="bar" />Your Moment</div>
            <h2 style={{ marginTop: 22 }}>Ready to lose weight and finally keep it off?</h2>
            <p className="lead">You've seen the transformations. Now it's your turn. Semaglutide is changing
              lives—melting away stubborn fat, controlling cravings, and giving real results where diets failed.
              Imagine feeling confident, energized, and in control of your body again. Appointments are limited—and
              demand is skyrocketing. Don't wait until it's sold out or you're back at square one. You deserve to
              look and feel your best—this is your moment to take action.</p>
            <p className="wl-punch">💥 Real results. Medical support. Life-changing confidence.</p>
            <p className="wl-spot-p">Join the thousands already shedding pounds and feeling incredible.</p>
            <p className="wl-spot-ask">Are you in—or are you watching from the sidelines again?</p>
            <button className="btn-gold" onClick={onBook}>Book your treatment</button>
          </div>
          <div data-reveal>
            <Photo src="/assets/wl-ready.png" alt="Ready to lose weight and finally keep it off" className="archb" style={{ height: 560 }} />
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS — Testimonials style ============ */}
      <section className="testi">
        <div className="testi-head" data-reveal>
          <div className="k">Real stories</div>
          <h2 className="h2">What clients are saying.</h2>
        </div>
        <div className="testi-grid" data-reveal>
          <blockquote className="quote">
            <div className="mark gold">“</div>
            <p>I lost 30 lbs in 4.5 months!</p>
            <footer>WEIGHT LOSS CLIENT</footer>
          </blockquote>
          <blockquote className="quote">
            <div className="mark teal">“</div>
            <p>An Asset to Main Street! This newcomer is an asset to Main Street. Staff is pleasant, efficient
              and effective. Walk in stressed, walk out relaxed!</p>
            <footer>CANDACE</footer>
          </blockquote>
        </div>
      </section>

      {/* ============ MEDICAL-GRADE PEPTIDES — Welcome style, flipped ============ */}
      <section className="welcome" style={{ background: '#fff' }}>
        <div className="welcome-grid flip">
          <div data-reveal>
            <div className="eyebrow"><span className="bar" />The Smart Way</div>
            <h2 style={{ marginTop: 22 }}>Lose Weight the Smart Way with Medical-Grade Peptides</h2>
            <p>Struggling to lose weight despite eating right and exercising? Your body has built-in mechanisms
              to regulate hunger and burn fat, but sometimes those signals don't work as they should. That's where
              GLP-1 weight loss peptides, like Semaglutide can help! These treatments support your body's natural
              ability to control appetite and metabolism, making weight loss easier and more sustainable.</p>
            <p>Watch this video as Katherine, owner of SRQ Med Spa, explains how peptides work, how to use them
              effectively, and how to avoid common pitfalls. Need extra support? Email <a href="mailto:info@srqmedspa.com">info@srqmedspa.com</a> for
              our helpful chart on managing side effects and optimizing results!</p>
          </div>
          <div data-reveal className="welcome-media">
            <Video id="BFIQG-4DGkc" title="How to do a home subcutaneous injection — SRQ Med Spa" />
          </div>
        </div>
      </section>

      {/* ============ TREATMENTS MENU INTRO — Services head style ============ */}
      <section className="wl-menu-head">
        <div className="container">
          <div className="services-head" data-reveal>
            <div className="eyebrow center"><span className="bar" />Our Programs<span className="bar" /></div>
            <h2 className="h2" style={{ marginTop: 0 }}>Kickstart your weight loss journey with SRQ Med Spa</h2>
            <p>Physician-guided injectables, peptides, and vitamin therapies — each tailored to your body, your
              goals, and your pace.</p>
          </div>
        </div>
      </section>

      {/* ============ SEMAGLUTIDE ============ */}
      <section className="wl-feature" id="semaglutide">
        <div className="wl-feature-grid">
          <div className="wl-feature-media" data-reveal>
            <Photo src="/assets/wl-semaglutide.png" alt="Prescription semaglutide weight loss strategy" className="arch" style={{ height: 460 }} />
          </div>
          <div className="wl-feature-body" data-reveal>
            <div className="eyebrow"><span className="bar" />GLP-1 Receptor Agonist</div>
            <h2 style={{ marginTop: 16 }}>Prescription semaglutide weight loss strategy</h2>
            <p>This specific product belongs to a class of drugs called GLP-1 receptor agonists. It works by
              mimicking the effects of the naturally occurring hormone glucagon-like peptide-1 (GLP-1) in the body.</p>
            <p>When it is injected, it binds to and activates GLP-1 receptors in the pancreas, which stimulates the
              release of insulin from beta cells in the pancreas. Insulin helps lower blood sugar levels by moving
              glucose from the bloodstream into the body's cells, where it can be used for energy. It also works by
              slowing down the rate at which food is digested and absorbed in the stomach, which can help regulate
              blood sugar levels and reduce appetite. This effect can be particularly helpful in individuals with
              type 2 diabetes who struggle with weight management.</p>
            <p>In addition, it has been shown to have other beneficial effects on cardiovascular health, such as
              reducing the risk of heart attack and stroke.</p>
            <p>Overall, it is an effective medication for managing blood sugar levels in individuals with type 2
              diabetes, and it may also have additional health benefits beyond glucose control.</p>

            <div className="wl-pricebox">
              <p className="pb-note">The price varies by dose. There is an upfront charge of <strong>$500</strong> to
                fill your order. That credit is then reduced by the following schedule. (These prices are in effect
                until such a time as there is a rate hike.)</p>
              <ul className="wl-pricelist">
                <li><span className="dose">.25 mg</span><span className="amt">$50 per shot ($200/ month)</span></li>
                <li><span className="dose">.50 mg</span><span className="amt">$75 per shot ($300/ month)</span></li>
                <li><span className="dose">.75 mg</span><span className="amt">$100 per shot ($400/ month)</span></li>
                <li><span className="dose">1 mg</span><span className="amt">$125 per shot ($500/ month)</span></li>
                <li><span className="dose">1.25 mg</span><span className="amt">$150 per shot ($600/ month)</span></li>
                <li><span className="dose">1.50 mg</span><span className="amt">$175 per shot ($700/ month)…. and so on</span></li>
              </ul>
            </div>
            <div className="wl-actions">
              <button className="btn-teal" onClick={onBook}>BOOK YOUR TREATMENT</button>
            </div>
          </div>
        </div>
      </section>

      {/* ============ TIRZEPATIDE ============ */}
      <section className="wl-feature alt" id="tirzepatide">
        <div className="wl-feature-grid flip">
          <div className="wl-feature-media" data-reveal>
            <Photo src="/assets/wl-tirzepatide.png" alt="Prescription tirzepatide weight loss strategy" className="arch" style={{ height: 460 }} />
          </div>
          <div className="wl-feature-body" data-reveal>
            <div className="eyebrow"><span className="bar" />FDA-Approved · Dual Action</div>
            <h2 style={{ marginTop: 16 }}>Prescription Tirzepatide weight loss strategy</h2>
            <p>The price varies by dose. There is an upfront charge of <strong>$600</strong> to fill your order.
              That credit is then reduced by the following schedule. (These prices are in effect until such a time
              as there is a rate hike.)</p>
            <p>How does tirzepatide work? Tirzepatide interacts with specific receptors in the brain, particularly
              the melanocortin-4 receptor (MC4R). Activation of MC4R has been associated with reduced appetite and
              increased energy expenditure, which are key factors in weight loss.</p>
            <p>The magic behind tirzepatide lies in its ability to regulate blood sugar levels and induce weight
              loss simultaneously. As a GLP-1 receptor agonist, it stimulates the release of insulin, which helps
              control blood sugar.</p>
            <p>In addition, it has been shown to have other beneficial effects on cardiovascular health, such as
              reducing the risk of heart attack and stroke.</p>
            <p>It's also FDA approved for chronic weight management in adults with or without diabetes. Along with
              diet and exercise, tirzepatide can lead to significant weight loss — an average of 15% to 20%
              (34 lbs to 48 lbs).</p>

            <div className="wl-pricebox">
              <p className="pb-note">Price varies by dose:</p>
              <ul className="wl-pricelist">
                <li><span className="dose">2.5 mg</span><span className="amt">$65 per shot ($260/ month)</span></li>
                <li><span className="dose">5.0 mg</span><span className="amt">$135 per shot ($440/ month)</span></li>
                <li><span className="dose">7.5 mg</span><span className="amt">$195 per shot ($780/ month)…. and so on</span></li>
              </ul>
            </div>
            <div className="wl-actions">
              <button className="btn-teal" onClick={onBook}>BOOK YOUR TREATMENT</button>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PEPTIDES ============ */}
      <section className="wl-feature" id="peptides">
        <div className="wl-feature-grid">
          <div className="wl-feature-media" data-reveal>
            <Photo src="/assets/wl-peptides.png" alt="Peptides for weight loss support" className="arch" style={{ height: 460 }} />
          </div>
          <div className="wl-feature-body" data-reveal>
            <div className="eyebrow"><span className="bar" />Amino Acids &amp; Peptides</div>
            <h2 style={{ marginTop: 16 }}>Peptides</h2>
            <p>Peptides are basically chains of amino acids. Amino acids and peptides are essential components of
              the body that play various roles in maintaining health and wellness. While they do not directly cause
              weight loss, they can support weight loss efforts by promoting muscle growth, regulating appetite, and
              increasing energy expenditure.</p>
            <p>Here are some ways in which amino acids and peptides can help with weight loss:</p>
            <ul className="wl-bullets">
              <li><strong>Muscle growth:</strong> Amino acids, particularly branched-chain amino acids (BCAAs), are
                important for muscle growth and repair. When combined with resistance exercise, BCAAs can help
                increase muscle mass and improve body composition, which can help with weight loss.</li>
              <li><strong>Appetite regulation:</strong> Peptides such as ghrelin, leptin, and cholecystokinin (CCK)
                play important roles in regulating appetite and satiety. Ghrelin, for example, stimulates appetite,
                while leptin and CCK help reduce hunger and increase feelings of fullness. By regulating appetite,
                peptides can help individuals control their calorie intake, which can promote weight loss.</li>
              <li><strong>Energy expenditure:</strong> Amino acids and peptides can also help increase energy
                expenditure, or the number of calories the body burns at rest. For example, BCAAs and glutamine can
                help boost metabolism and increase the number of calories burned during exercise. This can help
                individuals burn more calories and lose weight more effectively.</li>
            </ul>
            <p>While amino acids and peptides can be helpful for weight loss, it is important to remember that they
              are not a magic solution. A balanced diet, regular exercise, and lifestyle changes are still the most
              effective strategies for achieving and maintaining a healthy weight.</p>

            <div className="wl-pricebox">
              <ul className="wl-pricelist">
                <li><span className="dose">Monthly</span><span className="amt">$599/month</span></li>
                <li><span className="dose">VIP Members Only</span><span className="amt">$549/month</span></li>
              </ul>
              <p className="pb-note" style={{ marginTop: 16 }}>Includes a 30 day supply of semoralin, and a months
                supply of kits for self-administration. Self-administration kits include syringes, Semoralin, Steri
                wipes and instructions on self administration.</p>
            </div>
            <div className="wl-actions">
              <button className="btn-teal" onClick={onBook}>BOOK YOUR TREATMENT</button>
            </div>
          </div>
        </div>
      </section>

      {/* ============ LIPO-MINO SKINNY SHOTS ============ */}
      <section className="wl-feature alt" id="skinny-shots">
        <div className="wl-feature-grid flip">
          <div className="wl-feature-media" data-reveal>
            <Photo src="/assets/wl-lipo-mino.png" alt="Lipo-Mino Skinny Shots" className="arch" style={{ height: 460 }} />
          </div>
          <div className="wl-feature-body" data-reveal>
            <div className="eyebrow"><span className="bar" />Vitamins &amp; Metabolism</div>
            <h2 style={{ marginTop: 16 }}>Lipo-Mino “Skinny Shots”</h2>
            <p>The Skinny Shot or Lipo-Mino combination of vitamins work together to assist your body with weight
              loss. They do this by promoting healthy metabolism, regulating appetite, and supporting energy
              production.</p>
            <p>Here are some of the vitamins in our Lipo Mino combination:</p>
            <ul className="wl-bullets">
              <li><strong>B vitamins:</strong> B vitamins, particularly vitamins B1 (thiamine), B2 (riboflavin),
                B3 (niacin), B5 (pantothenic acid), and B6 (pyridoxine), play important roles in energy metabolism.
                They help convert carbohydrates, proteins, and fats into energy that the body can use, which can
                support weight loss efforts by increasing energy expenditure.</li>
              <li><strong>Vitamin D:</strong> Vitamin D deficiency has been linked to obesity, and adequate vitamin
                D levels may support healthy weight management. Vitamin D helps regulate appetite and fat storage,
                and it can also help support healthy blood sugar levels.</li>
              <li><strong>Vitamin C:</strong> Vitamin C is an important antioxidant that can help reduce oxidative
                stress and inflammation, which can contribute to weight gain. It also plays a role in the production
                of carnitine, a compound that helps the body burn fat for energy.</li>
              <li><strong>Vitamin E:</strong> Vitamin E is another antioxidant that can help reduce oxidative stress
                and inflammation. It may also support healthy blood sugar levels and improve insulin sensitivity,
                which can be helpful for weight loss.</li>
              <li><strong>Chromium:</strong> Chromium is a mineral that plays a role in regulating blood sugar
                levels. It can help improve insulin sensitivity and reduce cravings for sugary and high-carbohydrate
                foods, which can support weight loss efforts.</li>
            </ul>

            <div className="wl-pricebox">
              <ul className="wl-pricelist">
                <li><span className="dose">Weekly RN Administered</span><span className="amt">$99</span></li>
                <li><span className="dose">Self-Administered</span><span className="amt">$49</span></li>
                <li><span className="dose">VIP Members Only</span><span className="amt">50% Off</span></li>
                <li><span className="dose">Buy 4 Skinny Shots</span><span className="amt">$99</span></li>
              </ul>
            </div>
            <div className="wl-actions">
              <button className="btn-teal" onClick={onBook}>BOOK YOUR TREATMENT</button>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SKINNY SPRAY & CREAM ============ */}
      <section className="wl-feature" id="skinny-spray">
        <div className="wl-feature-grid">
          <div className="wl-feature-media" data-reveal>
            <Photo src="/assets/wl-skinny-spray.png" alt="Skinny Spray &amp; Cream" className="arch" style={{ height: 420 }} />
          </div>
          <div className="wl-feature-body" data-reveal>
            <div className="eyebrow"><span className="bar" />Daily Support</div>
            <h2 style={{ marginTop: 16 }}>Skinny Spray &amp; Cream</h2>
            <p>In addition, we offer an oral sublingual SKINNY spray to augment the vitamins on a daily basis and a
              topical SKINNY cream which allows for the direct absorption of the vitamins to the areas you most want
              to affect.</p>

            <div className="wl-pricebox">
              <ul className="wl-pricelist">
                <li><span className="dose">Skinny Spray</span><span className="amt">$55</span></li>
                <li><span className="dose">Skinny Cream</span><span className="amt">$110</span></li>
                <li><span className="dose">Skinny Combo</span><span className="amt">$265</span></li>
              </ul>
            </div>
            <div className="wl-actions wl-buys">
              <button className="btn-gold" onClick={onBook}>BUY SKINNY CREAM $110</button>
              <button className="btn-gold" onClick={onBook}>BUY SKINNY SPRAY $55</button>
              <button className="btn-gold" onClick={onBook}>BUY SKINNY COMBO $165</button>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CONSULTATION CTA — Membership style ============ */}
      <section className="memberships" id="consult">
        <div className="member-card" data-reveal>
          <div className="b1" /><div className="b2" />
          <div className="member-inner">
            <div className="member-eyebrow">No-Cost Consultation</div>
            <h2>Ready to Start Your Weight Loss Journey?</h2>
            <p>Let's set up a no-cost consultation to discuss your goals and explore your options. SRQ Med Spa
              supports weight loss in harmony with exercise and diet.</p>
            <div className="member-actions">
              <button className="btn-white" onClick={onBook}>Schedule your consultation</button>
              <a href="tel:941-779-3004" className="link-arrow" style={{ color: '#fff' }}>Call 941·779·3004 →</a>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CLOSING — ValueStrip style ============ */}
      <section className="wl-close">
        <div className="container">
          <div className="services-head" data-reveal>
            <div className="eyebrow center"><span className="bar" />Safe, Convenient, and Personalized<span className="bar" /></div>
            <h2 className="h2" style={{ marginTop: 0 }}>With you every step of the way.</h2>
            <p>We provide all the tools and guidance you need to achieve your weight loss goals. From personalized
              consultations to easy-to-follow instructions for administering your shots at home, we're with you
              every step of the way.</p>
          </div>
        </div>
        <div className="value-grid wl-close-grid" data-reveal>
          {closeValues.map(it => (
            <div className="value-item" key={it.t}>
              <div className="ic" style={{ color: it.color }}>
                <svg viewBox="0 0 24 24" stroke="currentColor" {...vs}>{it.path}</svg>
              </div>
              <div className="t">{it.t}</div>
              <div className="d">{it.d}</div>
            </div>
          ))}
        </div>
        <div className="wl-close-cta" data-reveal>
          <button className="btn-teal" onClick={onBook}>Book your treatment</button>
          <Link to="/#services" className="link-arrow gold">Explore all treatments <span style={{ fontSize: 18 }}>→</span></Link>
        </div>
      </section>
    </main>
  )
}
