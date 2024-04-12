import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getCreatePostIsLoading = (state: StateSchema) => state.createPost?.isLoading;
export const getCreatePostError = (state: StateSchema) => state.createPost?.error;
export const getCreatePostData = (state: StateSchema) => state.createPost?.data;
