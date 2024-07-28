import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { firebaseAuth } from '../../config/firebase';

export const verifyUserSession = createAsyncThunk('auth/verifyUserSession', async (_, { rejectWithValue }) => {
    return new Promise((resolve, reject) => {
        firebaseAuth.onAuthStateChanged(user => {
            if (user) {
                const userData = {
                    userId: user.uid,
                    email: user.email,
                    username: user.displayName,
                };
                resolve(userData);
            } else {
                resolve(null);
            }
        });
    });
});

const initialState = {
    user: null,
    loading: false,
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
    extraReducers: (builder) => {
        builder
            .addCase(verifyUserSession.pending, (state) => {
                state.loading = true;
            })
            .addCase(verifyUserSession.fulfilled, (state, action) => {
                state.user = action.payload;
                state.loading = false;
            })
            .addCase(verifyUserSession.rejected, (state) => {
                state.loading = false;
            });
    },
});

export const { login, register, logout } = authSlice.actions;

export const selectLoading = (state) => state.auth.loading;

export default authSlice.reducer;
