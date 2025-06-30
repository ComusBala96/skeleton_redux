import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
    loading: false,
    sidebarOpen: false,
};

const stateSlice = createSlice({
    name: 'state',
    initialState: {
        // Example Use
        loading: initialState.loading,
    },

    reducers: {
        // Example Use
        setLoading(state, action) {
            state.loading = action.payload;
        },
        
    },
});
export const { setLoading } = stateSlice.actions;
export default stateSlice.reducer;
