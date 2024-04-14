import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '../../../../../app/providers/StoreProvider/config/StateSchema';
import { getPostsPageInited } from '../../selectors/posts';
import { SortOrder } from '../../../../../shared/types/sortOptions';
import { PostSortField } from '../../consts/postsPageConsts';
import { postsPageActions } from '../../slice/postsPageSlice';
import { fetchPosts } from '../fetchPosts/fetchPosts';

export const initPostsPage = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>
>(
    'postsPage/initPostsPage',
    async (searchParams, thunkApi) => {
        const { getState, dispatch } = thunkApi;
        const inited = getPostsPageInited(getState());

        if (!inited) {
            const orderFromUrl = searchParams.get('order') as SortOrder;
            const sortFromUrl = searchParams.get('sort') as PostSortField;
            const searchFromUrl = searchParams.get('search');

            if (orderFromUrl) {
                dispatch(postsPageActions.setOrder(orderFromUrl));
            }
            if (sortFromUrl) {
                dispatch(postsPageActions.setSort(sortFromUrl));
            }
            if (searchFromUrl) {
                dispatch(postsPageActions.setSearch(searchFromUrl));
            }

            dispatch(postsPageActions.initState());
            dispatch(fetchPosts());
        }
    },
);
