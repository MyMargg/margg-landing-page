/**
 * Debug utilities for visualizing and testing grid layouts
 * Use these helpers in development to understand layout behavior
 */

/**
 * Visualize a layout as ASCII art
 * Useful for debugging layout states
 * @param {Array} layout - Layout state array
 * @returns {string} - ASCII representation
 */
export const visualizeLayout = (layout) => {
  // Create 3x4 grid representation
  const grid = Array(3)
    .fill(null)
    .map(() => Array(4).fill("."));

  layout.forEach((item) => {
    const row = item.row - 1; // Convert to 0-indexed
    const col = item.col - 1;
    const symbol = item.id.charAt(0).toUpperCase();

    // Mark cells occupied by this item
    for (let i = 0; i < item.span; i++) {
      if (col + i < 4) {
        grid[row][col + i] = symbol;
      }
    }
  });

  // Build string representation
  let visual = "\n";
  grid.forEach((row, idx) => {
    visual += `Row ${idx + 1}: [${row.join("][")}]\n`;
  });

  return visual;
};

/**
 * Log layout state to console
 * @param {Array} layout - Layout state
 * @param {string} label - Label for this layout
 */
export const debugLayout = (layout, label = "Layout") => {
  console.group(label);
  console.log(visualizeLayout(layout));
  console.table(
    layout.map((item) => ({
      ID: item.id,
      Row: item.row,
      Col: item.col,
      Span: item.span,
    })),
  );
  console.groupEnd();
};

/**
 * Validate layout doesn't have overflow
 * @param {Array} layout - Layout state
 * @returns {Object} - Validation result
 */
export const validateLayout = (layout) => {
  const rowGroups = { 1: [], 2: [], 3: [] };

  layout.forEach((item) => {
    rowGroups[item.row].push(item);
  });

  const errors = [];

  Object.entries(rowGroups).forEach(([row, items]) => {
    const totalSpan = items.reduce((sum, item) => sum + item.span, 0);
    if (totalSpan > 4) {
      errors.push(`Row ${row} overflow: ${totalSpan} columns (max 4)`);
    }
  });

  const isValid = errors.length === 0;

  return {
    isValid,
    errors,
    rowCapacity: {
      row1: rowGroups[1].reduce((sum, item) => sum + item.span, 0),
      row2: rowGroups[2].reduce((sum, item) => sum + item.span, 0),
      row3: rowGroups[3].reduce((sum, item) => sum + item.span, 0),
    },
  };
};

/**
 * Get layout statistics
 * @param {Array} layout - Layout state
 * @returns {Object} - Statistics
 */
export const getLayoutStats = (layout) => {
  const expandedItems = layout.filter((item) => item.span === 2);
  const rowCounts = layout.reduce((acc, item) => {
    acc[`row${item.row}`] = (acc[`row${item.row}`] || 0) + 1;
    return acc;
  }, {});

  return {
    totalItems: layout.length,
    expandedCount: expandedItems.length,
    expandedIds: expandedItems.map((item) => item.id),
    itemsPerRow: rowCounts,
  };
};

/**
 * Compare two layouts and show differences
 * @param {Array} layout1 - First layout
 * @param {Array} layout2 - Second layout
 * @returns {Array} - Array of differences
 */
export const compareLayouts = (layout1, layout2) => {
  const differences = [];

  layout1.forEach((item1) => {
    const item2 = layout2.find((i) => i.id === item1.id);

    if (!item2) {
      differences.push({ id: item1.id, type: "missing", layout: 2 });
      return;
    }

    const changes = [];
    if (item1.row !== item2.row)
      changes.push(`row: ${item1.row} → ${item2.row}`);
    if (item1.col !== item2.col)
      changes.push(`col: ${item1.col} → ${item2.col}`);
    if (item1.span !== item2.span)
      changes.push(`span: ${item1.span} → ${item2.span}`);

    if (changes.length > 0) {
      differences.push({
        id: item1.id,
        type: "changed",
        changes,
      });
    }
  });

  return differences;
};

/**
 * Export layout as JSON for testing
 * @param {Array} layout - Layout state
 * @returns {string} - JSON string
 */
export const exportLayout = (layout) => {
  return JSON.stringify(layout, null, 2);
};

// Example usage in development:
// import { debugLayout, validateLayout } from './debugUtils';
//
// const layout = applyHover(baseLayout, 'roadmap');
// debugLayout(layout, 'Roadmap Hover');
// const validation = validateLayout(layout);
// console.log('Valid?', validation.isValid);
