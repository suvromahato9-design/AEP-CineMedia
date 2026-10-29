// ---------- New agency site data ----------
export const SITE = {
  name: 'AEP CineMedia',
  email: 'aepcinemedia@gmail.com',
  ig: 'https://www.instagram.com/suvro4u.aep/',
}

// Reference prices are the owner's own comparison figures, not independently verified.
export const mainServices = [
  { title: 'Instagram Reels Editing', note: '15 to 30 seconds', was: 399, price: 299, cta: 'Order Reel Edit' },
  { title: 'YouTube / Facebook Video Editing', note: 'Up to 3 minutes', was: 899, price: 699, cta: 'Order Video Edit' },
  { title: 'Professional Advertisement Editing', note: 'Ad edits', was: 1299, price: 999, cta: 'Create My Ad' },
]

export const moreServices = [
  { title: 'Cinematic / Bollywood Edits', price: 'Starting at ₹399' },
  { title: 'Advanced Motion Graphics', price: 'Starting at ₹799' },
  { title: 'YouTube Shorts Editing', price: 'Starting at ₹299' },
  { title: 'Thumbnail Design', price: 'Starting at ₹199' },
  { title: 'Color Grading', price: 'Starting at ₹299' },
  { title: 'Long-form Video Editing', price: 'Custom Quote' },
  { title: 'Custom Editing Projects', price: 'Contact for a quote' },
]

export const promos = [
  { title: 'Song Promotion', price: '₹499', cta: 'Promote My Song' },
  { title: 'Movie / Series Campaign', price: '₹799', cta: 'Discuss a Campaign' },
  { title: 'Other Promotional Work', price: '₹499 to ₹999', cta: 'Get a Custom Quote' },
]



const imageBase = `${import.meta.env.BASE_URL}images/`

export const reels = [
  { title: 'Jannat 2', url: 'https://www.instagram.com/reel/DWVz9jgAmMC/', image: `${imageBase}01_JANNAT_2.jpg` },
  { title: 'Gushtakh Ishq', url: 'https://www.instagram.com/reel/DYZofCHB0Sz/', image: `${imageBase}02_GUSHTAKH_ISHQ.jpg` },
  { title: 'Hate Story 2', url: 'https://www.instagram.com/reel/DVvu-o7E0hV/', image: `${imageBase}03_HATE_STORY_2.jpg` },
  { title: 'Khiladi 786', url: 'https://www.instagram.com/reel/DVql_wiE-3Y/', image: `${imageBase}04_KHILADI_786.jpg` },
  { title: 'Premanand Maharaj Ji', url: 'https://www.instagram.com/reel/DN3JGXIZnbY/', image: `${imageBase}05_PREMANAND_MAHARAJ_JI.jpg` },
  { title: 'MS Dhoni', url: 'https://www.instagram.com/reel/DLo9OsoT2hm/', image: `${imageBase}06_MS_DHONI.jpg` },
  { title: 'Dear Comrade', url: 'https://www.instagram.com/reel/DfEtO6EiJcL/', image: `${imageBase}07_DEAR_COMRADE.jpg` },
  { title: 'Sapta Sagaradaache Ello — Side B', url: 'https://www.instagram.com/reel/DfEDu-ST9GE/', image: `${imageBase}08_SAPTA_SAGARADAACHE_ELLO_SIDE_B.jpg` },
  { title: 'Malang', url: 'https://www.instagram.com/reel/De_4tBeCpIj/', image: `${imageBase}09_MALANG.jpg` },
  { title: 'Main Rahoon Ya Na Rahoon', url: 'https://www.instagram.com/reel/DcbK_1qCtwd/', image: `${imageBase}10_MAIN_RAHOON_YA_NA_RAHOON.jpg` },
  { title: 'Family Kirana Store', url: 'https://www.instagram.com/reel/Dc5dP_yCOvv/', image: `${imageBase}11_FAMILY_KIRANA_STORE.jpg` },
  { title: 'CSK × MS Dhoni', url: 'https://www.instagram.com/reel/DLsJtH2zoOI/', image: `${imageBase}12_CSK_MS_DHONI.jpg` },
]

export const why = [
  ['Creative storytelling', 'Edits built around pacing, mood and a clear story.'],
  ['Affordable options', 'Clear starting prices so you can plan your budget.'],
  ['Personalized editing', 'Your footage, your style, your brief.'],
  ['Clear communication', 'Scope and price are discussed before work begins.'],
  ['Flexible requirements', 'Have something unusual in mind? Ask for a custom quote.'],
  ['Explore before you contact', 'Watch the portfolio first, then decide.'],
]

export const steps = [
  ['Explore Services', 'Browse the editing and promotion options.'],
  ['Choose or Request a Quote', 'Pick a service or ask for a custom quote.'],
  ['Discuss Your Project', 'Share your requirements and references.'],
  ['Confirm Scope, Price and Timeline', 'Work starts only after you agree on all three.'],
]

