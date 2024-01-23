import {createSlice} from "@reduxjs/toolkit";

const SkillSlice = createSlice({
    name: "SkillSlice",
    initialState:{
        skills: []
    },
    reducers:{
        setSkills: (state, actions)=>{
            state.skills = actions.payload
        }
    }
});
export const {setSkills} = SkillSlice.actions;

export default SkillSlice.reducer;