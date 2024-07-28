import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action) {
            state.user = action.payload;
        },
        register(state, action) {
            state.user = action.payload;
        },
        logout(state) {
            state.user = null;
        },
    },
});

export const { login, register, logout } = authSlice.actions;

export default authSlice.reducer;
