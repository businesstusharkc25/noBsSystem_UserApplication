import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { REACT_APP_NO_BS_SYSTEM_BASE_URL } from "@env";
import { appApiRoutes } from "../../data";

const appContentApi = createApi({
  reducerPath: "appContentApi",
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

  tagTypes: ["appContent"],

  endpoints: (builder) => ({
    getContent: builder.query({
      query: ({ params = {} }) => {
        return { url: appApiRoutes.getContentRoute, params: { ...params } };
      },

      providesTags: ["appContent"],
    }),

    getContentById: builder.query({
      query: ({ id }) => {
        return {
          url: `${appApiRoutes.getContentRoute}/${id}`,
        };
      },
    }),
  }),
});

export const { useGetContentQuery, useGetContentByIdQuery } = appContentApi;

export default appContentApi;
