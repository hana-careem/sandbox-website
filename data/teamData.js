// src/data/teamData.js
// PLACEHOLDER ROSTER — swap names/roles/bios/links for the real Sandbox 4.0 board
// once Communications confirms them. Every member uses the shared placeholder image
// until real headshots land in assets/ (rename them sandbox-team-<name>.png).

const placeholderImage = '/assets/placeholder-image.png';

export const CATEGORIES = [
  { id: 'all', label: 'View all' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'it', label: 'IT & Development' },
  { id: 'comms', label: 'Communications' },
  { id: 'marketing', label: 'Marketing' },
  { id: 'media', label: 'Media' },
  { id: 'logistics', label: 'Logistics & Finance' },
]

// bio = the concise background shown on the card's flip side. Keep it to 2–3
// sentences: what they do on Sandbox + one line of background.
export const TEAM = [
  {
    name: 'Full Name',
    role: 'Chairperson',
    category: 'leadership',
    image: placeholderImage,
    linkedin: 'https://www.linkedin.com/in/username',
    bio: 'Leads the Sandbox 4.0 organising board, coordinating all sub-teams and the partnership with the Ministry of Education. Final-year APIIT undergraduate.',
  },
  {
    name: 'Full Name',
    role: 'Co-Chairperson',
    category: 'leadership',
    image: placeholderImage,
    linkedin: 'https://www.linkedin.com/in/username',
    bio: 'Oversees day-to-day execution across teams and school outreach for 150+ participating schools.',
  },
  {
    name: 'Full Name',
    role: 'Head of IT & Development',
    category: 'it',
    image: placeholderImage,
    linkedin: 'https://www.linkedin.com/in/username',
    bio: 'Builds and maintains the Sandbox platform — site, registrations, and infrastructure. Leads the three-person dev team.',
  },
  {
    name: 'Full Name',
    role: 'Web Developer',
    category: 'it',
    image: placeholderImage,
    linkedin: 'https://www.linkedin.com/in/username',
    bio: 'Frontend developer on the Sandbox rebuild — React, Tailwind, and the design system you are looking at.',
  },
  {
    name: 'Full Name',
    role: 'Head of Communications',
    category: 'comms',
    image: placeholderImage,
    linkedin: 'https://www.linkedin.com/in/username',
    bio: 'Runs school and sponsor communications, and the announcement pipeline from the board to participants.',
  },
  {
    name: 'Full Name',
    role: 'Head of Marketing',
    category: 'marketing',
    image: placeholderImage,
    linkedin: 'https://www.linkedin.com/in/username',
    bio: 'Owns the Sandbox brand campaigns across schools and socials, including launch and finale promotion.',
  },
  {
    name: 'Full Name',
    role: 'Head of Media',
    category: 'media',
    image: placeholderImage,
    linkedin: 'https://www.linkedin.com/in/username',
    bio: 'Leads photography, videography and post-production — gallery content, testimonial videos and event coverage.',
  },
  {
    name: 'Full Name',
    role: 'Head of Logistics & Finance',
    category: 'logistics',
    image: placeholderImage,
    linkedin: 'https://www.linkedin.com/in/username',
    bio: 'Manages venue operations, budgets and sponsor deliverables across all Sandbox events.',
  },
]

// ---------------------------------------------------------------------------
// PAST BOARDS — Past Editions page (cards don't flip there, so no bios needed).
//
// SANDBOX 1.0 roster is REAL, taken from the official Sandbox 1.0 page.
// Headshots: save photos into public/assets/ with the filenames below, then
// update `image:` values from placeholderImage to '/assets/<filename>.png'.
//
// LINKEDIN: left as '' for cards to fill in later. Cards automatically hide
// the LinkedIn link while the URL is empty.
// ---------------------------------------------------------------------------

