/**
 * entry-client.jsx
 *
 * Browser entry point. Hydrates the server-rendered HTML using the Redux state
 * that was serialized into window.__PRELOADED_STATE__ by the Express server.
 */

import { StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";

import appReducer from "./store/appSlice";
import contentReducer from "./store/contentSlice";
import "./index.css";
import App from "./App.jsx";

// Pick up the pre-populated state injected by the server.
// Falls back to undefined so the store starts with its own initialState
// (which already has the fallback content.json baked in).
const preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__; // clean up – don't leave sensitive data on window

const store = configureStore({
  reducer: {
    app: appReducer,
    content: contentReducer,
  },
  preloadedState,
});

hydrateRoot(
  document.getElementById("root"),
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
);
