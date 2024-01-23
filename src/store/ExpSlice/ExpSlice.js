import { createSlice } from "@reduxjs/toolkit";

const ExpSlice = createSlice({
    name: "ExpSlice",
    initialState:{
        exp:[]
    },
    reducers:{
        setExp: (state, actions)=>{
            state.exp = actions.payload
        }
    }
});

export const {setExp} = ExpSlice.actions;
export default ExpSlice.reducer;