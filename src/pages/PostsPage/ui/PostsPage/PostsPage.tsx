import { memo, useCallback, useMemo } from 'react';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { Page } from 'widgets/Page/Page';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSearchParams } from 'react-router-dom';
import { Grid } from 'shared/ui/Grid/Grid';
import { postsPageReducer } from '../../model/slice/postsPageSlice';
import { getPostsPageIsLoading, getPostsPagePosts } from '../../model/selectors/posts';
import { PostCard } from '../PostCard/PostCard';
import { PostsPageFilters } from '../PostsPageFilters/PostsPageFilters';
import { initPostsPage } from '../../model/services/initPostsPage/initPostsPage';
import { fetchNextPostsPage } from '../../model/services/fetchNextPostsPage/fetchNextPostsPage';
import { PostsPageSkeletons } from '../PostsPageSkeletons/PostsPageSkeletons';
import cls from './PostsPage.module.scss';

const reducers: ReducersList = {
    postsPage: postsPageReducer,
};

const PostsPage = memo(() => {
    const isLoading = useSelector(getPostsPageIsLoading);
    const dispatch = useAppDispatch();
    const [searchParams] = useSearchParams();

    const onLoadNextPart = useCallback(() => {
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
                <Grid className={cls.grid}>
                    <PostsPageFilters />
                    {isLoading && <PostsPageSkeletons />}
                    {postsList}
                </Grid>
            </Page>
        </DynamicModuleLoader>
    );
});

export default PostsPage;
