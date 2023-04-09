import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slices";

export const store = configureStore({
  reducer: {
    appUser: userSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});
