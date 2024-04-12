import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { fetchPosts } from 'pages/PostsPage/model/services/fetchPosts/fetchPosts';
import { Post } from '../../../../Post';
import { getAdminAuthData } from '../../../../Admin';
import { getCreatePostData } from '../../selectors/createPostSelectors';

export const createNewPost = createAsyncThunk<
    Post,
    void,
    ThunkConfig<string>
>(
    'createPost/createNewPost',
    async (_, thunkApi) => {
        const {
            extra, dispatch, rejectWithValue, getState,
        } = thunkApi;

        const authData = getAdminAuthData(getState());
        const post = getCreatePostData(getState());

        if (!authData) {
            return rejectWithValue('no data');
        }

        try {
            const response = await extra.api.post<Post>('/posts', {
                ...post,
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
