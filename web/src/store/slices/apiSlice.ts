import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000" }),
  endpoints: (builder) => ({
    getTests: builder.query<{ data: { id: string; name: string }[] }, object>({
      query: () => `/tests`,
    }),
  }),
});
