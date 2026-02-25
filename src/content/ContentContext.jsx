/**
 * useContent – reads site content from the Redux store.
 *
 * Backward-compatible drop-in for the old Context-based hook: all existing
 * component imports continue to work without any changes.
 *
 * The actual data is loaded by <ContentLoader> (src/content/ContentLoader.jsx)
 * which dispatches to the `content` Redux slice on app boot.
 *
 * Usage
 * ─────
 *   import { useContent } from "@content/ContentContext";
 *
 *   // Full content object
 *   const content = useContent();
 *
 *   // Single section
 *   const hero = useContent("hero");          // → content.hero
 *   const blocks = useContent("blocks");       // → content.blocks
 *
 * You can also import the named selectors directly for `useSelector` calls:
 *   import { selectHero } from "@store/contentSlice";
 */

import { useSelector } from "react-redux";
import { selectAllContent } from "@store/contentSlice";

/**
 * useContent(section?)
 *
 * @param {string} [section] - Optional key from the content JSON root
 *   (e.g. "navbar", "hero", "analytics", "supercharge",
 *          "joinWaitlist", "footer", "blocks")
 * @returns {object} The requested section, or the full content object.
 */
export function useContent(section) {
  const content = useSelector(selectAllContent);
  if (section) return content[section] ?? {};
  return content;
}
