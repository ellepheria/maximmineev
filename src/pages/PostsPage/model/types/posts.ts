import { Post } from 'entities/Post';
import { SortOrder } from 'shared/types/sortOptions';
import { PostSortField } from '../consts/postsPageConsts';

export interface PostsPageSchema {
    isLoading: boolean;
    error?: string;
    posts?: Post[];

    // pagination
    page: number;
    limit: number;
    hasMore: boolean;

    // filters
    order: SortOrder;
    sort: PostSortField;
    search: string;

    _inited: boolean;
}
