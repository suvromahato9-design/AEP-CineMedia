import { useState, useEffect } from 'react'
import { cats, editors, services, creators, campaigns } from './data.js'

const links = [
  ['', 'Home'], ['editors', 'Explore Editors'], ['services', 'Editing Services'], ['become-editor', 'Become an Editor'],
  ['creators', 'Creator Marketplace'], ['campaigns', 'Sponsorship Campaigns'], ['become-creator', 'Become a Creator'],
  ['sponsor', 'Sponsor Registration'], ['dashboard', 'Dashboard'], ['contact', 'Contact and Support'],
]

function useHash() {
  const get = () => location.hash.replace(/^#\/?/, '')
  const [h, setH] = useState(get())
  useEffect(() => {
    const f = () => { setH(get()); window.scrollTo(0, 0) }
    addEventListener('hashchange', f)
    return () => removeEventListener('hashchange', f)
  }, [])
  return h
}

function useLoading(key) {
  const [on, setOn] = useState(true)
  useEffect(() => {
    setOn(true)
    const t = setTimeout(() => setOn(false), 600)
    return () => clearTimeout(t)
  }, [key])
  return on
}

const Loading = () => <div className="grid">{[1, 2, 3].map(i => <div key={i} className="card skel" />)}</div>
const Empty = ({ text, action }) => <div className="card center"><h3>Nothing here yet</h3><p>{text}</p>{action}</div>
const ErrorBox = ({ retry }) => (
  <div className="card center err"><h3>Something went wrong</h3><p>The demo could not load this section. Check your connection and try again.</p><button className="btn" onClick={retry}>Try again</button></div>
)
const Demo = () => <div className="demo">Demo mode: all people, prices and brands are sample data. Forms do not save or send anything.</div>
const Head = ({ title, sub }) => <div className="head"><h1>{title}</h1>{sub && <p>{sub}</p>}</div>

function Form({ title, fields, cta }) {
  const [done, setDone] = useState(false)
  if (done) return (
    <div className="card center ok"><h3>Demo form completed</h3><p>Nothing was saved or sent. A real backend will be added later.</p>
      <button className="btn ghost" onClick={() => setDone(false)}>Fill it again</button></div>
  )
  return (
    <form className="card" onSubmit={e => { e.preventDefault(); setDone(true) }}>
      <h3>{title}</h3>
      {fields.map(([label, type, opts]) => (
        <label key={label}>{label}
          {type === 'area' ? <textarea rows="4" required />
            : type === 'select' ? <select>{opts.map(o => <option key={o}>{o}</option>)}</select>
            : <input type={type} required />}
        </label>
      ))}
      <button className="btn">{cta}</button>
      <small>Demo form. Your answers are not stored.</small>
    </form>
  )
}

const Stars = ({ n }) => <span className="rate">{n.toFixed(1)} rating</span>
const Avatar = ({ name }) => <div className="av">{name.split(' ').map(w => w[0]).join('').slice(0, 2)}</div>

function EditorCard({ e }) {
  return (
    <div className="card">
      <div className="row"><Avatar name={e.name} /><div><h3>{e.name}</h3><p className="mut">{e.role}</p></div></div>
      <p>{e.bio}</p>
      <div className="row between"><span className="chip">{e.cat}</span><Stars n={e.rating} /></div>
      <div className="row between"><b>From ${e.price}</b><span className="mut">{e.days} day delivery</span></div>
      <a className="btn" href={`#/editor/${e.id}`}>View profile</a>
    </div>
  )
}

function Home() {
  return (
    <>
      <section className="hero">
        <div className="track" aria-hidden="true"><i style={{ width: '38%' }} /><i style={{ width: '22%' }} /><i style={{ width: '30%' }} /></div>
        <h1>Hire the right editor. Back the right creator.</h1>
        <p>AEP CineMedia connects clients with video editors and links creators with brands that want to sponsor them.</p>
        <div className="row wrap"><a className="btn" href="#/editors">Find an editor</a><a className="btn ghost" href="#/campaigns">Browse campaigns</a></div>
      </section>
      <Demo />
      <h2>Who is it for</h2>
      <div className="grid">
        {[['Clients', 'Post an editing request and compare editors.', 'services', 'See services'],
          ['Editors', 'List your skills and prices to win projects.', 'become-editor', 'Join as editor'],
          ['Creators', 'Find sponsors that fit your audience.', 'become-creator', 'Join as creator'],
          ['Sponsors', 'Launch a campaign and reach creators.', 'sponsor', 'Register as sponsor']].map(([t, d, to, b]) => (
          <div className="card" key={t}><h3>{t}</h3><p>{d}</p><a className="btn ghost" href={`#/${to}`}>{b}</a></div>
        ))}
      </div>
      <h2>Popular services</h2>
      <div className="grid">{services.slice(0, 3).map(s => <ServiceCard key={s.id} s={s} />)}</div>
    </>
  )
}

function Explore() {
  const [q, setQ] = useState(''), [cat, setCat] = useState('All'), [bump, setBump] = useState(0)
  const loading = useLoading(bump), [fail, setFail] = useState(false)
  const list = editors.filter(e => (cat === 'All' || e.cat === cat) && (e.name + e.role + e.bio).toLowerCase().includes(q.toLowerCase()))
  return (
    <>
      <Head title="Explore editors" sub="Search by name or skill, then filter by specialty." />
      <input className="in" placeholder="Search editors" value={q} onChange={e => setQ(e.target.value)} />
      <div className="chips">{cats.map(c => <button key={c} className={'chip' + (c === cat ? ' on' : '')} onClick={() => setCat(c)}>{c}</button>)}</div>
      {fail ? <ErrorBox retry={() => { setFail(false); setBump(b => b + 1) }} />
        : loading ? <Loading />
        : list.length ? <div className="grid">{list.map(e => <EditorCard key={e.id} e={e} />)}</div>
        : <Empty text="No editors match your search. Clear the search or pick another specialty." action={<button className="btn" onClick={() => { setQ(''); setCat('All') }}>Clear filters</button>} />}
      <button className="link" onClick={() => setFail(true)}>Preview the error state</button>
    </>
  )
}

function Profile({ id }) {
  const e = editors.find(x => x.id === id)
  if (!e) return <Empty text="That editor profile does not exist." action={<a className="btn" href="#/editors">Back to editors</a>} />
  return (
    <>
      <Head title={e.name} sub={e.role} />
      <div className="card"><div className="row between"><span className="chip">{e.cat}</span><Stars n={e.rating} /></div><p>{e.bio}</p>
        <div className="row between"><b>From ${e.price}</b><span className="mut">{e.days} day delivery</span></div></div>
      <Form title={`Request an edit from ${e.name.split(' ')[0]}`} cta="Send request" fields={[['Your name', 'text'], ['Email', 'email'], ['Project details', 'area']]} />
    </>
  )
}

function ServiceCard({ s }) {
  return (
    <div className="card"><h3>{s.title}</h3><p>{s.desc}</p>
      <div className="row between"><b>${s.price} <span className="mut">{s.unit}</span></b><span className="mut">{s.days} days</span></div>
      <a className="btn" href={`#/request/${s.id}`}>Request this service</a></div>
  )
}

function Services() {
  const loading = useLoading('s')
  return (<><Head title="Editing services" sub="Clear starting prices. Final quotes come from the editor." />
    {loading ? <Loading /> : <div className="grid">{services.map(s => <ServiceCard key={s.id} s={s} />)}</div>}</>)
}

function Request({ id }) {
  const s = services.find(x => x.id === id)
  if (!s) return <Empty text="Pick a service first." action={<a className="btn" href="#/services">See services</a>} />
  return (<><Head title={`Request: ${s.title}`} sub={`From $${s.price} ${s.unit}`} />
    <Form title="Project details" cta="Submit request" fields={[['Your name', 'text'], ['Email', 'email'], ['Video link or description', 'area'], ['Deadline', 'date']]} /></>)
}

function Creators() {
  const loading = useLoading('c')
  return (<><Head title="Creator marketplace" sub="Sample creators open to sponsorships." />
    {loading ? <Loading /> : <div className="grid">{creators.map(c => (
      <div className="card" key={c.id}><div className="row"><Avatar name={c.name} /><div><h3>{c.name}</h3><p className="mut">{c.niche}</p></div></div>
        <div className="row between"><span>{c.followers} followers</span><b>From ${c.rate}</b></div>
        <a className="btn ghost" href="#/contact">Contact creator</a></div>))}</div>}</>)
}

function Campaigns() {
  const [niche, setNiche] = useState('All'), [pick, setPick] = useState(null)
  const loading = useLoading('k')
  const ns = ['All', ...new Set(campaigns.map(c => c.niche))]
  const list = campaigns.filter(c => niche === 'All' || c.niche === niche)
  return (
    <>
      <Head title="Sponsorship campaigns" sub="Sample campaigns from made-up brands." />
      <div className="chips">{ns.map(n => <button key={n} className={'chip' + (n === niche ? ' on' : '')} onClick={() => setNiche(n)}>{n}</button>)}</div>
      {loading ? <Loading /> : list.length ? <div className="grid">{list.map(c => (
        <div className="card" key={c.id}><h3>{c.title}</h3><p className="mut">{c.brand}</p><p>{c.desc}</p>
          <div className="row between"><b>{c.budget}</b><span className="mut">Apply by {c.deadline}</span></div>
          {pick === c.id ? <div className="demo">Demo only: your interest was not sent or saved.</div>
            : <button className="btn" onClick={() => setPick(c.id)}>I am interested</button>}</div>))}</div>
        : <Empty text="No campaigns in this niche right now." action={<button className="btn" onClick={() => setNiche('All')}>Show all</button>} />}
    </>
  )
}

function Dashboard() {
  const [role, setRole] = useState('Client'), [err, setErr] = useState(false)
  const loading = useLoading(role)
  const stats = {
    Client: [['Open requests', 2], ['In progress', 1], ['Completed', 5]],
    Editor: [['New requests', 3], ['Active jobs', 2], ['Rating', '4.8']],
    Creator: [['Campaigns saved', 4], ['Interests sent', 2], ['Replies', 1]],
    Sponsor: [['Live campaigns', 2], ['Creator replies', 9], ['Budget used', '$450']],
    Admin: [['Users to review', 7], ['Reports', 1], ['Pending listings', 4]],
  }
  return (
    <>
      <Head title="Dashboard" sub="A sample view for each role. Login is not connected yet." />
      <div className="chips">{Object.keys(stats).map(r => <button key={r} className={'chip' + (r === role ? ' on' : '')} onClick={() => { setRole(r); setErr(false) }}>{r}</button>)}</div>
      {err ? <ErrorBox retry={() => setErr(false)} /> : loading ? <Loading />
        : <div className="grid">{stats[role].map(([l, v]) => <div className="card center" key={l}><div className="big">{v}</div><p className="mut">{l}</p></div>)}</div>}
      <button className="link" onClick={() => setErr(true)}>Preview the error state</button>
    </>
  )
}

const pages = {
  'become-editor': () => (<><Head title="Become an editor" sub="Tell us about your work." /><Form title="Editor application" cta="Apply as editor" fields={[['Full name', 'text'], ['Email', 'email'], ['Specialty', 'select', cats.slice(1)], ['Starting price in USD', 'number'], ['Portfolio link', 'url'], ['About you', 'area']]} /></>),
  'become-creator': () => (<><Head title="Become a creator" sub="Share your channel to get sponsor offers." /><Form title="Creator profile" cta="Join as creator" fields={[['Channel name', 'text'], ['Email', 'email'], ['Niche', 'text'], ['Audience size', 'number'], ['Channel link', 'url']]} /></>),
  sponsor: () => (<><Head title="Sponsor registration" sub="Promote your brand through creators." /><Form title="Brand details" cta="Register brand" fields={[['Brand name', 'text'], ['Contact email', 'email'], ['Website', 'url'], ['Campaign budget in USD', 'number'], ['What you want to promote', 'area']]} /></>),
  login: () => (<><Head title="Log in" sub="Login is a demo and does not check passwords." /><Form title="Welcome back" cta="Log in" fields={[['Email', 'email'], ['Password', 'password']]} /><p className="mut">New here? <a href="#/register">Create an account</a></p></>),
  register: () => (<><Head title="Create an account" sub="Registration is a demo and creates no account." /><Form title="Your details" cta="Create account" fields={[['Name', 'text'], ['Email', 'email'], ['I am a', 'select', ['Client', 'Editor', 'Creator', 'Sponsor']], ['Password', 'password']]} /></>),
  contact: () => (<><Head title="Contact and support" sub="Questions about the platform? Send us a note." /><Form title="Send a message" cta="Send message" fields={[['Name', 'text'], ['Email', 'email'], ['Topic', 'select', ['Hiring an editor', 'Sponsorships', 'Technical problem', 'Other']], ['Message', 'area']]} /></>),
}

export default function App() {
  const h = useHash(), [open, setOpen] = useState(false)
  const [p, arg] = h.split('/')
  useEffect(() => setOpen(false), [h])
  let page
  if (p === '') page = <Home />
  else if (p === 'editors') page = <Explore />
  else if (p === 'editor') page = <Profile id={arg} />
  else if (p === 'services') page = <Services />
  else if (p === 'request') page = <Request id={arg} />
  else if (p === 'creators') page = <Creators />
  else if (p === 'campaigns') page = <Campaigns />
  else if (p === 'dashboard') page = <Dashboard />
  else if (pages[p]) page = pages[p]()
  else page = <Empty text="That page does not exist." action={<a className="btn" href="#/">Go home</a>} />
  return (
    <>
      <header className="bar">
        <a className="logo" href="#/">AEP CineMedia</a>
        <button className="menu" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? 'Close' : 'Menu'}</button>
      </header>
      {open && <nav className="nav">
        {links.map(([to, l]) => <a key={to} href={`#/${to}`}>{l}</a>)}
        <a href="#/login">Log in</a><a href="#/register">Register</a>
      </nav>}
      <main>{page}</main>
      <footer>AEP CineMedia demo. Sample data only, nothing is saved.</footer>
    </>
  )
}
