import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "AuthSlice",
    initialState: {
        isAuth: {
            user: {},
            token: null
        }
    },
    reducers: {
        login: (state, actions) => {
            state.isAuth.user = actions.payload.isAuth;
            state.isAuth.token = actions.payload.token;
        },
        logout: (state, actions) => {
            state.isAuth.user = {}
            state.isAuth.token = null;
        }
    }
});
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;