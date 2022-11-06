import { configureStore } from "@reduxjs/toolkit";
import reduxLogger from "redux-logger";

export const store = configureStore({
  reducer: {},
  middleware: [reduxLogger],
  //   middleware: (getDefaultMiddleware) => {
  // getDefaultMiddleware().concat(reduxLogger);
  //   },
});