export const faqs = [
  ['How do I order an edit?', 'Tap an order button, fill in the short brief and open the prefilled email. Your order is not confirmed until the details and price are agreed.'],
  ['Can I request a custom editing style?', 'Yes. Describe the style or share references and ask for a custom quote.'],
  ['Are the prices fixed?', 'Listed prices are starting points. Final pricing may vary with duration, complexity, revisions and project requirements.'],
  ['How do I book a song promotion?', 'Choose Promote My Song, send the details by email, and the scope, deliverables, availability and price are confirmed before the project begins.'],
  ['Can I request a movie or series campaign?', 'Yes. Use Discuss a Campaign and describe what you need. No results such as views or reach are guaranteed.'],
  ['How long will delivery take?', 'It depends on project complexity. A delivery timeline is confirmed with you before work begins.'],
  ['How can I contact the editor?', 'Email aepcinemedia@gmail.com or message on Instagram. Both are linked in the Contact section.'],
]

// ---------- Original demo marketplace data (kept so the current App.jsx still builds) ----------
export const cats = ['All', 'YouTube', 'Shorts', 'Color', 'Motion', 'Podcast', 'Cinematic']

export const editors = [
  { id: 'e1', name: 'Aarav Mehta', cat: 'YouTube', role: 'Long-form YouTube editor', rating: 4.9, price: 80, days: 3, bio: 'Retention-focused edits for tutorial and commentary channels.' },
  { id: 'e2', name: 'Sara Khan', cat: 'Shorts', role: 'Reels and Shorts specialist', rating: 4.8, price: 25, days: 1, bio: 'Fast captions, hooks and beat-synced cuts for vertical video.' },
  { id: 'e3', name: 'Diego Ramos', cat: 'Color', role: 'Colorist', rating: 4.7, price: 45, days: 2, bio: 'Film-style grades and skin-tone correction for any camera.' },
  { id: 'e4', name: 'Mei Lin', cat: 'Motion', role: 'Motion graphics artist', rating: 5.0, price: 60, days: 4, bio: 'Animated intros, lower thirds and logo stings.' },
  { id: 'e5', name: 'Noah Brooks', cat: 'Podcast', role: 'Podcast video editor', rating: 4.6, price: 50, days: 2, bio: 'Multicam cleanup plus a pack of social clips per episode.' },
  { id: 'e6', name: 'Priya Sen', cat: 'Cinematic', role: 'Cinematic storyteller', rating: 4.9, price: 120, days: 6, bio: 'Wedding, travel and brand films with natural pacing.' },
]

export const services = [
  { id: 's1', title: 'Short-form edit', price: 25, unit: 'per video', days: 1, desc: 'Vertical edit up to 60 seconds with captions.' },
  { id: 's2', title: 'YouTube video edit', price: 80, unit: 'per video', days: 3, desc: 'Cuts, music, b-roll and basic graphics up to 15 minutes.' },
  { id: 's3', title: 'Color grading', price: 45, unit: 'per video', days: 2, desc: 'Correction and a consistent look across all clips.' },
  { id: 's4', title: 'Motion graphics intro', price: 60, unit: 'per intro', days: 4, desc: 'A custom animated intro or logo sting.' },
  { id: 's5', title: 'Podcast clip pack', price: 50, unit: '5 clips', days: 2, desc: 'Five captioned highlights from one episode.' },
  { id: 's6', title: 'Cinematic highlight film', price: 120, unit: 'per film', days: 6, desc: 'A 2 to 4 minute story-driven highlight edit.' },
]

export const creators = [
  { id: 'c1', name: 'Tech with Ria', niche: 'Technology', followers: '84K', rate: 300 },
  { id: 'c2', name: 'Street Bites Daily', niche: 'Food', followers: '212K', rate: 650 },
  { id: 'c3', name: 'FitWithKabir', niche: 'Fitness', followers: '56K', rate: 220 },
  { id: 'c4', name: 'Pixel Pilgrim', niche: 'Gaming', followers: '130K', rate: 480 },
]

export const campaigns = [
  { id: 'k1', brand: 'Northlight Audio', title: 'Headphone launch reviews', budget: '$300 to $600', niche: 'Technology', deadline: '30 Nov', desc: 'Honest 60 to 90 second reviews of a new pair of headphones.' },
  { id: 'k2', brand: 'Brewline Coffee', title: 'Morning routine integrations', budget: '$150 to $400', niche: 'Food', deadline: '12 Dec', desc: 'Feature our cold brew in a daily routine video.' },
  { id: 'k3', brand: 'StrideFuel', title: 'Workout fuel challenge', budget: '$200 to $500', niche: 'Fitness', deadline: '5 Dec', desc: 'A two week challenge using our protein snacks.' },
  { id: 'k4', brand: 'Loop Games', title: 'Indie game playthrough', budget: '$250 to $700', niche: 'Gaming', deadline: '20 Dec', desc: 'A first-look playthrough with an honest verdict.' },
]
