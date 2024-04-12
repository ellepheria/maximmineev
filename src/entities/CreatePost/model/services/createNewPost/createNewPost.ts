import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { fetchPosts } from 'pages/PostsPage/model/services/fetchPosts/fetchPosts';
import { useSelector } from 'react-redux';
import { Post } from '../../../../Post';
import { getAdminAuthData } from '../../../../Admin';

export const createNewPost = createAsyncThunk<
    Post,
    Post,
    ThunkConfig<string>
>(
    'createPost/createNewPost',
    async (post, thunkApi) => {
        const {
            extra, dispatch, rejectWithValue,
        } = thunkApi;

        const authData = useSelector(getAdminAuthData);

        if (!authData || !post) {
            return rejectWithValue('no data');
        }

        try {
            const response = await extra.api.post<Post>('/posts', {
                post,
            });

            if (!response.data) {
                throw new Error();
            }

            dispatch(fetchPosts());

            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
