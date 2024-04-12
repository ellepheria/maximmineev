import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CreatePostSchema } from '../types/createPost';
import { createNewPost } from '../services/createNewPost/createNewPost';
import { Post, PostBlock } from '../../../Post';

const initialState: CreatePostSchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
};

export const createPostSlice = createSlice({
    name: 'createPost',
    initialState,
    reducers: {
        updatePost: (state, action: PayloadAction<Post>) => {
            state.data = {
                ...state.data,
                ...action.payload,
            };
        },
        addBlock: (state, action: PayloadAction<PostBlock>) => {
            state.data?.blocks?.push(action.payload);
        },
        deleteBlock: (state, action: PayloadAction<PostBlock>) => {
            if (state.data?.blocks) {
                state.data.blocks = state.data.blocks.filter(
                    (block) => block.id !== action.payload.id,
                );
            }
        },
        clearPost: (state) => {
            state.data = undefined;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(createNewPost.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(createNewPost.fulfilled, (
                state,
            ) => {
                state.isLoading = false;
                state.data = undefined;
            })
            .addCase(createNewPost.rejected, (
                state,
                action,
            ) => {
                state.isLoading = false;
                state.error = action.payload as string;
            });
    },
});

export const { actions: createPostActions } = createPostSlice;
export const { reducer: createPostReducer } = createPostSlice;
