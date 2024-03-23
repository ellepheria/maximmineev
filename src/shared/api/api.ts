import axios from 'axios';
import { ADMIN_LOCALSTORAGE_KEY } from '../const/localstorage';

export const $api = axios.create({
    baseURL: 'http://localhost:8000',
});

$api.interceptors.request.use((config) => {
    if (config.headers) {
        config.headers.Authorization = localStorage.getItem(ADMIN_LOCALSTORAGE_KEY) || '';
    }
    return config;
});
