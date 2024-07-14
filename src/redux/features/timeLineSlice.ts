import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type initialState_Type = {
    searchSelect_value:string
}

const initialState:initialState_Type={
    searchSelect_value : 'code'
}


const timeLineSlice = createSlice({
    name:'timeline',
    initialState,
    reducers:{
        setSearchSelectValue:(state,action:PayloadAction<string>)=>{
            state.searchSelect_value = action.payload;
        }
    }
})


export const {setSearchSelectValue} = timeLineSlice.actions;
export default timeLineSlice.reducer;