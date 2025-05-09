import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface VisibilityState {
    workDetails: boolean
    educationDetails: boolean
}

const initialState: VisibilityState = {
    workDetails: false,
    educationDetails: false
}


export const visibleSlice = createSlice({
    name: 'visibility',
    initialState,
    reducers: {
        changeWorkDetails: state => {
            state.workDetails = !state.workDetails
        },
        changeEducationDetails: state => {
            state.educationDetails = !state.educationDetails
        }
    }
})


export const { changeWorkDetails, changeEducationDetails } = visibleSlice.actions
export const selectVisibility = (state: RootState) => state.visibility
export default visibleSlice.reducer

/*

import { createSlice, PayloadAction } from '@reduxjs/toolkit'



*/