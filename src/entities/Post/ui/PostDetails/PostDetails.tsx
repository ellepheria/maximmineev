import { classNames } from 'shared/lib/classNames/classNames';
import { memo, ReactNode, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { postDetailsReducer } from 'entities/Post/model/slice/postDetailsSlice';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchPostById } from 'entities/Post/model/services/fetchPostById/fetchPostById';
import { getPostDetailsData, getPostDetailsIsLoading } from 'entities/Post/model/selectors/postDetails';
import { PostBlock, PostBlockType } from 'entities/Post/model/types/post';
import { PostCodeBlock } from 'entities/Post/ui/PostCodeBlock/PostCodeBlock';
import { PostLinkBlock } from 'entities/Post/ui/PostLinkBlock/PostLinkBlock';
import { PostListBlock } from 'entities/Post/ui/PostListBlock/PostListBlock';
import { PostTextBlock } from 'entities/Post/ui/PostTextBlock/PostTextBlock';
import { PostImageBlock } from 'entities/Post/ui/PostImageBlock/PostImageBlock';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { HStack, VStack } from 'shared/ui/Stack';
import { TextSize, Text } from 'shared/ui/Text/Text';
import cls from './PostDetails.module.scss';

interface PostDetailsPageProps {
    className?: string;
    id?: string;
}

const reducers: ReducersList = {
    postDetails: postDetailsReducer,
};

export const PostDetails = (props: PostDetailsPageProps) => {
    const {
        className,
        id,
    } = props;

    const dispatch = useAppDispatch();
    const isLoading = useSelector(getPostDetailsIsLoading);

    useInitialEffect(() => {
        dispatch(fetchPostById(id));
    });

    const post = useSelector(getPostDetailsData);

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
            <>
                <Skeleton className={cls.avatar} width={200} height={200} border="50%" />
                <Skeleton className={cls.title} width={300} height={32} />
                <Skeleton className={cls.skeleton} width={600} height={24} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
            </>
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
                <VStack gap="4" max>
                    <Text
                        className={cls.title}
                        title={post?.title}
                        text={post?.subtitle}
                        size={TextSize.L}
                    />
                    <HStack gap="8" className={cls.articleInfo}>
                        {/* <Icon className={cls.icon} Svg={CalendarIcon} /> */}
                        <Text text={post?.createdAt} />
                    </HStack>
                </VStack>
                {post?.blocks.map(renderBlock)}
            </>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <VStack gap="16" max className={classNames(cls.PostDetailsPage, {}, [className])}>
                {content}
            </VStack>
        </DynamicModuleLoader>
    );
};
