export enum PostBlockType {
    CODE = 'code',
    IMAGE = 'image',
    TEXT = 'text',
    LIST = 'list',
    LINK = 'link',
}

export interface PostBlockBase {
    id: string;
    type: PostBlockType;
}

export interface PostCodeBlock extends PostBlockBase {
    type: PostBlockType.CODE;
    code: string;
}

export interface PostImageBlock extends PostBlockBase {
    type: PostBlockType.IMAGE;
    src: string;
    alt: string;
    title: string;
}

export interface PostTextBlock extends PostBlockBase {
    type: PostBlockType.TEXT;
    paragraphs: string[];
    title?: string;
}

export interface PostListBlock extends PostBlockBase {
    type: PostBlockType.LIST;
    items: string[];
    title?: string;
}

export interface PostLinkBlock extends PostBlockBase {
    type: PostBlockType.LINK;
    link: string;
}
export type PostBlock = PostCodeBlock | PostListBlock | PostTextBlock | PostLinkBlock | PostImageBlock;

export interface Post {
    id: string;
    title: string;
    subtitle?: string;
    cover?: string;
    createdAt: string;
    blocks: PostBlock[];
}

export interface PostDetailsSchema {
    isLoading: boolean;
    error?: string;
    data?: Post;
}
