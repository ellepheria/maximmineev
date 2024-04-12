import { classNames } from 'shared/lib/classNames/classNames';
import { ReactNode, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { postDetailsReducer } from 'entities/Post/model/slice/postDetailsSlice';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchPostById } from 'entities/Post/model/services/fetchPostById/fetchPostById';
import { getPostDetailsData, getPostDetailsIsLoading } from 'entities/Post/model/selectors/postDetails';
import { Post, PostBlock, PostBlockType } from 'entities/Post/model/types/post';
import { PostCodeBlock } from 'entities/Post/ui/PostCodeBlock/PostCodeBlock';
import { PostLinkBlock } from 'entities/Post/ui/PostLinkBlock/PostLinkBlock';
import { PostListBlock } from 'entities/Post/ui/PostListBlock/PostListBlock';
import { PostTextBlock } from 'entities/Post/ui/PostTextBlock/PostTextBlock';
import { PostImageBlock } from 'entities/Post/ui/PostImageBlock/PostImageBlock';
import { HStack, VStack } from 'shared/ui/Stack';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { Card } from 'shared/ui/Card/Card';
import cls from './PostDetails.module.scss';
import { PostDetailsSkeletons } from '../PostDetailsSkeletons/PostDetailsSkeletons';

interface PostDetailsPageProps {
    className?: string;
    id?: string;
    initialData?: Post;
}

const reducers: ReducersList = {
    postDetails: postDetailsReducer,
};

export const PostDetails = (props: PostDetailsPageProps) => {
    const {
        className,
        id,
        initialData,
    } = props;

    const dispatch = useAppDispatch();
    const isLoading = useSelector(getPostDetailsIsLoading);

    useInitialEffect(() => {
        if (!initialData) {
            dispatch(fetchPostById(id));
        }
    });

    let post = useSelector(getPostDetailsData);

    if (initialData) {
        post = initialData;
    }

    const renderBlock = useCallback((block: PostBlock) => {
        switch (block.type) {
        case PostBlockType.CODE:
            return (
                <PostCodeBlock
                    key={block.id}
                    block={block}
                    className={cls.block}
                />
            );
        case PostBlockType.LINK:
            return (
                <PostLinkBlock
                    key={block.id}
                    block={block}
                    className={cls.block}
                />
            );

        case PostBlockType.IMAGE:
            return (
                <PostImageBlock
                    key={block.id}
                    block={block}
                    className={cls.block}
                />
            );

        case PostBlockType.TEXT:
            return (
                <PostTextBlock
                    key={block.id}
                    block={block}
                    className={cls.block}
                />
            );

        case PostBlockType.LIST:
            return (
                <PostListBlock
                    key={block.id}
                    block={block}
                    className={cls.block}
                />
            );
        default:
            return null;
        }
    }, []);

    let content: ReactNode;

    if (isLoading) {
        content = (
            <PostDetailsSkeletons />
        );
    } else {
        content = (
            <>
                <HStack justify="center" max className={cls.coverWrapper}>
                    <img
                        src={post?.cover}
                        alt="cover"
                        className={cls.cover}
                    />
                </HStack>
                <HStack gap="16" justify="between" max>
                    <Text
                        className={cls.title}
                        title={post?.title}
                        text={post?.subtitle}
                        size={TextSize.L}
                    />
                    <HStack gap="8" className={cls.articleInfo}>
                        <Card className={cls.card}>
                            <Text text={post?.createdAt} />
                        </Card>
                    </HStack>
                </HStack>
                {post?.blocks?.map(renderBlock)}
            </>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <VStack gap="16" max className={classNames('', {}, [className])}>
                {content}
            </VStack>
        </DynamicModuleLoader>
    );
};
