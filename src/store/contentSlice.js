/**
 * contentSlice
 *
 * Holds the full site-content object (strings & numbers) loaded from either a
 * remote URL or the local content.json fallback.
 *
 * Status lifecycle
 * ────────────────
 *  idle  →  loading  →  succeeded   (remote fetch OK)
 *                   └→  failed      (fetch failed, data stays as fallback)
 *
 * Selectors
 * ─────────
 * Top-level:   selectAllContent, selectContentStatus, selectContentSource
 * Per-section: selectNavbar, selectHero, selectAnalytics, selectSupercharge,
 *              selectJoinWaitlist, selectFooter, selectBlocks
 */

import { createSlice } from "@reduxjs/toolkit";
import fallbackContent from "@content/content.json";

// ─── Slice ────────────────────────────────────────────────────────────────────

const contentSlice = createSlice({
  name: "content",
  initialState: {
    /** Full content object – always valid (at minimum = fallback) */
    data: fallbackContent,
    /** 'idle' | 'loading' | 'succeeded' | 'failed' */
    status: "idle",
    /** 'fallback' | 'remote' – useful for debugging */
    source: "fallback",
  },
  reducers: {
    contentLoading(state) {
      state.status = "loading";
    },
    contentSucceeded(state, action) {
      state.data = action.payload.data;
      state.status = "succeeded";
      state.source = action.payload.source; // 'fallback' or 'remote'
    },
    contentFailed(state) {
      // Keep existing data (fallback that was set as initialState)
      state.status = "failed";
      state.source = "fallback";
    },
  },
});

export const { contentLoading, contentSucceeded, contentFailed } =
  contentSlice.actions;

export default contentSlice.reducer;

// ─── Top-level selectors ──────────────────────────────────────────────────────

export const selectAllContent = (state) => state.content.data;
export const selectContentStatus = (state) => state.content.status;
export const selectContentSource = (state) => state.content.source;

// ─── Section selectors ────────────────────────────────────────────────────────

export const selectNavbar = (state) => state.content.data.navbar ?? {};
export const selectHero = (state) => state.content.data.hero ?? {};
export const selectAnalytics = (state) => state.content.data.analytics ?? {};
export const selectSupercharge = (state) =>
  state.content.data.supercharge ?? {};
export const selectJoinWaitlist = (state) =>
  state.content.data.joinWaitlist ?? {};
export const selectFooter = (state) => state.content.data.footer ?? {};
export const selectBlocks = (state) => state.content.data.blocks ?? {};
