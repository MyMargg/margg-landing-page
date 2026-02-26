/**
 * entry-server.jsx
 *
 * Server-side render entry used by Express (server.js).
 * Called once per request with a fresh Redux store pre-populated with content.
 *
 * Returns:
 *   html       – renderToString output (inner div content)
 *   styleTags  – styled-components SSR style tags to inject into <head>
 *   state      – serialised Redux state for window.__PRELOADED_STATE__
 */

import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { ServerStyleSheet } from "styled-components";

import appReducer from "./store/appSlice";
import contentReducer, { contentSucceeded } from "./store/contentSlice";
import App from "./App.jsx";

export async function render(url, content) {
  // ── Fresh store per request (never share state between requests) ────────────
  const store = configureStore({
    reducer: {
      app: appReducer,
      content: contentReducer,
    },
  });

  const source = content._source ?? "fallback";
  // Strip the internal _source marker before storing
  const { _source, ...contentData } = content;
  store.dispatch(contentSucceeded({ data: contentData, source }));

  // ── styled-components SSR: collect styles generated during render ───────────
  const sheet = new ServerStyleSheet();

  try {
    const html = renderToString(
      sheet.collectStyles(
        <Provider store={store}>
          <StaticRouter location={url}>
            <App />
          </StaticRouter>
        </Provider>,
      ),
    );

    const styleTags = sheet.getStyleTags();

    return {
      html,
      styleTags,
      state: store.getState(),
    };
  } finally {
    sheet.seal();
  }
}
