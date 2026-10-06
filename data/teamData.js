// teamData.js
// Drop into: src/data/teamData.js
//
// PLACEHOLDER ROSTER — swap names/roles/links for the real Sandbox 4.0 board
// once Communications confirms them. Every member uses the shared placeholder image
// until real headshots land in assets/ (rename them sandbox-team-<name>.png).

const placeholderImage = '/assets/placeholder-image.png';

export const CATEGORIES = [
  { id: 'all', label: 'View all' },
  { id: 'leadership', label: 'EXCO' },
  { id: 'it', label: 'IT' },
  { id: 'comms', label: 'Communications' },
  { id: 'marketing', label: 'Marketing' },
  { id: 'media', label: 'Media' },
  { id: 'logistics', label: 'Logistics' },
]

// ---------------------------------------------------------------------------
// CURRENT COMMITTEE — SANDBOX 3.0 (the edition in progress).
// Rendered in the "Meet the Team" section under About Us, below Our History.
// Roster is REAL, from the official committee sheet. LinkedIn URLs
// are being filled in manually (cards hide the link while ''). Headshots: save
// as assets/sandbox3-<first-name>.png and swap placeholderImage per member.
// ---------------------------------------------------------------------------
export const TEAM = [
  // --- Leadership ---
  { name: 'Sudeesha Fonseka', role: 'President of E-Club', category: 'leadership', image: '/assets/sudeesha.jpeg', linkedin: 'https://www.linkedin.com/in/sudeeshafonseka/', education: 'BSc (Hons) in Business Innovation and Entrepreneurship' },
  { name: 'Maneesha Thatuwalakanda', role: 'Chairperson', category: 'leadership', image: '/assets/Maneesha-Vindani.jpeg', linkedin: 'https://www.linkedin.com/in/maneesha-thatuwalakanda-850790267' },
  { name: 'Himansa Indusara', role: 'Chairperson', category: 'leadership', image: '/assets/Himansa-.jpeg', linkedin: 'https://www.linkedin.com/in/himansa-indusara-b36310357', education:'BSc (Hons) International Business Management', objectPosition: '50% 0%' },
  { name: 'Ayodya Perera', role: 'Project Coordinator & Head of Marketing', category: ['leadership', 'marketing'], image: '/assets/Ayodya.webp', linkedin: 'https://www.linkedin.com/in/ayodya-perera-2b4527339/', education: 'BSc (Hons) Digital and Social Media Marketing', objectPosition: '50% 0%' },
  { name: 'Tyanna Franchesca Avory', role: 'Secretary', category: 'leadership', image: '/assets/Tyanna-franchesca.webp', linkedin: 'https://www.linkedin.com/in/tyanna-avory-a879a32b2', education: 'BEng (Hons) Software Engineering' },
  { name: 'Pujaa Shruti Senthilnathan', role: 'Treasurer', category: 'leadership', image: '/assets/Puja-Shrutinaathilan.webp', linkedin: 'https://www.linkedin.com/in/pujaa-shruti-senthilnathan-678790390', education:'BSc (Hons) Accounting and Finance', objectPosition: '50% 0%' },
  // linkedin: distinctive name match, but headline says Edith Cowan University —
  // confirm with Yunus directly before shipping:
  { name: 'Yunus Nuhman', role: 'Head of IT', category: 'it', image: '/assets/Yunus-Nuhman.webp', linkedin: 'https://www.linkedin.com/in/yunusnuhman/', education: 'BSc (Hons) Cyber Security and Networking' },
  // --- Heads ---
  { name: 'Nadyah Riyaz', role: 'Head of Media', category: 'media', image: '/assets/Nadyah.webp', linkedin: 'https://www.linkedin.com/in/nadyah-riyaz-9384b8290', education: 'BSc (Hons) Business Management (Digital Marketing)', objectPosition: '50% 0%' },
  { name: 'Sameeha Fahim', role: 'Head of Media', category: 'media', image: '/assets/Sameeha-fahim.webp', linkedin: 'https://www.linkedin.com/in/sameeha-fahim-819023280', education: 'BSc (Hons) Cyber Security and Networking' },
  { name: 'Nadha Rizan', role: 'Head of Communications', category: 'comms', image: '/assets/nadha-rizan.webp', linkedin: 'https://www.linkedin.com/in/nadha-rizan-077977327', education: 'BSc (Hons) International Business Management' },
  { name: 'Nevanya Nonis', role: 'Head of Communications', category: 'comms', image: '/assets/Nevanya.webp', linkedin: 'https://www.linkedin.com/in/nevanya-nonis-9088b1355', education: 'BSc (Hons) Business Management' },
  { name: 'Asna Azver', role: 'Head of Logistics', category: 'logistics', image: '/assets/Asna-Azwer.webp', linkedin: 'https://www.linkedin.com/in/asna-azver-310249365', education: 'LLB (Hons)' },
  { name: 'Burhanuddin MMB', role: 'Head of Logistics', category: 'logistics', image: '/assets/Burhan-Mansoor.webp', linkedin: 'https://www.linkedin.com/in/m-burhanuddin-m-mansoor-bharmal-09373a249', education: 'BSc (Hons) Business Management (Innovation & Entrepreneurship)' },
  // --- IT Team ---
  { name: 'Hana Careem', role: 'IT Team', category: 'it', image: '/assets/Hana-Careem.webp', linkedin: 'https://www.linkedin.com/in/hana-careem-4304b2349', education: 'BSc (Hons) Computer Science', objectPosition: '50% 0%' },
  // --- Media Team ---
  { name: 'Tuan Shaahid', role: 'Media Team', category: 'media', image: '/assets/Tuan-shaahid.webp', linkedin: 'https://www.linkedin.com/in/tuan-shaahid-rainudeen-47b705374', education: 'BSc (Hons) Computer Science', objectPosition: '50% 0%' },
  { name: 'Wanmini Dasanya', role: 'Media Team', category: 'media', image: '/assets/Dasanya.webp', linkedin: 'https://www.linkedin.com/in/dasanya-dahanayake-b09427363', education: 'BSc (Hons) International Business Management', objectPosition: '50% 0%' },
  // --- Marketing Team ---
  { name: 'Diseni Chanulya', role: 'Marketing Team', category: 'marketing', image: '/assets/Diseni-Chanulya.webp', linkedin: 'https://www.linkedin.com/in/diseni-chanulya-a0707a359', education: 'BSc (Hons) Digital and Social Media Marketing', objectPosition: '50% 0%' },
  { name: 'Vihini Linaya', role: 'Marketing Team', category: 'marketing', image: '/assets/Vihini-Linaya.webp', linkedin: 'https://www.linkedin.com/in/vihini-buddhakorala-9152043b8', education: 'BSc (Hons) Business Management',  objectPosition: '50% 0%' },
  { name: 'Umar Shafeek', role: 'Marketing Team', category: 'marketing', image: '/assets/Umar-shafeek.webp', linkedin: 'https://www.linkedin.com/in/umar-shafeek-2a50a2367', education: 'BSc (Hons) Business Management (Innovation & Entrepreneurship)', objectPosition: '50% 0%' },
  // --- Communications Team ---
  { name: 'Disenka Bosandi', role: 'Communications Team', category: 'comms', image: '/assets/Disenka-Bosandi.webp', linkedin: 'https://www.linkedin.com/in/disenka-bosandi-de-a-goonatilake-46916630a', education: 'BSc (Hons) International Business Management', objectPosition: '50% 0%' },
  { name: 'Ayuni Randeena', role: 'Communications Team', category: 'comms', image: '/assets/Ayuni-Randeena.webp', education: 'LLB (Hons)', linkedin: 'https://www.linkedin.com/in/ayuni-karunatilaka-1a2340422', objectPosition: '50% 0%' },
  { name: 'Fazeena Faiz', role: 'Communications Team', category: 'comms', image: '/assets/Fazeena-Faiz.webp', linkedin: 'https://www.linkedin.com/in/fazeena-faiz-a5999b355', education: 'BSc (Hons) International Business Management' },
  { name: 'Habilashinie Suresh Kumar', role: 'Communications Team', category: 'comms', image: '/assets/Habilashinie.webp', linkedin: 'https://www.linkedin.com/in/habilashinie-suresh-kumar-61095633a', education: 'BSc (Hons) International Business Management', objectPosition: '50% 0%' },
  { name: 'Sanuli Fernando', role: 'Communications Team', category: 'comms', image: '/assets/Sanuli-Fernando.webp', linkedin: 'https://www.linkedin.com/in/sanuli-fernando-636982347/', education: 'BSc (Hons) Psychology' },
  // --- Logistics Team ---
  { name: 'Thahnees Tariq', role: 'Logistics Team', category: 'logistics', image: '/assets/Thahnees-thaeiq.webp', linkedin: 'https://www.linkedin.com/in/thahnees-tariq-04072124b', education: 'BSc (Hons) International Business Management' },
  { name: 'Nithispranav', role: 'Logistics Team', category: 'logistics', image: '/assets/Pranav.webp', linkedin: 'https://www.linkedin.com/in/nithis-pranav-periyannen-a97990335', education: 'BSc (Hons) International Business Management', objectPosition: '50% 0%' },
  { name: 'Rakkshetha Soundararajan', role: 'Logistics Team', category: 'logistics', image: '/assets/Raksheta-.webp', linkedin: 'https://www.linkedin.com/in/rakkshetha-undefined-160347393', education: 'BSc (Hons) Business Management', objectPosition: '50% 0%' },
]
