import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from '../apiBaseQuery'


const baseURL = import.meta.env.VITE_CHAT_API_URL

export const chatApi = createApi({
    reducerPath: 'chatApi',
    baseQuery: axiosBaseQuery(),
    endpoints: (builder) => ({
      sendMessage: builder.mutation<string, string>({
        query: (message) => ({
          url: `${baseURL}/chat`,
          method: 'POST',
          data:  message ,
        }),
      }),
    }),
  });
  
  export const { useSendMessageMutation } = chatApi;
