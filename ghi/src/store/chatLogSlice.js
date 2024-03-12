import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    messages: [],
}

export const chatLogSlice = createSlice({
    name: 'chatLog',
    initialState,
    reducers: {
        initializeChatLog: (state, action) => {
            state.messages = action.payload
        },
        resetChatLog: (state) => {
            state.messages = []
        },
        addChatEntry: (state, action) => {
            state.messages.push(action.payload)
        },
    },
})

export const { initializeChatLog, resetChatLog, addChatEntry } =
    chatLogSlice.actions

export default chatLogSlice.reducer
