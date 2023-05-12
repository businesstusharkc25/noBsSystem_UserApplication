import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { REACT_APP_NO_BS_SYSTEM_BASE_URL } from "@env";
import { appApiRoutes } from "../../../../data";

const discussionPanelApi = createApi({
  reducerPath: "discussionPanelApi",
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

  tagTypes: ["discussionPanel"],

  endpoints: (builder) => ({
    addComment: builder.mutation({
      query: ({ contentId, body = {} }) => {
        return {
          url: `${appApiRoutes.addCommentRoute}/${contentId}`,
          method: "POST",
          body,
        };
      },
    }),
  }),
});

export const { useAddCommentMutation } = discussionPanelApi;

export default discussionPanelApi;
