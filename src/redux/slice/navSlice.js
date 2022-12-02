import { createSlice } from '@reduxjs/toolkit'

const initialState = 'Titles'

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        updateNav: (state, action) => {
            return state = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { updateNav } = navSlice.actions

export default navSlice.reducer