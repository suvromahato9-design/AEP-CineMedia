js
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

// Rename titles freely. Each url opens the original Reel on Instagram.
export const reels = [
  'https://www.instagram.com/reel/DWVz9jgAmMC/?xtok=MWRvaHNqZ2UyNDVzNA==',
  'https://www.instagram.com/reel/DYZofCHB0Sz/?cplk=YzA4dmF2ems2dGVx',
  'https://www.instagram.com/reel/DVvu-o7E0hV/?obrf=MXU5a2d6dWFpcTQ3bQ==',
  'https://www.instagram.com/reel/DVql_wiE-3Y/?mdxt=ZDNrNDFwdXdzaXp4',
  'https://www.instagram.com/reel/DN3JGXIZnbY/?xtok=emVoYTFvY3hneXpw',
  'https://www.instagram.com/reel/DLo9OsoT2hm/?vrfl=Yzl3OHM2ZWpybmx2',
  'https://www.instagram.com/reel/DfEtO6EiJcL/?vrfl=MTRrNjY2cWVicjA4dQ==',
  'https://www.instagram.com/reel/DfEDu-ST9GE/?srtk=dHQzb3RsZG81NGFw',
  'https://www.instagram.com/reel/De_4tBeCpIj/?srtk=OGcyaG02cXU5YTlt',
  'https://www.instagram.com/reel/DcbK_1qCtwd/?obrf=MXV5bXQ5cm42b3I5NQ==',
  'https://www.instagram.com/reel/Dc5dP_yCOvv/?psln=MXZ5M3BqZWU0Nzl2',
  'https://www.instagram.com/reel/DLsJtH2zoOI/?xtok=YTYzdnE2NXk1ZDEw',
].map((url, i) => ({ title: `Edit ${String(i + 1).padStart(2, '0')}`, url }))

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
