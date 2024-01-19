import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "AuthSlice",
    initialState: {
        isAuth: {
            login: true,
            user: {},
            token: null
        }
    },
    reducers: {
        login: (state, actions) => {
            state.isAuth.user = actions.payload.isAuth;
            state.isAuth.token = actions.payload.token;
            state.isAuth.login = true;
        },
        logout: (state, actions) => {
            state.isAuth.user = {}
            state.isAuth.token = null;
            state.isAuth.login = false;
        }
    }
});
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;