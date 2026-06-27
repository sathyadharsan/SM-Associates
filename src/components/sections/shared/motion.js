// Shared scroll-reveal variant for every section in the enterprise content
// template system. One definition so future page types (industry, solution,
// platform templates) animate consistently without each section redefining it.
export const fUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 85, damping: 16 } }
};
