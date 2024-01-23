import { createSlice } from "@reduxjs/toolkit";

const EducationSlice = createSlice({
    name: "EducationSlice",
    initialState:{
        edu:[]
    },
    reducers:{
        setEdu: (state, actions)=>{
            state.edu = actions.payload
        }
    }
});

export const {setEdu} = EducationSlice.actions;
export default EducationSlice.reducer;