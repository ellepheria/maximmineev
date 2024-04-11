import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getPostsPageIsLoading = (state: StateSchema) => state.postsPage?.isLoading || false;
export const getPostsPageError = (state: StateSchema) => state.postsPage?.error || '';
export const getPostsPagePosts = (state: StateSchema) => state.postsPage?.posts || [];
