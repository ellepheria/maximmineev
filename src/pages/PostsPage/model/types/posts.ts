import { Post } from 'entities/Post';

export interface PostsPageSchema {
    isLoading: boolean;
    error?: string;
    posts?: Post[];
    _inited: boolean;
}
