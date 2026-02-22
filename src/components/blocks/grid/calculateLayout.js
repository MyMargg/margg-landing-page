/**
 * Pure function to calculate grid layout positions
 * Grid: 3 rows x 4 columns
 * Each item can span 1 or 2 columns
 */

/**
 * Calculate if a row has overflow
 * @param {Array} items - Items in the row
 * @returns {boolean}
 */
export const hasRowOverflow = (items) => {
  const totalSpan = items.reduce((sum, item) => sum + item.span, 0);
  return totalSpan > 4;
};

/**
 * Resolve overflow by cascading items upward
 * @param {Array} layout - Current layout state
 * @param {string} hoveredId - ID of hovered item (to determine which end to move)
 * @returns {Array} - Resolved layout
 */
export const resolveOverflow = (layout, hoveredId = null) => {
  // Group items by row
  const rowGroups = { 1: [], 2: [], 3: [] };

  layout.forEach((item) => {
    rowGroups[item.row].push(item);
  });

  // Sort items in each row by column position
  Object.keys(rowGroups).forEach((row) => {
    rowGroups[row].sort((a, b) => a.col - b.col);
  });

  // Keep resolving overflow until no more overflows exist
  let hasOverflow = true;
  while (hasOverflow) {
    hasOverflow = false;

    // Check and resolve overflow row by row (from bottom to top)
    for (let row = 3; row >= 2; row--) {
      const items = rowGroups[row];
      const totalSpan = items.reduce((sum, item) => sum + item.span, 0);

      if (totalSpan > 4) {
        // Find the hovered item's position in this row
        const hoveredIndex = items.findIndex((item) => item.id === hoveredId);

        let itemToMove;
        if (hoveredIndex !== -1) {
          // Hovered item is in this row - move from opposite end
          // If hovered item is in first half (index 0 or 1), move last item
          // If hovered item is in second half (index 2 or 3), move first item
          if (hoveredIndex <= 1) {
            itemToMove = items.pop(); // Move last item
          } else {
            itemToMove = items.shift(); // Move first item
          }
        } else {
          // No hovered item in this row, move first item by default
          itemToMove = items.shift();
        }

        itemToMove.row = row - 1;
        rowGroups[row - 1].push(itemToMove);
        hasOverflow = true;
        break; // Restart the check from bottom
      }
    }
  }

  // Recalculate column positions within each row
  const resolvedLayout = [];

  Object.keys(rowGroups).forEach((row) => {
    let currentCol = 1;
    rowGroups[row].forEach((item) => {
      resolvedLayout.push({
        ...item,
        row: parseInt(row),
        col: currentCol,
      });
      currentCol += item.span;
    });
  });

  return resolvedLayout;
};

/**
 * Apply hover to specific item
 * @param {Array} layout - Current layout
 * @param {string} hoveredId - ID of hovered item
 * @returns {Array} - New layout with hover applied
 */
export const applyHover = (layout, hoveredId) => {
  if (!hoveredId) {
    // Reset all spans to 1
    return layout.map((item) => ({ ...item, span: 1 }));
  }

  // Set hovered item span to 2, others to 1
  const updatedLayout = layout.map((item) => ({
    ...item,
    span: item.id === hoveredId ? 2 : 1,
  }));

  // Resolve any overflow, passing hoveredId to determine which end to move
  return resolveOverflow(updatedLayout, hoveredId);
};

/**
 * Calculate initial layout positions
 * @param {Array} items - Array of item IDs
 * @returns {Array} - Initial layout state
 */
export const calculateInitialLayout = (items) => {
  // Initial layout:
  // Row 1: 3 items (cols 1, 2, 3)
  // Row 2: 4 items (cols 1, 2, 3, 4)
  // Row 3: 4 items (cols 1, 2, 3, 4)

  const layout = [];
  let itemIndex = 0;

  // Row 1: 3 items
  for (let col = 1; col <= 3; col++) {
    if (itemIndex < items.length) {
      layout.push({
        id: items[itemIndex],
        row: 1,
        col: col,
        span: 1,
      });
      itemIndex++;
    }
  }

  // Row 2: 4 items
  for (let col = 1; col <= 4; col++) {
    if (itemIndex < items.length) {
      layout.push({
        id: items[itemIndex],
        row: 2,
        col: col,
        span: 1,
      });
      itemIndex++;
    }
  }

  // Row 3: 4 items
  for (let col = 1; col <= 4; col++) {
    if (itemIndex < items.length) {
      layout.push({
        id: items[itemIndex],
        row: 3,
        col: col,
        span: 1,
      });
      itemIndex++;
    }
  }

  return layout;
};
