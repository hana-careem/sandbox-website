/**
 * Single source of truth for Sandbox edition data.
 *
 * When Sandbox 3.0 wraps, add a new entry here — the heading becomes
 * "Three editions and counting" and a third tab appears automatically.
 * This should be the ONLY file that needs to change.
 */

const editionsData = [
  {
    id: "2.0",
    tabLabel: "Sandbox 2.0",
    year: "2025",
    school: {
      name: "St. Joseph's College, Negombo",
      todo: false,
    },
    theme: "Community Concerns",
    description:
      "Sandbox returned bigger — a national field of school teams and a full organising board.",
  },
  {
    id: "1.0",
    tabLabel: "Sandbox 1.0",
    year: "2024",
    school: {
      name: "Winning school",
      todo: true, // flip to false and set the real name when known
    },
    theme: "Sustainability",
    description:
      "The first edition that started it all, run by the founding APIIT E-Club board.",
  },
];

export default editionsData;
