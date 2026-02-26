// Keep all the constants here

export const MAX_CONTENT_WIDTH = "1920px";

// Media Query Breakpoints
export const BREAKPOINTS = {
  mobile: "1000px",
  tablet: "1200px",
  desktop: "1920px",
};

// Media Query Helpers
export const MEDIA_QUERIES = {
  mobile: `@media (max-width: ${BREAKPOINTS.mobile})`,
  tablet: `@media (max-width: ${BREAKPOINTS.tablet})`,
  desktop: `@media (max-width: ${BREAKPOINTS.desktop})`,
};

// Typography
export const FONTS = {
  heading: '"Bebas Neue", sans-serif',
  body: '"Inter", sans-serif',
};
