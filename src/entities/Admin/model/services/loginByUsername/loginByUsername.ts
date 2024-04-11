import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { ADMIN_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { adminActions } from '../../slice/adminSlice';
import { Admin } from '../../types/admin';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<
    Admin,
    LoginByUsernameProps,
    ThunkConfig<string>
>(
    'admin/loginByUsername',
    async (authData, thunkApi) => {
        const { extra, dispatch, rejectWithValue } = thunkApi;

        try {
            const response = await extra.api.post<Admin>('/login', authData);

            if (!response.data) {
                throw new Error();
            }

            localStorage.setItem(ADMIN_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            dispatch(adminActions.setAuthData(response.data));
            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
