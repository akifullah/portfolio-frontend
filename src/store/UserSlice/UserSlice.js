import { createSlice } from "@reduxjs/toolkit";

const userSlice  = createSlice({
    name: "UserSlice",
    initialState : {
        user : {}
    },
    reducers :{
        setUser : (state, actions)=>{
            state.user = actions.payload;
        }
        
    }
});

export const {setUser} = userSlice.actions; 
export default userSlice.reducer;