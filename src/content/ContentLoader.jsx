/**
 * ContentLoader
 *
 * Top-level HOC/wrapper that resolves site content and writes it into Redux.
 *
 * ┌─────────────────────────────────────────────────────────┐
 * │  On mount                                               │
 * │  1. VITE_CONTENT_URL set?                               │
 * │     Yes → fetch (5 s timeout)                           │
 * │            OK  → deep-merge over fallback → dispatch    │
 * │            Fail→ warn + dispatch fallback               │
 * │     No  → dispatch fallback immediately                 │
 * └─────────────────────────────────────────────────────────┘
 *
 * Usage – wrapper component (recommended at app root):
 * ─────────────────────────────────────────────────────
 *   import { ContentLoader } from "@content/ContentLoader";
 *
 *   <ContentLoader>
 *     <App />
 *   </ContentLoader>
 *
 * Usage – HOC (wraps any component):
 * ───────────────────────────────────
 *   import { withContent } from "@content/ContentLoader";
 *   export default withContent(MyPage);
 */

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import fallbackContent from "./content.json";
import {
  contentLoading,
  contentSucceeded,
  contentFailed,
} from "@store/contentSlice";

// ─── Deep-merge helper ────────────────────────────────────────────────────────
// Arrays in `override` fully replace their base counterpart.

function deepMerge(base, override) {
  if (
    typeof base !== "object" ||
    base === null ||
    typeof override !== "object" ||
    override === null ||
    Array.isArray(override)
  ) {
    return override ?? base;
  }

  const result = { ...base };
  for (const key of Object.keys(override)) {
    if (
      typeof override[key] === "object" &&
      override[key] !== null &&
      !Array.isArray(override[key]) &&
      typeof base[key] === "object" &&
      base[key] !== null &&
      !Array.isArray(base[key])
    ) {
      result[key] = deepMerge(base[key], override[key]);
    } else {
      result[key] = override[key];
    }
  }
  return result;
}

// ─── Wrapper component ────────────────────────────────────────────────────────

export function ContentLoader({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const remoteUrl = import.meta.env.VITE_CONTENT_URL;

    if (!remoteUrl) {
      // No remote URL configured – commit local fallback to Redux
      dispatch(contentSucceeded({ data: fallbackContent, source: "fallback" }));
      return;
    }

    dispatch(contentLoading());

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    fetch(remoteUrl, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((remote) => {
        const merged = deepMerge(fallbackContent, remote);
        dispatch(contentSucceeded({ data: merged, source: "remote" }));
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          console.warn(
            "[ContentLoader] Remote fetch failed – using local fallback.",
            err.message,
          );
        }
        dispatch(contentFailed());
      })
      .finally(() => {
        clearTimeout(timeoutId);
      });

    return () => {
      controller.abort();
      clearTimeout(timeoutId);
    };
  }, [dispatch]);

  return children;
}

// ─── HOC variant ─────────────────────────────────────────────────────────────

/**
 * withContent(Component)
 *
 * Wraps a component so it automatically boots the content-loading effect.
 * Useful when you want to scope the loading to a specific subtree.
 *
 * const WrappedPage = withContent(MyPage);
 */
export function withContent(Component) {
  const displayName = Component.displayName || Component.name || "Component";

  function WithContent(props) {
    return (
      <ContentLoader>
        <Component {...props} />
      </ContentLoader>
    );
  }

  WithContent.displayName = `withContent(${displayName})`;
  return WithContent;
}
