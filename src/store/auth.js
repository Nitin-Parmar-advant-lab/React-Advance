import { createSlice } from "@reduxjs/toolkit";

// we can use counter reducer for this but logically that does not make any sence

const initialAuthState = {
    isAuthenticated: false,
};

const authSlice = createSlice({
    name: "authentication",
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        },
    },
});

export const authAction = authSlice.actions;

export default authSlice.reducer;