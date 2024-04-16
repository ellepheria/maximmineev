import { memo, useCallback, useMemo } from 'react';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { Page } from 'widgets/Page/Page';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { VStack } from 'shared/ui/Stack';
import { useSearchParams } from 'react-router-dom';
import { postsPageReducer } from '../../model/slice/postsPageSlice';
import { getPostsPageIsLoading, getPostsPagePosts } from '../../model/selectors/posts';
import { PostCard } from '../PostCard/PostCard';
import { PostsPageFilters } from '../PostsPageFilters/PostsPageFilters';
import { initPostsPage } from '../../model/services/initPostsPage/initPostsPage';
import { fetchNextPostsPage } from '../../model/services/fetchNextPostsPage/fetchNextPostsPage';

const reducers: ReducersList = {
    postsPage: postsPageReducer,
};

const PostsPage = memo(() => {
    const isLoading = useSelector(getPostsPageIsLoading);
    const dispatch = useAppDispatch();
    const [searchParams] = useSearchParams();

    const onLoadNextPart = useCallback(() => {
        console.log('scroll');
        dispatch(fetchNextPostsPage());
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(initPostsPage(searchParams));
    });

    const posts = useSelector(getPostsPagePosts);

    const postsList = useMemo(() => posts.map((post) => (
        <PostCard post={post} key={post.id} />
    )), [posts]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page onScrollEnd={onLoadNextPart}>
                <VStack max gap="32">
                    <PostsPageFilters />
                    {postsList}
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
});

export default PostsPage;
