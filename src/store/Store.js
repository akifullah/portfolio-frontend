import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./AuthSlice/authSlice";
import UserSlice from "./UserSlice/UserSlice";
import ProjectSlice from "./ProjectSlice/projectSlice";
import SkillSlice from "./SkillSlice/SkillSlice";
import EducationSlice from "./EducationSlice/EducationSlice";
import ExpSlice from "./ExpSlice/ExpSlice";
import smProjectSlice from "./SmProjectSlice/smProjectSlice";
const Store = configureStore({
    reducer: {
        auth: authSlice,
        user: UserSlice,
        project : ProjectSlice,
        smProject: smProjectSlice,
        skills : SkillSlice,
        edu : EducationSlice,
        exp : ExpSlice,
    }
});

export default Store;
