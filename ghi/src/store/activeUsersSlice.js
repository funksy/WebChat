import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    users: [],
}

export const activeUsersSlice = createSlice({
    name: 'activeUsers',
    initialState,
    reducers: {
        initializeUsers: (state, action) => {
            state.users = action.payload
        },
        resetUsers: (state) => {
            state.users = []
        },
        modifyUsersList: (state, action) => {
            if (action.payload.status === 'connect') {
                state.users.push(action.payload.user_id)
            } else {
                state.users.splice(
                    state.users.indexOf(action.payload.user_id),
                    1
                )
            }
        },
    },
})

export const { initializeUsers, resetUsers, modifyUsersList } =
    activeUsersSlice.actions

export default activeUsersSlice.reducer
