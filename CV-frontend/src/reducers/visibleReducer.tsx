import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface VisibilityState {
    value: boolean
}

const initialState: VisibilityState = {
    value: false
}


export const visibleSlice = createSlice({
    name: 'visibility',
    initialState,
    reducers: {
        changeVisibility: state => {
            state.value = !state.value
        }
    }
})


export const { changeVisibility } = visibleSlice.actions
export const selectVisibility = (state: RootState) => state.visibility.value
export default visibleSlice.reducer

/*

import { createSlice, PayloadAction } from '@reduxjs/toolkit'



*/