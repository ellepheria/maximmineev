import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useMemo } from 'react';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { Page } from 'widgets/Page/Page';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { VStack } from 'shared/ui/Stack';
import cls from './PostsPage.module.scss';
import { postsPageReducer } from '../../model/slice/postsPageSlice';
import { getPostsPageInited, getPostsPageIsLoading, getPostsPagePosts } from '../../model/selectors/posts';
import { fetchPosts } from '../../model/services/fetchPosts/fetchPosts';
import { ProjectPageSkeletons } from '../../../Projects/ui/ProjectPageSkeletons/ProjectPageSkeletons';
import { PostCard } from '../PostCard/ui/PostCard';

interface PostsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    postsPage: postsPageReducer,
};

const PostsPage = memo((props: PostsPageProps) => {
    const {
        className,
    } = props;
    const isLoading = useSelector(getPostsPageIsLoading);
    const inited = useSelector(getPostsPageInited);
    const dispatch = useAppDispatch();

    useInitialEffect(() => {
        if (!inited) {
            dispatch(fetchPosts());
        }
    });

    const posts = useSelector(getPostsPagePosts);

    const postsList = useMemo(() => posts.map((post) => (
        <PostCard post={post} key={post.id} />
    )), [posts]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            {isLoading ? (
                <ProjectPageSkeletons />
            )
                : (
                    <Page className={classNames(cls.PostsPage, {}, [className])}>
                        <VStack max gap="32">
                            {postsList}
                        </VStack>
                    </Page>
                )}
        </DynamicModuleLoader>
    );
});

export default PostsPage;
