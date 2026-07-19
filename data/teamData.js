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

// Past boards for the Past Editions page — no bios needed (cards don't flip there).
export const PAST_TEAMS = [
  {
    edition: 'Sandbox 3.0',
    year: '2025',
    members: [
      { name: 'Full Name', role: 'Chairperson', image: placeholderImage, linkedin: 'https://www.linkedin.com/in/username' },
      { name: 'Full Name', role: 'Co-Chairperson', image: placeholderImage, linkedin: 'https://www.linkedin.com/in/username' },
      { name: 'Full Name', role: 'Head of IT', image: placeholderImage, linkedin: 'https://www.linkedin.com/in/username' },
      { name: 'Full Name', role: 'Head of Marketing', image: placeholderImage, linkedin: 'https://www.linkedin.com/in/username' },
    ],
  },
  {
    edition: 'Sandbox 2.0',
    year: '2024',
    members: [
      { name: 'Full Name', role: 'Chairperson', image: placeholderImage, linkedin: 'https://www.linkedin.com/in/username' },
      { name: 'Full Name', role: 'Head of Communications', image: placeholderImage, linkedin: 'https://www.linkedin.com/in/username' },
      { name: 'Full Name', role: 'Head of Media', image: placeholderImage, linkedin: 'https://www.linkedin.com/in/username' },
    ],
  },
  {
    edition: 'Sandbox 1.0',
    year: '2023',
    members: [
      { name: 'Full Name', role: 'Chairperson', image: placeholderImage, linkedin: 'https://www.linkedin.com/in/username' },
      { name: 'Full Name', role: 'Head of Logistics', image: placeholderImage, linkedin: 'https://www.linkedin.com/in/username' },
    ],
  },
]
