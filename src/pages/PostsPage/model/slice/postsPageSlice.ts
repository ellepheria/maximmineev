import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Post } from 'entities/Post';
import { fetchPosts } from '../services/fetchPosts/fetchPosts';
import { PostsPageSchema } from '../types/posts';

const initialState: PostsPageSchema = {
    isLoading: false,
    error: undefined,
    posts: [],
    _inited: false,
};

export const postsPageSlice = createSlice({
    name: 'postsPage',
    initialState,
    reducers: {},
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
