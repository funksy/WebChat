import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    messages: [],
}

export const chatLogSlice = createSlice({
    name: 'chatLog',
    initialState,
    reducers: {
        initializeChatLog: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.messages = action.payload
        },
        resetChatLog: (state) => {
            state.messages = []
        },
        addChatEntry: (state, action) => {
            state.messages.push(action.payload)
        }
    },
})

// Action creators are generated for each case reducer function
export const { initializeChatLog, resetChatLog, addChatEntry } = chatLogSlice.actions

export default chatLogSlice.reducer
