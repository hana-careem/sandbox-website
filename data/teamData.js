// teamData.js
// Drop into: src/data/teamData.js
//
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

// ---------------------------------------------------------------------------
// CURRENT COMMITTEE — SANDBOX 3.0 (the edition in progress).
// Rendered in the "Meet the Team" section under About Us, below Our History.
// Roster is REAL, from the official committee sheet. Bios are one-line stubs —
// replace with 2–3 sentence backgrounds as members send them in. LinkedIn URLs
// are being filled in manually (cards hide the link while ''). Headshots: save
// as assets/sandbox3-<first-name>.png and swap placeholderImage per member.
// ---------------------------------------------------------------------------
export const TEAM = [
  // --- Leadership ---
  { name: 'Maneesha Thatuwalakanda', role: 'Chairperson', category: 'leadership', image: placeholderImage, linkedin: '', bio: 'Co-chairs the Sandbox 3.0 organising committee.' },
  { name: 'Himansa Indusara', role: 'Chairperson', category: 'leadership', image: placeholderImage, linkedin: '', bio: 'Co-chairs the Sandbox 3.0 organising committee.' },
  { name: 'Ayodya Perera', role: 'Project Coordinator', category: 'leadership', image: placeholderImage, linkedin: '', bio: 'Coordinates the Sandbox 3.0 project across every sub-team.' },
  { name: 'Tyanna Franchesca Avory', role: 'Secretary', category: 'leadership', image: placeholderImage, linkedin: '', bio: 'Secretary of the Sandbox 3.0 organising committee.' },
  { name: 'Pujaa Shruti Senthilnathan', role: 'Treasurer', category: 'leadership', image: placeholderImage, linkedin: '', bio: 'Manages the Sandbox 3.0 budget and finances.' },
  { name: 'Yunus Nuhman', role: 'Head of IT', category: 'it', image: placeholderImage, linkedin: '', bio: 'Leads IT — the Sandbox site, registrations and infrastructure.' },
  // --- Heads ---
  { name: 'Nadyah Riyaz', role: 'Head of Media', category: 'media', image: placeholderImage, linkedin: '', bio: 'Co-leads media — photography, videography and event coverage.' },
  { name: 'Sameeha Fahim', role: 'Head of Media', category: 'media', image: placeholderImage, linkedin: '', bio: 'Co-leads media — photography, videography and event coverage.' },
  { name: 'Kulthoom Husni', role: 'Head of Marketing', category: 'marketing', image: placeholderImage, linkedin: '', bio: 'Co-leads marketing — campaigns across schools and socials.' },
  { name: 'Tharushika Gamage', role: 'Head of Marketing', category: 'marketing', image: placeholderImage, linkedin: '', bio: 'Co-leads marketing — campaigns across schools and socials.' },
  { name: 'Nadha Rizan', role: 'Head of Communications', category: 'comms', image: placeholderImage, linkedin: '', bio: 'Co-leads communications with schools, sponsors and participants.' },
  { name: 'Raveen', role: 'Head of Communications', category: 'comms', image: placeholderImage, linkedin: '', bio: 'Co-leads communications with schools, sponsors and participants.' },
  { name: 'Asna Azver', role: 'Head of Logistics', category: 'logistics', image: placeholderImage, linkedin: '', bio: 'Co-leads logistics — venues, operations and event-day flow.' },
  { name: 'Burhanuddin', role: 'Head of Logistics', category: 'logistics', image: placeholderImage, linkedin: '', bio: 'Co-leads logistics — venues, operations and event-day flow.' },
  // --- IT Team ---
  { name: 'Murad Hussain', role: 'IT Team', category: 'it', image: placeholderImage, linkedin: '', bio: 'IT team, Sandbox 3.0.' },
  { name: 'Hana Careem', role: 'IT Team', category: 'it', image: placeholderImage, linkedin: '', bio: 'IT team, Sandbox 3.0.' },
  // --- Media Team ---
  { name: 'Tuan Shaahid Rainudeen', role: 'Media Team', category: 'media', image: placeholderImage, linkedin: '', bio: 'Media team, Sandbox 3.0.' },
  { name: 'Dasanya', role: 'Media Team', category: 'media', image: placeholderImage, linkedin: '', bio: 'Media team, Sandbox 3.0.' },
  // --- Marketing Team ---
  { name: 'Diseni Chanulya Dharmadasa', role: 'Marketing Team', category: 'marketing', image: placeholderImage, linkedin: '', bio: 'Marketing team, Sandbox 3.0.' },
  { name: 'Umar Shafeek', role: 'Marketing Team', category: 'marketing', image: placeholderImage, linkedin: '', bio: 'Marketing team, Sandbox 3.0.' },
  { name: 'Thahnees Thariq', role: 'Marketing Team', category: 'marketing', image: placeholderImage, linkedin: '', bio: 'Marketing team, Sandbox 3.0. Previously Head of Logistics for Sandbox 1.0.' },
  // --- Communications Team ---
  { name: 'Bosandi de Alwis Goonatilake', role: 'Communications Team', category: 'comms', image: placeholderImage, linkedin: '', bio: 'Communications team, Sandbox 3.0.' },
  { name: 'Ayuni Randeena Karunatilaka', role: 'Communications Team', category: 'comms', image: placeholderImage, linkedin: '', bio: 'Communications team, Sandbox 3.0.' },
  { name: 'Noor Fazeena Faiz', role: 'Communications Team', category: 'comms', image: placeholderImage, linkedin: '', bio: 'Communications team, Sandbox 3.0.' },
  { name: 'Suresh Kumar Habilashinie', role: 'Communications Team', category: 'comms', image: placeholderImage, linkedin: '', bio: 'Communications team, Sandbox 3.0.' },
  { name: 'Nevanya Nonis', role: 'Communications Team', category: 'comms', image: placeholderImage, linkedin: '', bio: 'Communications team, Sandbox 3.0.' },
  { name: 'Kavindhaya Samanmali', role: 'Communications Team', category: 'comms', image: placeholderImage, linkedin: '', bio: 'Communications team, Sandbox 3.0.' },
  // --- Logistics Team ---
  { name: 'Nithispranav', role: 'Logistics Team', category: 'logistics', image: placeholderImage, linkedin: '', bio: 'Logistics team, Sandbox 3.0.' },
  { name: 'Sarith Kariyawasam', role: 'Logistics Team', category: 'logistics', image: placeholderImage, linkedin: '', bio: 'Logistics team, Sandbox 3.0.' },
  { name: 'Rakkshetha Soundararajan', role: 'Logistics Team', category: 'logistics', image: placeholderImage, linkedin: '', bio: 'Logistics team, Sandbox 3.0.' },
]

