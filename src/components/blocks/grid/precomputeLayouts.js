import { calculateInitialLayout, applyHover } from "./calculateLayout";

/**
 * Precompute all possible layout states
 * Since we have 11 items, we precompute:
 * - 1 default state (no hover)
 * - 11 hover states (one for each item)
 *
 * This eliminates runtime complexity and ensures instant transitions
 */

/**
 * Generate all precomputed layouts
 * @param {Array} itemIds - Array of all item IDs
 * @returns {Object} - Map of hoveredId -> layout state
 */
export const precomputeAllLayouts = (itemIds) => {
  const layouts = {};

  // Default layout (no hover)
  const baseLayout = calculateInitialLayout(itemIds);
  layouts["default"] = baseLayout;

  // Compute layout for each possible hover
  itemIds.forEach((itemId) => {
    layouts[itemId] = applyHover(baseLayout, itemId);
  });

  return layouts;
};

/**
 * Get layout for current hover state
 * @param {Object} precomputedLayouts - All precomputed layouts
 * @param {string|null} hoveredId - Currently hovered item ID
 * @returns {Array} - Layout state
 */
export const getLayoutForHover = (precomputedLayouts, hoveredId) => {
  const key = hoveredId || "default";
  return precomputedLayouts[key] || precomputedLayouts["default"];
};

/**
 * Default item IDs for the grid
 * Row 1: roadmap, mentorship, community (3 items)
 * Row 2: focusTimer, streaks, interviewPrep, jobBoard (4 items)
 * Row 3: projects, resume, skills, certifications (4 items)
 */
export const DEFAULT_GRID_ITEMS = [
  "roadmap",
  "mentorship",
  "community",
  "focusTimer",
  "streaks",
  "interviewPrep",
  "jobBoard",
  "projects",
  "resume",
  "skills",
  "certifications",
];
