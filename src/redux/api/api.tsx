import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4001/api/v1/" }),
  endpoints: (builder) => ({
    createBook: builder.mutation({
      query: (data) => ({
        url: "books/create-book",
        method: "POST",
        body: data,
      }),
    }),
    getAllBook: builder.query({
      query: (queryParameters = {}) => {
        if (Object.keys(queryParameters).length === 0) {
          return "/books";
        }
        const queryParams = new URLSearchParams(queryParameters);
        console.log(queryParams);
        return `/books?${queryParams}`;
      },
    }),
    getSingleBook: builder.query({
      query: (id) => `/books/${id}`,
    }),
    createReviews: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `books/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
    createUser: builder.mutation({
      query: (data) => ({
        url: "/users",
        method: "POST",
        body: data,
      }),
    }),
    getSingleUser: builder.query({
      query: (email) => `/users/${email}`,
    }),
    loginUser: builder.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
    }),
    editBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `books/${id}/edit-book`,
        method: "PATCH",
        body: data,
      }),
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `books/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});
export const {
  useGetAllBookQuery,
  useGetSingleBookQuery,
  useCreateReviewsMutation,
  useCreateUserMutation,
  useGetSingleUserQuery,
  useLoginUserMutation,
  useEditBookMutation,
  useDeleteBookMutation,
  useCreateBookMutation,
} = api;
