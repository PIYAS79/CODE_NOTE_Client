import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Single_Code_Type } from '../../interfaces/singleCode.interface'
import { Single_User_Type } from '../../interfaces/user.interface'




type initialState_Type = {
    selectVal: string,
    inputval: string,
    codes: Single_Code_Type[],
    users: Single_User_Type[],
}

const initialState: initialState_Type = {
    selectVal: 'code',
    inputval: '',
    codes: [],
    users: []
}


const timeLineSlice = createSlice({
    name: 'timeline',
    initialState,
    reducers: {
        setSearchSelectValue: (state, action: PayloadAction<{ selectVal: string, inputValue: string }>) => {
            state.selectVal = action.payload.selectVal;
            state.inputval = action.payload.inputValue;
        },
        setCodes: (state, action: PayloadAction<Single_Code_Type[]>) => {
            state.codes = action.payload;
        },
        setUsers: (state, action: PayloadAction<Single_User_Type[]>) => {
            state.users = action.payload;
        },

    }
})


export const { setSearchSelectValue, setCodes, setUsers } = timeLineSlice.actions;
export default timeLineSlice.reducer;