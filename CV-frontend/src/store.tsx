import { configureStore } from '@reduxjs/toolkit'

import visibleReducer from './reducers/visibleReducer';

export const store = configureStore({
    reducer: {
        visibility: visibleReducer,
    }
})

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
