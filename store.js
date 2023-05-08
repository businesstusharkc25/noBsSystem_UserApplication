import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slices";
import userWalletApi from "./services/userWalletServices/userWalletServices";
import appContentApi from "./services/appContentServices/appContentServices";
import discussionPanelApi from "./components/sharedComponents/DiscussionPanelOverlay/services/discussionPanelServices";

export const store = configureStore({
  reducer: {
    appUser: userSlice.reducer,
    [userWalletApi.reducerPath]: userWalletApi.reducer,
    [appContentApi.reducerPath]: appContentApi.reducer,
    [discussionPanelApi.reducerPath]: discussionPanelApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      userWalletApi.middleware,
      appContentApi.middleware,
      discussionPanelApi.middleware
    ),
});
