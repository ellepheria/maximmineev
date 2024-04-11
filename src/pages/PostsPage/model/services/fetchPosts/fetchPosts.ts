import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { Post } from 'entities/Post';

export const fetchPosts = createAsyncThunk<
    Post[],
    void,
    ThunkConfig<string>
>(
    'postsPage/fetchPosts',
    async (_, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi;

        try {
            const response = await extra.api.get<Post[]>('/posts');

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
