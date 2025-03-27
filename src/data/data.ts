export const teachers = [
  {
    id: 1,
    name: "Miquel",
    types: ["introduction", "individual", "tutoring"],
    level: ["elementary", "secondary", "mbo"],
  },
  {
    id: 2,
    name: "Jaimy",
    types: ["individual", "tutoring"],
    level: ["elementary"],
  },
];

export const subjects = [
  { id: "math", name: "Wiskunde", types: ["introduction", "individual"] },
  { id: "mathA", name: "Wiskunde A", types: ["introduction", "individual"] },
  { id: "mathB", name: "Wiskunde B", types: ["introduction", "individual"] },
  { id: "economics", name: "Economie", types: ["introduction", "individual"] },
  {
    id: "geography",
    name: "Aardrijkskunde",
    types: ["introduction", "individual"],
  },
  { id: "physics", name: "Natuurkunde", types: ["introduction", "individual"] },
  { id: "biology", name: "Biologie", types: ["introduction", "individual"] },
  {
    id: "businessEconomics",
    name: "Bedrijfseconomie",
    types: ["introduction", "individual"],
  },
  { id: "french", name: "Frans", types: ["introduction", "individual"] },
  {
    id: "english",
    name: "Engels",
    types: ["introduction", "individual", "tutoring"],
  },
  {
    id: "dutch",
    name: "Nederlands",
    types: ["introduction", "individual", "tutoring"],
  },
  {
    id: "history",
    name: "Geschiedenis",
    types: ["introduction", "individual"],
  },
  {
    id: "chemistry",
    name: "Scheikunde",
    types: ["introduction", "individual"],
  },
  { id: "calculating", name: "Rekenen", types: ["introduction", "tutoring"] },
];

export const mockLessons = [
  { id: "30", duration: 30, price: 15 },
  { id: "60", duration: 60, price: 25 },
  { id: "90", duration: 90, price: 35 },
];

export const mockAvailableDates = [
  "2025-04-01",
  "2025-04-03",
  "2025-04-05",
  "2025-04-07",
];

export const mockTimeSlots = {
  "2025-04-01": ["09:00", "10:00", "14:00"],
  "2025-04-03": ["08:00", "11:30", "15:30"],
  "2025-04-05": ["10:00", "13:00", "16:00"],
  "2025-04-07": ["09:30", "12:30", "17:30"],
};
