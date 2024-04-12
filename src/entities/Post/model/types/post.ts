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

export interface PostCodeBlockType extends PostBlockBase {
    type: PostBlockType.CODE;
    code: string;
}

export interface PostImageBlockType extends PostBlockBase {
    type: PostBlockType.IMAGE;
    src: string;
    alt: string;
    title: string;
}

export interface PostTextBlockType extends PostBlockBase {
    type: PostBlockType.TEXT;
    paragraphs: string[];
    title?: string;
}

export interface PostListBlockType extends PostBlockBase {
    type: PostBlockType.LIST;
    items: string[];
    title?: string;
}

export interface PostLinkBlockType extends PostBlockBase {
    type: PostBlockType.LINK;
    text: string;
    link: string;
}
export type PostBlock = PostCodeBlockType | PostListBlockType | PostTextBlockType | PostLinkBlockType | PostImageBlockType;

export interface Post {
    id?: string;
    title?: string;
    subtitle?: string;
    cover?: string;
    createdAt?: string;
    blocks?: PostBlock[];
}

export interface PostDetailsSchema {
    isLoading: boolean;
    error?: string;
    data?: Post;
}
