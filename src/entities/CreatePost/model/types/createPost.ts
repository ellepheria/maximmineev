import { Post, PostBlock } from '../../../Post';

export interface CreatePostSchema {
    isLoading: boolean;
    error?: string;
    data?: Post;
    blocks?: PostBlock[];
}
