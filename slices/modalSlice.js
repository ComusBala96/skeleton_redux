import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
    newsShareModal: false,
};
const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        // Example Use
        newsShareModal: initialState.newsShareModal,
    },
    reducers: {
        // Example Use
        storeNewsShareModal(state, action) {
            state.newsShareModal = action.payload;
        },
    },
});

export const { storeNewsShareModal } = modalSlice.actions;
export default modalSlice.reducer;
