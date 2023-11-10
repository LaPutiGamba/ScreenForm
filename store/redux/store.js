import { configureStore } from "@reduxjs/toolkit";
import personReducer from "./infoForm";

export const store = configureStore({
  reducer: {
    personInfoStore: personReducer,
  },
});
