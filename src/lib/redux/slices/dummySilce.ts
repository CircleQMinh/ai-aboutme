import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { DummyItem } from "../../../shared/types";

export interface DummyState {
  items: DummyItem[];
}

const initState: DummyState = {
  items: [],
};

const dummySlice = createSlice({
  name: "ui",
  initialState: initState,
  reducers: {
    setItems(state, action: PayloadAction<DummyItem[] | undefined>) {
      if (action.payload) {
        state.items = action.payload;
      }
    },
    resetUiState: () => initState,
  },
});

export const {
  setItems,
  resetUiState,
} = dummySlice.actions;

export const dummyReducer = dummySlice.reducer;
