import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { PostSortField } from '../consts/postsPageConsts';

export const getPostsPageIsLoading = (state: StateSchema) => state.postsPage?.isLoading || false;
export const getPostsPageError = (state: StateSchema) => state.postsPage?.error || '';
export const getPostsPageData = (state: StateSchema) => state.postsPage?.posts || [];
export const getPostsPageSortOrder = (state: StateSchema) => state.postsPage?.order || 'asc';
export const getPostsPageSortField = (state: StateSchema) => state.postsPage?.sort || PostSortField.TITLE;
export const getPostsPageSearch = (state: StateSchema) => state.postsPage?.search || '';
export const getPostsPagePosts = (state: StateSchema) => state.postsPage?.posts || [];
export const getPostsPageInited = (state: StateSchema) => state.postsPage?.posts || false;
export const getPostsPageNum = (state: StateSchema) => state.postsPage?.page || 0;
export const getPostsPageLimit = (state: StateSchema) => state.postsPage?.limit || 9;
export const getPostsPageHasMore = (state: StateSchema) => state.postsPage?.hasMore;
