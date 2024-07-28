import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { My_Profile_Data_Type } from "../../interfaces/my.interface";

export type User_Type = {
    email: string,
    exp: number,
    role: 'STUDENT' | 'TEACHER',
    iat: number,
}

type initialState_Auth_Type = {
    user: User_Type | null,
    token: string | null,
    _id: string | null,
    me: My_Profile_Data_Type | null
}

const initialState: initialState_Auth_Type = {
    user: null,
    token: null,
    _id: null,
    me: null
}



const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<initialState_Auth_Type>) => {
            const { token, user, _id } = action.payload;
            state.token = token;
            state.user = user;
            state._id = _id;
        },
        removeUser: (state) => {
            state.token = null;
            state.user = null;
            state._id = null;
            state.me = null;
        },
        setMe: (state, action: PayloadAction<My_Profile_Data_Type>) => {
            state.me = action.payload
        }
    }
})


export const { setUser, removeUser, setMe } = authSlice.actions;
export default authSlice.reducer;