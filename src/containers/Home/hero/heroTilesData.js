// Row 1 - 3 tiles (when one expands to 2 cols, uses 2+1+1 = 4 cols total)
export const row1Tiles = [
  {
    id: 1,
    ariaLabel: "Frontend Development",
    title: "Frontend Development",
    description:
      "Build modern UI with React, component systems, and responsive layouts.",
    icon: "ScrollIcon",
    slug: "frontend-development",
  },
  {
    id: 2,
    ariaLabel: "Backend Engineering",
    title: "Backend Engineering",
    description: "Server-side logic, APIs, and database management.",
    icon: "DriverIcon",
    slug: "backend-engineering",
  },
  {
    id: 3,
    ariaLabel: "UI/UX Engineering",
    title: "UI/UX Engineering",
    description: "Design trends, spacing systems, and accessible UI patterns.",
    icon: "PenToolIcon",
    slug: "ui-ux-engineering",
  },
];

// Row 2 - 4 tiles (when one expands, we hide one to make 2+1+1 = 4 cols)
export const row2Tiles = [
  {
    id: 4,
    ariaLabel: "Data Engineering",
    title: "Data Engineering",
    description: "Data modeling, pipelines, SQL, and database optimization.",
    icon: "FavoriteChartIcon",
    slug: "data-engineering",
  },
  {
    id: 5,
    ariaLabel: "Business Analytics",
    title: "Business Analytics",
    description: "Data-driven decisions, reporting, and business intelligence.",
    icon: "MessageProgrammingIcon",
    slug: "business-analytics",
  },
  {
    id: 6,
    ariaLabel: "DevOps Engineering",
    title: "DevOps Engineering",
    description: "Deploy apps, understand environments, and ship confidently.",
    icon: "CloudConnectionIcon",
    slug: "devops-engineering",
  },
  {
    id: 7,
    ariaLabel: "Cyber Security",
    title: "Cyber Security",
    description:
      "Learn safe patterns, auth basics, and secure-by-default systems.",
    icon: "LockIcon",
    slug: "cyber-security",
  },
];

/**
 * Grid layout: 2 rows × 4 columns
 * Row 1: 3 tiles, Row 2: 4 tiles = 7 roadmaps total
 *
 * On Hover: the hovered tile expands to span 2 columns.
 * If overflow occurs, items cascade to the row above.
 */
