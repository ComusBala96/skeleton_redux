import { configureStore } from '@reduxjs/toolkit';
import modalSlice from './slices/modalSlice';
import dataSlice from './slices/dataSlice';
import stateSlice from './slices/stateSlice';

export const store = configureStore({
    reducer: {
        data: dataSlice,
        modal: modalSlice,
        state: stateSlice,
    },
});
