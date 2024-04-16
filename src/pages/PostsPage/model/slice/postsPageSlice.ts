import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Post } from 'entities/Post';
import { SortOrder } from 'shared/types/sortOptions';
import { fetchPosts } from '../services/fetchPosts/fetchPosts';
import { PostsPageSchema } from '../types/posts';
import { PostSortField } from '../consts/postsPageConsts';

const initialState: PostsPageSchema = {
    isLoading: false,
    error: undefined,
    posts: [],

    order: 'desc',
    page: 0,
    search: '',
    sort: PostSortField.TITLE,
    hasMore: true,
    limit: 3,

    _inited: false,
};

export const postsPageSlice = createSlice({
    name: 'postsPage',
    initialState,
    reducers: {
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setOrder: (state, action: PayloadAction<SortOrder>) => {
            state.order = action.payload;
        },
        setSort: (state, action: PayloadAction<PostSortField>) => {
            state.sort = action.payload;
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
        initState: (state) => {
            state.limit = 3;
            state.page = 0;
            state._inited = true;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchPosts.fulfilled, (
                state,
                action: PayloadAction<Post[]>,
            ) => {
                state.isLoading = false;
                state.posts = action.payload;
                state._inited = true;
            })
            .addCase(fetchPosts.rejected, (
                state,
                action,
            ) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: postsPageActions } = postsPageSlice;
export const { reducer: postsPageReducer } = postsPageSlice;
