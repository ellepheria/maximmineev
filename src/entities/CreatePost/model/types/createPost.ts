import { Post } from '../../../Post';

export interface CreatePostSchema {
    isLoading: boolean;
    error?: string;
    data?: Post;
}
