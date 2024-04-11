import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { Post } from '../../types/post';

export const fetchPostById = createAsyncThunk<
    Post,
    string | undefined,
    ThunkConfig<string>
>(
    'post/fetchPostById',
    async (postId, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi;

        if (!postId) {
            throw new Error('No post id');
        }

        try {
            const response = await extra.api.get<Post>(`/posts/${postId}`);

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
