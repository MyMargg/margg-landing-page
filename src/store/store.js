// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import contentReducer from "./contentSlice";

const store = configureStore({
  reducer: {
    app: appReducer,
    content: contentReducer,
  },
});

export default store;