export const PAST_TEAMS = [
  {
    edition: 'Sandbox 3.0',
    year: '2025',
    members: [
      { name: 'Methuli Perera',            role: 'President of E-Club',       image: placeholderImage, linkedin: '' },
      { name: 'Suhayla Ralick',            role: 'Chairperson',               image: placeholderImage, linkedin: '' },
      { name: 'Craleeth Gunathilake',      role: 'Chairperson',               image: placeholderImage, linkedin: '' },
      { name: 'Shevan Gomis',              role: 'Secretary',                 image: placeholderImage, linkedin: '' },
      { name: 'Dewdun Jayakody',           role: 'Asst. Secretary',           image: placeholderImage, linkedin: '' },
      { name: 'Sudeesha Fonseka',          role: 'Treasurer',                 image: placeholderImage, linkedin: '' },
      { name: 'Mukthar Riyaz',             role: 'Asst. Treasurer',           image: placeholderImage, linkedin: '' },
      { name: 'Thevnaka De Silva',         role: 'Head of Marketing',         image: placeholderImage, linkedin: '' },
      { name: 'Reema Mushtaq',             role: 'Head of Marketing',         image: placeholderImage, linkedin: '' },
      { name: 'Sunera Dhammage',           role: 'Head of Media',             image: placeholderImage, linkedin: '' },
      { name: 'Gajaanie Nandakumar',       role: 'Head of Media',             image: placeholderImage, linkedin: '' },
      { name: 'Senula Silva',              role: 'Head of Communications',    image: placeholderImage, linkedin: '' },
      { name: 'Tihara Sanulya',            role: 'Head of Communications',    image: placeholderImage, linkedin: '' },
      { name: 'Mohamed Atheek Azmy',       role: 'Head of Logistics',         image: placeholderImage, linkedin: '' },
      { name: 'Muaadh Mazloom',            role: 'Head of Logistics',         image: placeholderImage, linkedin: '' },
      { name: 'Ashok Ainkaran Jeyathasan', role: 'Head of IT',                image: placeholderImage, linkedin: '' },
      { name: 'Jason Montini Fernando',    role: 'Head of IT',                image: placeholderImage, linkedin: '' },
    ],
  },
  {
    edition: 'Sandbox 2.0',
    year: '2024',
    // TODO: 2.0 roster not published — get from club archive / Communications.
    members: [
      { name: 'Full Name', role: 'Chairperson',           image: placeholderImage, linkedin: '' },
      { name: 'Full Name', role: 'Head of Communications', image: placeholderImage, linkedin: '' },
      { name: 'Full Name', role: 'Head of Media',          image: placeholderImage, linkedin: '' },
    ],
  },
  {
    edition: 'Sandbox 1.0',
    year: '2023',
    members: [
      // headshot: public/assets/sandbox1-kavindu-wannisinghe.png
      { name: 'Kavindu Wannisinghe', role: 'Chairperson',           image: placeholderImage, linkedin: 'https://www.linkedin.com/in/kavinduisi/' },
      // headshot: public/assets/sandbox1-vidussh-gunasekera.png
      { name: 'Vidussh Gunasekera',  role: 'Chairperson',           image: placeholderImage, linkedin: 'https://www.linkedin.com/in/vidussh-gunasekera/' },
      // headshot: public/assets/sandbox1-himidiri-paranayapa.png
      { name: 'Himidiri Paranayapa', role: 'Chairperson',           image: placeholderImage, linkedin: '' },
      // headshot: public/assets/sandbox1-reema-shiyam.png
      { name: 'Reema Shiyam',        role: 'Secretary',             image: placeholderImage, linkedin: 'https://www.linkedin.com/in/reema-shiyam-266987280/' },
      // headshot: public/assets/sandbox1-piyumiji-dangalle.png
      { name: 'Piyumiji Dangalle',   role: 'Head of Marketing',     image: placeholderImage, linkedin: 'https://www.linkedin.com/in/piyumiji-dangalla-84382a212/' },
      // headshot: public/assets/sandbox1-umar-hakeem.png
      { name: 'Umar Hakeem',         role: 'Head of Marketing',     image: placeholderImage, linkedin: '' },
      // headshot: public/assets/sandbox1-shevan-gomis.png
      { name: 'Shevan Gomis',        role: 'Head of Media',         image: placeholderImage, linkedin: '' },
      // headshot: public/assets/sandbox1-rimzana-basheer.png
      { name: 'Rimzana Basheer',     role: 'Head of Media',         image: placeholderImage, linkedin: '' },
      // headshot: public/assets/sandbox1-devon-bastianz.png
      { name: 'Devon Bastianz',      role: 'Head of Logistics',     image: placeholderImage, linkedin: '' },
      // headshot: public/assets/sandbox1-thahnees-thariq.png
      { name: 'Thahnees Thariq',     role: 'Head of Logistics',     image: placeholderImage, linkedin: '' },
      // headshot: public/assets/sandbox1-amaya-fonseka.png
      { name: 'Amaya Fonseka',       role: 'Head of Communications', image: placeholderImage, linkedin: '' },
      // headshot: public/assets/sandbox1-ranudi-abeysekera.png
      { name: 'Ranudi Abeysekera',   role: 'Head of Communications', image: placeholderImage, linkedin: '' },
    ],
  },
]
