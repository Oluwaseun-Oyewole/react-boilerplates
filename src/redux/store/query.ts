import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../../services/endpoints';

const rawBaseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
});

// const dynamicBaseQuery: BaseQueryFn<
//   string | FetchArgs,
//   unknown,
//   FetchBaseQueryError
// > = async (args, api, extraOptions) => {
//   const urlEnd = typeof args === "string" ? args : args.url;
//   const adjustedUrl = `/${urlEnd}`;
//   const adjustedArgs =
//     typeof args === "string" ? adjustedUrl : { ...args, url: adjustedUrl };
//   return rawBaseQuery(adjustedArgs, api, extraOptions);
// };

export const TodoSlice = createApi({
  reducerPath: 'todos',
  // baseQuery: dynamicBaseQuery,
  baseQuery: rawBaseQuery,
  tagTypes: ['Todos'],
  // keepUnusedDataFor: 30,
  endpoints: (builder) => ({
    getAllTodos: builder.query({
      query: () => {
        return {
          url: `todos`,
        };
      },
      providesTags: ['Todos'],
      keepUnusedDataFor: 0,
    }),
  }),
});

export const { useGetAllTodosQuery } = TodoSlice;