// ---------------------------------------------------------------------------
// PAST BOARDS — Past Editions page (cards don't flip there, so no bios needed).
//
// SANDBOX 1.0 roster is REAL, taken from the official Sandbox 1.0 page
// (eclub.apiit.lk, 2023). Headshots: save the 12 photos into assets/ with the
// exact filenames below (they're listed in the same order as the official
// "Meet the Sandbox Team" section), then swap `image: placeholderImage` for the
// matching import.
//
//   import kavinduImg  from '../assets/sandbox1-kavindu-wannisinghe.png'
//   ...etc — uncomment the imports block below once the files exist.
//
// LINKEDIN: left as '' for you to fill in. Ones I could pre-verify via
// Staffordshire/APIIT affiliation are filled in and marked — double-check them.
// Cards automatically hide the LinkedIn link while the URL is empty.
// ---------------------------------------------------------------------------

export const PAST_TEAMS = [
  {
    edition: 'Sandbox 2.0',
    year: '2025',
    // Executive board scraped from the OLD live site (sandbox.apiit.lk/meet_the_team).
    // Since 3.0 is the edition currently in progress, this should be the previous
    // (2.0) board — CONFIRM the edition label + year with the club before shipping,
    // then add photos + LinkedIn.
    members: [
      { name: 'Methuli Perera', role: 'President of E-Club', image: placeholderImage, linkedin: '' },
      { name: 'Suhayla Ralick', role: 'Chairperson', image: placeholderImage, linkedin: '' },
      { name: 'Craleeth Gunathilake', role: 'Chairperson', image: placeholderImage, linkedin: '' },
      { name: 'Shevan Gomis', role: 'Secretary', image: placeholderImage, linkedin: '' },
      { name: 'Dewdun Jayakody', role: 'Asst. Secretary', image: placeholderImage, linkedin: '' },
      { name: 'Sudeesha Fonseka', role: 'Treasurer', image: placeholderImage, linkedin: '' },
      { name: 'Mukthar Riyaz', role: 'Asst. Treasurer', image: placeholderImage, linkedin: '' },
      { name: 'Thevnaka De Silva', role: 'Head of Marketing', image: placeholderImage, linkedin: '' },
      { name: 'Reema Mushtaq', role: 'Head of Marketing', image: placeholderImage, linkedin: '' },
      { name: 'Sunera Dhammage', role: 'Head of Media', image: placeholderImage, linkedin: '' },
      { name: 'Gajaanie Nandakumar', role: 'Head of Media', image: placeholderImage, linkedin: '' },
      { name: 'Senula Silva', role: 'Head of Communications', image: placeholderImage, linkedin: '' },
      { name: 'Tihara Sanulya', role: 'Head of Communications', image: placeholderImage, linkedin: '' },
      { name: 'Mohamed Atheek Azmy', role: 'Head of Logistics', image: placeholderImage, linkedin: '' },
      { name: 'Muaadh Mazloom', role: 'Head of Logistics', image: placeholderImage, linkedin: '' },
      { name: 'Ashok Ainkaran Jeyathasan', role: 'Head of IT', image: placeholderImage, linkedin: '' },
      { name: 'Jason Montini Fernando', role: 'Head of IT', image: placeholderImage, linkedin: '' },
    ],
  },
  {
    edition: 'Sandbox 1.0',
    year: '2023',
    members: [
      // headshot: assets/sandbox1-kavindu-wannisinghe.png
      // linkedin pre-verified via APIIT E-Club VP + Staffordshire — double-check:
      { name: 'Kavindu Wannisinghe', role: 'Chairperson', image: '/assets/Kavindu chairperson-1.png', linkedin: 'https://www.linkedin.com/in/kavinduisi/' },
      // headshot: assets/sandbox1-vidussh-gunasekera.png
      // linkedin verified — BA Business Innovation & Entrepreneurship, Staffordshire:
      { name: 'Vidussh Gunasekera', role: 'Chairperson', image: '/assets/Vidussh chairperson-1.png', linkedin: 'https://www.linkedin.com/in/vidussh-gunasekera/' },
      // headshot: assets/sandbox1-himidiri-paranayapa.png
      { name: 'Himidiri Paranayapa', role: 'Chairperson', image: '/assets/Himidiri chairperson.png', linkedin: '' },
      // headshot: assets/sandbox1-reema-shiyam.png
      // linkedin verified — BSc Computer Science, Staffordshire + Sandbox committee:
      { name: 'Reema Shiyam', role: 'Secretary', image: '/assets/Reema  secretary.png', linkedin: 'https://www.linkedin.com/in/reema-shiyam-266987280/' },
      // headshot: assets/sandbox1-piyumiji-dangalle.png
      // linkedin likely (spelled "Dangalla" there, APIIT/APU marketing degree) — verify:
      { name: 'Piyumiji Dangalle', role: 'Head of Marketing', image: '/assets/Beenali Head of Marketing.png', linkedin: 'https://www.linkedin.com/in/piyumiji-dangalla-84382a212/' },
      // headshot: assets/sandbox1-umar-hakeem.png
      { name: 'Umar Hakeem', role: 'Head of Marketing', image: '/assets/Umar Head of Marketing.png', linkedin: '' },
      // headshot: assets/sandbox1-shevan-gomis.png
      { name: 'Shevan Gomis', role: 'Head of Media', image: '/assets/Shevan-Head of Media1.png', linkedin: '' },
      // headshot: assets/sandbox1-rimzana-basheer.png
      { name: 'Rimzana Basheer', role: 'Head of Media', image: '/assets/Rimzana Head of Media.png', linkedin: '' },
      // headshot: assets/sandbox1-devon-bastianz.png
      { name: 'Devon Bastianz', role: 'Head of Logistics', image: '/assets/Devon Head of Logistics.png', linkedin: '' },
      // headshot: assets/sandbox1-thahnees-thariq.png
      { name: 'Thahnees Thariq', role: 'Head of Logistics', image: '/assets/Thahnees Head of Logistics.png', linkedin: '' },
      // headshot: assets/sandbox1-amaya-fonseka.png
      { name: 'Amaya Fonseka', role: 'Head of Communications', image: '/assets/Amaya Head of Communications.png', linkedin: '' },
      // headshot: assets/sandbox1-ranudi-abeysekera.png
      { name: 'Ranudi Abeysekera', role: 'Head of Communications', image: '/assets/Ranudi Head of Communications.png', linkedin: '' },
    ],
  },
]
