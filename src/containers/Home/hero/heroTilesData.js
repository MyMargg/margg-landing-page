// Row 1 - 3 tiles (when one expands to 2 cols, uses 2+1+1 = 4 cols total)
export const row1Tiles = [
  {
    id: 1,
    ariaLabel: "Frontend Developer",
    title: "Frontend Developer",
    description:
      "Build modern UI with React, component systems, and responsive layouts.",
    icon: "ScrollIcon",
  },
  {
    id: 2,
    ariaLabel: "Programming Essentials",
    title: "Programming Essentials",
    description:
      "Learn core concepts, clean code, and problem-solving techniques.",
    icon: "MessageProgrammingIcon",
  },
  {
    id: 3,
    ariaLabel: "UI Design Fundamentals",
    title: "UI Design Fundamentals",
    description: "Design trends, spacing systems, and accessible UI patterns.",
    icon: "PenToolIcon",
  },
];

// Row 2 - 4 tiles (when one expands, we hide one to make 2+1+1 = 4 cols)
export const row2Tiles = [
  {
    id: 4,
    ariaLabel: "Backend Development",
    title: "Backend Development",
    description: "Server-side logic, APIs, and database management.",
    icon: "DriverIcon",
  },
  {
    id: 5,
    ariaLabel: "Database Design",
    title: "Database Design",
    description: "Data modeling, SQL, and database optimization.",
    icon: "FavoriteChartIcon",
  },
  {
    id: 6,
    ariaLabel: "Cloud & DevOps",
    title: "Cloud & DevOps",
    description: "Deploy apps, understand environments, and ship confidently.",
    icon: "CloudConnectionIcon",
  },
  {
    id: 7,
    ariaLabel: "Testing & QA",
    title: "Testing & QA",
    description: "Write quality tests and ensure reliable applications.",
    icon: "LockIcon",
  },
];

// Row 3 - 4 tiles (when one expands, we hide one to make 2+1+1 = 4 cols)
export const row3Tiles = [
  {
    id: 8,
    ariaLabel: "Security",
    title: "Security",
    description: "Learn safe patterns, auth basics, and secure-by-default UI.",
    icon: "MessageProgrammingIcon",
  },
  {
    id: 9,
    ariaLabel: "Algorithms",
    title: "Algorithms",
    description: "Problem-solving patterns and data structures.",
    icon: "PenToolIcon",
  },
  {
    id: 10,
    ariaLabel: "System Design",
    title: "System Design",
    description: "Architecture, scalability, and distributed systems.",
    icon: "FavoriteChartIcon",
  },
  {
    id: 11,
    ariaLabel: "Performance",
    title: "Performance",
    description: "Optimize load times, rendering, and user experience.",
    icon: "DriverIcon",
  },
];

/**
 * [a, b, c], 

[d, e, f, g], 

[h, i, j, k]

On Hover on [i,j] index

If i = 0 || i = 1 || i = 2
 if(max j < 3){
  // no shift required among rows - only within row
  - i = 0 - shift 1, 2 towards right, expand 0 towards right
  - i = 1 - contract 0, expand 1 towards right, shift 2 towards right
  - i = 2 - contract 0, 1 shifts towards left automatically, expand 2 towards right
 }
 else{
    // shift required among rows
    - i = 0 - shift 1, 2 towards right, shift i=3 to row j = 1, now repeat same as in case of max j < 3

  }
 * 
 * 
 */