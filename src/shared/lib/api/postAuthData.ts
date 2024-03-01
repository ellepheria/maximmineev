import axios from 'axios';
import { Dispatch } from '@reduxjs/toolkit';
import { baseUrl } from '../../const/api';
import { Admin } from '../../../entities/Admin';
import { ADMIN_LOCALSTORAGE_KEY } from '../../const/localstorage';
import { adminActions } from '../../../entities/Admin/model/slice/adminSlice';

interface postAuthDataArgs {
	authData: {
		username: string,
		password: string,
	};
	dispatch: Dispatch;
}

export async function postAuthData({ authData, dispatch }: postAuthDataArgs) {
    const url = `${baseUrl}/login`;

    try {
        const response = await axios.post<Admin>(
            url,
            authData,
        );

        if (!response.data) {
            console.log('empty');
        }

        localStorage.setItem(
            ADMIN_LOCALSTORAGE_KEY,
            JSON.stringify(response.data),
        );
        dispatch(adminActions.setAuthData(response.data));
    } catch (e) {
        console.log(e);
    }
}
