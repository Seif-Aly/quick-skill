import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import { registrationReducer } from "./reducers";

export const store = configureStore({
  reducer: {
    registration: registrationReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
