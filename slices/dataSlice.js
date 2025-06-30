import { createSlice } from '@reduxjs/toolkit';
import { Platform } from 'react-native';

export const initialState = {
    userData: null,
    data: {},
    errors: {},
    message: '',
    loginInputs: {
        email: '',
        password: '',
        device_name: `${Platform.OS} ${Platform.Version}`,
    },
    registerInputs: {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        device_name: `${Platform.OS} ${Platform.Version}`,
    },
};

const dataSlice = createSlice({
    name: 'data',
    initialState: {
        // Example Use
        userData: initialState.userData,

    },

    reducers: {
        // Example Use
        storeUserData(state, action) {
            state.userData = action.payload;
        },

    },
});

export const { storeUserData } = dataSlice.actions;
export default dataSlice.reducer;
