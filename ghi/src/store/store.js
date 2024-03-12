import { configureStore } from '@reduxjs/toolkit'
import { chatApi } from './apiSlice'

export const store = configureStore({
    reducer: {
        [chatApi.reducerPath]: chatApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(chatApi.middleware),
})
