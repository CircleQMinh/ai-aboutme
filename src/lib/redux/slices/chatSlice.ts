import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Message } from "../../../shared/types";

export interface ChatState {
  messages: Message[];
}

const initState: ChatState = {
  messages: [],
};


const chatSlice = createSlice({
    name: "ui",
    initialState: initState,
    reducers: {
      setMessages(state, action: PayloadAction<Message>) {
        if (action.payload) {
          state.messages = [...state.messages,action.payload];
        }
      },
      resetUiState: () => initState,
    },
  });
  
  export const {
    setMessages,
    resetUiState,
  } = chatSlice.actions;
  
  export const chatReducer = chatSlice.reducer;