import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4001/api/v1/" }),
  endpoints: (builder) => ({
    getAllBook: builder.query({
      query: () => "/books",
    }),
    getSingleBook: builder.query({
      query: (id) => `/books/${id}`,
    }),
    createReviews: builder.mutation({
      query: ({ id,...data }) => ({
        url: `books/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
  }),
});
export const { useGetAllBookQuery, useGetSingleBookQuery ,useCreateReviewsMutation} = api;
