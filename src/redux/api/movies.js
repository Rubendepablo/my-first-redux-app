import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const headers = {
 "x-rapidapi-host": "imdb8.p.rapidapi.com",
 "x-rapidapi-key": "b30a655b45msh73504df79f1cfcep1e4c11jsncef6aa758594"
};

export const moviesApi = createApi({
 reducerPath: 'moviesApi',
 baseQuery: fetchBaseQuery({ baseUrl: 'https://imdb8.p.rapidapi.com' }),
 endpoints: (builder) => ({
  fetchMovies: builder.query({
   query: (title) => ({
    url: `/title/find?q=${title}`,
    method: 'GET',
    headers
   })
  }),
 })
});

export const { useFetchMoviesQuery } = moviesApi;