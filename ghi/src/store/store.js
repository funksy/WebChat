import { configureStore } from '@reduxjs/toolkit'
import { chatApi } from './apiSlice'
import chatLogReducer from './chatLogSlice'
import activeUsersReducer from './activeUsersSlice'



export const store = configureStore({
    reducer: {
        [chatApi.reducerPath]: chatApi.reducer,
        chatLog: chatLogReducer,
        activeUsers: activeUsersReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(chatApi.middleware),
})
