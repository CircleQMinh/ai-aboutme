import type { RootState } from '../store';

export const selectChatMessages = (state: RootState) => state.chat.messages