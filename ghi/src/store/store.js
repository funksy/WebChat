import { configureStore } from '@reduxjs/toolkit'
import { chatApi } from './apiSlice'
import chatLogReducer from './chatLogSlice'
import activeUsersReducer from './activeUsersSlice'
import chatInputReducer from './chatInputSlice'

export const store = configureStore({
  reducer: {
    [chatApi.reducerPath]: chatApi.reducer,
    chatLog: chatLogReducer,
    activeUsers: activeUsersReducer,
    chatInput: chatInputReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(chatApi.middleware)
})
