import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Admin, AdminSchema } from '../types/admin';
import { ADMIN_LOCALSTORAGE_KEY, LOCAL_STORAGE_THEME_KEY } from '../../../../shared/const/localstorage';

const initialState: AdminSchema = {};

export const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<Admin>) => {
            state.authData = action.payload;
        },
        initAuthData: (state) => {
            const admin = localStorage.getItem(ADMIN_LOCALSTORAGE_KEY);
            if (admin) {
                state.authData = JSON.parse(admin);
            }
        },
        logout: (state) => {
            state.authData = undefined;
            localStorage.removeItem(ADMIN_LOCALSTORAGE_KEY);
        },
    },
});

export const { actions: adminActions } = adminSlice;
export const { reducer: adminReducers } = adminSlice;
