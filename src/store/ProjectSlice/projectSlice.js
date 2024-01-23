import { createSlice } from "@reduxjs/toolkit";

const porjectSlice  = createSlice({
    name: "ProjectSlice",
    initialState : {
        project : []
    },
    reducers :{
        setProject : (state, actions)=>{
            state.project = actions.payload;
        }
        
    }
});

export const {setProject} = porjectSlice.actions; 
export default porjectSlice.reducer;