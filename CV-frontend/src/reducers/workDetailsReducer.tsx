import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface WorkDetailsState {
    value: boolean
}

const initialState: WorkDetailsState = {
    value: false
}

export const workDetailsSlice = createSlice({
    name: 'workDetails',
    initialState,
    reducers: {
        changeWorkDetails: state => {
            state.value = !state.value
        }
    }
})

export const { changeWorkDetails } = workDetailsSlice.actions
export const selectWorkDetails = (state: RootState) => state.workDetails.value
export default workDetailsSlice.reducer