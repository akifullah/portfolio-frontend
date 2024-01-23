import { createSlice } from "@reduxjs/toolkit";

const smProjectSlice  = createSlice({
    name: "SmProjectSlice",
    initialState : {
        smProject : []
    },
    reducers :{
        setSmProject : (state, actions)=>{
            state.smProject = actions.payload;
        }
        
    }
});

export const {setSmProject} = smProjectSlice.actions; 
export default smProjectSlice.reducer;