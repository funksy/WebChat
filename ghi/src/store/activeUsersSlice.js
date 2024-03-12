import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    users: [],
}

export const activeUsersSlice = createSlice({
    name: 'activeUsers',
    initialState,
    reducers: {
        initializeUsers: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.users = action.payload
        },
        resetUsers: (state) => {
            state.users = []
        },
        modifyUsersList: (state, action) => {
            if (action.payload.status === 'connect') {
                state.users.push(action.payload.user_id)
            } else {
                state.users.splice(state.users.indexOf(action.payload.user_id), 1)
            }
        }
    },
})

// Action creators are generated for each case reducer function
export const { initializeUsers, resetUsers, modifyUsersList } = activeUsersSlice.actions

export default activeUsersSlice.reducer
