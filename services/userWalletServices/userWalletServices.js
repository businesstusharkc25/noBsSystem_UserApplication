import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { REACT_APP_NO_BS_SYSTEM_BASE_URL } from "@env";
import { appApiRoutes } from "../../data";

const userWalletApi = createApi({
  reducerPath: "userWalletApi",
  baseQuery: fetchBaseQuery({
    prepareHeaders: (headers, { getState }) => {
      const token = getState().appUser.token;

      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
    baseUrl: REACT_APP_NO_BS_SYSTEM_BASE_URL,
  }),
  tagTypes: ["userWallet"],

  endpoints: (builder) => ({
    connectUserWallet: builder.mutation({
      query: (userWalletAddress) => ({
        url: appApiRoutes.appConnectWalletRoute,
        method: "POST",
        body: userWalletAddress,
      }),
      invalidatesTags: ["userWallet"],
    }),
  }),
});

export const { useConnectUserWalletMutation } = userWalletApi;

export default userWalletApi;
