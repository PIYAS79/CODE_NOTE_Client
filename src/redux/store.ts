import { configureStore } from "@reduxjs/toolkit"
import baseApi from "./api/baseApi";
import timeLineReducer from './features/timeLineSlice';
import authReducer from './features/authSlice';




export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        timeline: timeLineReducer,
        auth: authReducer
    },
    devTools: true,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(baseApi.middleware),
})




export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch