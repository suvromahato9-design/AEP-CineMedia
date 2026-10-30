import { useState, useEffect } from 'react'
import { SITE, mainServices, moreServices, promos, reels, why, steps, faqs } from './data.js'

const nav = [['services', 'Services'], ['portfolio', 'Portfolio'], ['promotions', 'Promotions'], ['about', 'About'], ['contact', 'Contact']]
const ext = { target: '_blank', rel: 'noopener noreferrer' }
const mail = (subject, body = '') => `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
const inr = n => '₹' + n.toLocaleString('en-IN')
const priceOf = s => (typeof s.price === 'number' ? inr(s.price) : s.price)
const Title = ({ k, children }) => <div className="title"><span>{k}</span><h2>{children}</h2></div>

const catalog = [{ title: 'Custom Quote', price: 'To be agreed' }, ...mainServices, ...moreServices, ...promos]

export default function App() {
  const [open, setOpen] = useState(false)
  const [svc, setSvc] = useState('Custom Quote')
  const [f, setF] = useState({ name: '', desc: '', deadline: '', budget: '' })
  const pick = title => { setSvc(title); location.hash = 'contact' }
  const set = k => e => setF({ ...f, [k]: e.target.value })
  useEffect(() => {
const cards = document.querySelectorAll(
  'section, section .card, section .steps li, section details'
)

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
      } else {
        entry.target.classList.remove('is-visible')
      }
    })
  }, {
    threshold: 0.15
  })

  cards.forEach(card => observer.observe(card))

  return () => observer.disconnect()
}, [])
  const listed = catalog.find(s => s.title === svc) || catalog[0]
  const body = [
    `Service: ${svc}`,
    `Listed price: ${priceOf(listed)}`,
    `Name: ${f.name}`,
    `Project description: ${f.desc}`,
    `Preferred deadline: ${f.deadline || 'Not specified'}`,
    `Budget: ${f.budget || 'Not specified'}`,
    '',
    'I understand this is a request and the order is not confirmed until scope, price and timeline are agreed.',
  ].join('\n')

  return (
    <div id="top">
      <div className="cinematic-loader" aria-hidden="true">
  <div className="loader-content">
    <img
      src={`${import.meta.env.BASE_URL}images/Logo.webp`}
      alt=""
    />
    <h2>AEP CINEMEDIA</h2>
    <div className="loader-line">
      <span></span>
    </div>
    <p>CREATING YOUR VISUAL EXPERIENCE</p>
  </div>
</div>
      <header className="bar">
        <a className="logo" href="#top">AEP CineMedia</a>
        <nav className={open ? 'links open' : 'links'}>
          {nav.map(([id, l]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{l}</a>)}
        </nav>
        <button className="menu" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? 'Close' : 'Menu'}</button>
      </header>

      <section className="hero">
        <div className="orb o1" /><div className="orb o2" />
        <p className="eyebrow">Video editing and creative promotion</p>
        <h1>Your Vision. Our Creativity. <em>Cinematic Results.</em></h1>
        <p className="lead">Premium video editing, creative production and promotional campaigns designed to make your content stand out.</p>
        <div className="row"><a className="btn" href="#portfolio">Explore Our Work</a><a className="btn ghost" href="#contact">Hire Me</a></div>
      </section>

      <main>
        <section id="services">
          <Title k="Services">Editing Services and Pricing</Title>
          <div className="grid">
            {mainServices.map(s => (
              <article className="card" key={s.title}>
                <h3>{s.title}</h3><p className="mut">{s.note}</p>
                <p className="was">Other-sites reference: <s>{inr(s.was)}</s></p>
                <p className="price">{inr(s.price)} <small>AEP CineMedia</small></p>
                <button className="btn" onClick={() => pick(s.title)}>{s.cta}</button>
              </article>
            ))}
          </div>
          <p className="note">Reference prices are our own comparison figures and have not been independently verified.</p>
          <h3 className="sub">More services</h3>
          <div className="grid small">
            {moreServices.map(s => (
              <button className="card tap" key={s.title} onClick={() => pick(s.title)}>
                <b>{s.title}</b><span className="mut">{s.price}</span>
              </button>
            ))}
          </div>
          <p className="note">Additional prices are suggested starting prices, not verified market rates. Final pricing may vary depending on duration, complexity, revisions, and project requirements.</p>
        </section>

        <section id="portfolio">
          <Title k="Portfolio">My Editing Portfolio</Title>
          <div className="grid small">
            {reels.map((r, i) => (
              <a className="card reel" key={r.url} href={r.url} {...ext} style={{ '--h': 250 + i * 8 }}>
                <img src={r.image} alt={r.title} loading="lazy" />
                <span className="num">{String(i + 1).padStart(2, '0')}</span>
                <b>{r.title}</b><span className="watch">Watch Edit on Instagram</span>
              </a>
            ))}
          </div>
        </section>

        <section id="promotions" className="promo">
          <Title k="Promotions">Promotions That Get Your Content Noticed</Title>
          <p className="mut">Scope, deliverables, availability and final pricing are confirmed with you before any project begins. We do not guarantee views, reach, followers, sales or viral results.</p>
          <div className="grid">
            {promos.map(s => (
              <article className="card" key={s.title}>
                <h3>{s.title}</h3><p className="price">{s.price}</p>
                <button className="btn" onClick={() => pick(s.title)}>{s.cta}</button>
              </article>
            ))}
          </div>
        </section>

        <section id="about">
          <Title k="About">Meet the Creator Behind AEP CineMedia</Title>
          <div className="card about">
            <div className="photo">
  <img src={`${import.meta.env.BASE_URL}images/Logo.webp`} alt="AEP CineMedia Logo" />
</div>
            <div>
              <h3>Suvro Mahato</h3><p className="mut">Founder, Developer &amp; Video Editor</p>
              <p>A passionate video editor and digital creator focused on cinematic storytelling, creative visuals, and engaging content. AEP CineMedia brings together editing services and promotional opportunities in one creative space.</p>
              <div className="row"><a className="btn ghost" href={SITE.ig} {...ext}>Instagram</a><a className="btn ghost" href={mail('Hello AEP CineMedia')}>Email</a></div>
            </div>
          </div>
        </section>

        <section>
          <Title k="Why us">Why Choose AEP CineMedia?</Title>
          <div className="grid">{why.map(([t, d]) => <article className="card" key={t}><h3>{t}</h3><p className="mut">{d}</p></article>)}</div>
        </section>

        <section>
          <Title k="Process">How It Works</Title>
          <ol className="steps">{steps.map(([t, d], i) => <li className="card" key={t}><span className="num">{i + 1}</span><div><b>{t}</b><p className="mut">{d}</p></div></li>)}</ol>
          <p className="note">An order is not confirmed until the project details and pricing are agreed.</p>
        </section>

        <section id="contact">
          <Title k="Contact">Contact and Order Requests</Title>
          <div className="row">
            <a className="btn" href={mail('Hello AEP CineMedia')}>Contact via Email</a>
            <a className="btn ghost" href={SITE.ig} {...ext}>Message on Instagram</a>
            <button className="btn ghost" onClick={() => pick('Custom Quote')}>Request a Custom Quote</button>
          </div>
          <p className="mut">{SITE.email}</p>
          <div className="card form">
            <h3>Prepare your request</h3>
            <p className="mut">This opens your own email app with the details filled in. Nothing is sent or saved by this website, and no order exists until we agree on the project.</p>
            <label>Service<select value={svc} onChange={e => setSvc(e.target.value)}>{catalog.map(o => <option key={o.title}>{o.title}</option>)}</select></label>
            <p className="note">Listed price: {priceOf(listed)}</p>
            <label>Your name<input value={f.name} onChange={set('name')} /></label>
            <label>Project description<textarea rows="4" value={f.desc} onChange={set('desc')} /></label>
            <label>Preferred deadline<input value={f.deadline} onChange={set('deadline')} placeholder="Optional" /></label>
            <label>Budget<input value={f.budget} onChange={set('budget')} placeholder="Optional" /></label>
            <a className="btn" href={mail(`${svc} request`, body)}>Open Email App</a>
          </div>
        </section>

        <section id="faq">
          <Title k="FAQ">Questions</Title>
          {faqs.map(([q, a]) => <details className="card" key={q}><summary>{q}</summary><p className="mut">{a}</p></details>)}
        </section>
      </main>

      <footer>
        <b className="logo">AEP CineMedia</b><p>Creative Editing. Cinematic Impact.</p>
        <div className="row center">
          <a href="#top">Home</a>{nav.map(([id, l]) => <a key={id} href={`#${id}`}>{l}</a>)}
        </div>
        <p><a href={SITE.ig} {...ext}>Instagram</a> · <a href={mail('Hello AEP CineMedia')}>{SITE.email}</a></p>
        <small>© {new Date().getFullYear()} AEP CineMedia. Designed &amp; Developed by Suvro Mahato</small>
      </footer>
    </div>
  )
}
