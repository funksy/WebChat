import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    messageContent: '',
    submitButton: false,
}

export const chatInputSlice = createSlice({
    name: 'chatInput',
    initialState,
    reducers: {
        setMessageContent: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.messageContent = action.payload
        },
        pushButton: (state, action) => {
            state.submitButton = !state.submitButton
        },
    },
})

// Action creators are generated for each case reducer function
export const { setMessageContent, pushButton } = chatInputSlice.actions

export default chatInputSlice.reducer
