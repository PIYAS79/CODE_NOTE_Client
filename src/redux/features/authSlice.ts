import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type User_Type = {
    email: string,
    exp: number,
    role: 'STUDENT' | 'TEACHER',
    iat: number
}

type initialState_Auth_Type = {
    user: User_Type | null,
    token: string | null
}

const initialState: initialState_Auth_Type = {
    user: null,
    token: null
}



const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<initialState_Auth_Type>) => {
            const { token, user } = action.payload;
            state.token = token;
            state.user = user;
        },
        removeUser:(state)=>{
            state.token = null;
            state.user = null;
        }
    }
})


export const {setUser,removeUser} = authSlice.actions;
export default authSlice.reducer;