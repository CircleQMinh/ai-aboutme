import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from '../apiBaseQuery'
import type { DummyResponse } from '../../../shared/types';

const baseURL = import.meta.env.VITE_DUMMY_API_URL

export const dumnmyApi = createApi({
  reducerPath: 'dumnmyApi',
  baseQuery: axiosBaseQuery(),
  tagTypes: ['dummy'],
  endpoints: (builder) => ({
    getDummyData: builder.query<DummyResponse, void>({
      query: () => ({
        url: `${baseURL}/products`,
        method: 'GET',
      }),
      providesTags: ['dummy'],
    }),
  }),
});

export const { useGetDummyDataQuery } = dumnmyApi;
