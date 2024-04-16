import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { Post } from 'entities/Post';
import { addQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams';
import {
    getPostsPageData,
    getPostsPageLimit, getPostsPageNum, getPostsPageSearch, getPostsPageSortField, getPostsPageSortOrder,
} from '../../selectors/posts';

interface FetchPostsProps {
    replace: boolean;
}

export const fetchPosts = createAsyncThunk<
    Post[],
    FetchPostsProps,
    ThunkConfig<string>
>(
    'postsPage/fetchPosts',
    async (props, thunkApi) => {
        const { extra, rejectWithValue, getState } = thunkApi;
        const limit = getPostsPageLimit(getState());
        const sort = getPostsPageSortField(getState());
        const order = getPostsPageSortOrder(getState());
        const search = getPostsPageSearch(getState());
        const page = getPostsPageNum(getState());
        const posts = getPostsPageData(getState());

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

            if (props.replace) {
                return response.data;
            }
            return [...posts, ...response.data];
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
