import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  messageContent: '',
  submitButton: false
}

export const chatInputSlice = createSlice({
  name: 'chatInput',
  initialState,
  reducers: {
    setMessageContent: (state, action) => {
      state.messageContent = action.payload
    },
    pushButton: (state, action) => {
      state.submitButton = !state.submitButton
    }
  }
})

export const { setMessageContent, pushButton } = chatInputSlice.actions

export default chatInputSlice.reducer
