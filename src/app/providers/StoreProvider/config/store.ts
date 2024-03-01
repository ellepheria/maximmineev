import { configureStore } from '@reduxjs/toolkit';
import { adminReducers } from '../../../../entities/Admin/model/slice/adminSlice';

export function createReduxStore() {
    const rootReducers = {
        admin: adminReducers,
    };

    const store = configureStore({
        reducer: rootReducers,
        devTools: true,
    });

    return store;
}
