import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { postsPageActions } from '../../slice/postsPageSlice';
import { getPostsPageHasMore, getPostsPageIsLoading, getPostsPageNum } from '../../selectors/posts';
import { fetchPosts } from '../fetchPosts/fetchPosts';

export const fetchNextPostsPage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>(
    'postsPage/fetchNextPostsPage',
    async (_, thunkApi) => {
        const { getState, dispatch } = thunkApi;
        const hasMore = getPostsPageHasMore(getState());
        const page = getPostsPageNum(getState());
        const isLoading = getPostsPageIsLoading(getState());

        if (hasMore && !isLoading) {
            dispatch(postsPageActions.setPage(page + 1));
            dispatch(fetchPosts({ replace: false }));
        }
    },
);
