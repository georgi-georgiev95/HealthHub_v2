import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isCommentInteracted: false,
};

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        toggleIsCommentInteracted: (state) => {
            state.isCommentInteracted = !state.isCommentInteracted;
        },
    },
});

export const { toggleIsCommentInteracted } = commentsSlice.actions;

export default commentsSlice.reducer;
