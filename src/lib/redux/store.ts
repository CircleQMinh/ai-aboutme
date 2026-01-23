import { configureStore } from '@reduxjs/toolkit';
import { dumnmyApi } from './api/dummyApi';
import {dummyReducer } from './slices/dummySilce'

export const store = configureStore({
  reducer: {
    dumnmy: dummyReducer,
    [dumnmyApi.reducerPath]: dumnmyApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dumnmyApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
