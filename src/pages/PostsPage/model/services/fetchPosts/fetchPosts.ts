import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { Post } from 'entities/Post';
import {
    getPostsPageLimit, getPostsPageNum, getPostsPageSearch, getPostsPageSortField, getPostsPageSortOrder,
} from '../../selectors/posts';
import { addQueryParams } from '../../../../../shared/lib/url/addQueryParams/addQueryParams';

export const fetchPosts = createAsyncThunk<
    Post[],
    void,
    ThunkConfig<string>
>(
    'postsPage/fetchPosts',
    async (_, thunkApi) => {
        const { extra, rejectWithValue, getState } = thunkApi;
        const limit = getPostsPageLimit(getState());
        const sort = getPostsPageSortField(getState());
        const order = getPostsPageSortOrder(getState());
        const search = getPostsPageSearch(getState());
        const page = getPostsPageNum(getState());

        try {
            addQueryParams({
                sort,
                order,
                search,
            });
            const response = await extra.api.get<Post[]>('/posts', {
                params: {
                    _limit: limit,
                    _page: page,
                    _sort: sort,
                    _order: order,
                    q: search,
                },
            });

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
