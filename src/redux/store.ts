import { configureStore } from "@reduxjs/toolkit"
import timeLineReducer from './features/timeLineSlice';

export const store = configureStore({
    reducer:{
        timeline:timeLineReducer
    },
    devTools:true
}) 




export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch