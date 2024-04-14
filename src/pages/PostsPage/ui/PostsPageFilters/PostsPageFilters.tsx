import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useDebounce } from 'shared/lib/hooks/useDebouce/useDebounce';
import { SortOrder } from 'shared/types/sortOptions';
import { PostSortSelector } from 'widgets/PostSortSelector/ui/PostSortSelector';
import { Card } from 'shared/ui/Card/Card';
import Input from 'shared/ui/Input/Input';
import { PostSortField } from '../../model/consts/postsPageConsts';
import { postsPageActions } from '../../model/slice/postsPageSlice';
import { fetchPosts } from '../../model/services/fetchPosts/fetchPosts';
import { getPostsPageSearch, getPostsPageSortField, getPostsPageSortOrder } from '../../model/selectors/posts';
import cls from './PostsPageFilters.module.scss';

interface PostsPageFiltersProps {
    className?: string;
}

export const PostsPageFilters = memo((props: PostsPageFiltersProps) => {
    const {
        className,
    } = props;
    const dispatch = useAppDispatch();

    const sort = useSelector(getPostsPageSortField);
    const order = useSelector(getPostsPageSortOrder);
    const search = useSelector(getPostsPageSearch);

    const fetchData = useCallback(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    const debouncedFetchData = useDebounce(fetchData, 500);

    const onChangeSort = useCallback((newSort: PostSortField) => {
        dispatch(postsPageActions.setSort(newSort));
        dispatch(postsPageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);

    const onChangeOrder = useCallback((newOrder: SortOrder) => {
        dispatch(postsPageActions.setOrder(newOrder));
        dispatch(postsPageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);

    const onChangeSearch = useCallback((search: string) => {
        dispatch(postsPageActions.setSearch(search));
        dispatch(postsPageActions.setPage(1));
        debouncedFetchData();
    }, [dispatch, debouncedFetchData]);

    return (
        <div className={classNames(cls.PostsPageFilters, {}, [className])}>
            <div className={cls.sortWrapper}>
                <PostSortSelector
                    order={order}
                    sort={sort}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
            </div>
            <Card className={cls.search}>
                <Input
                    onChange={onChangeSearch}
                    value={search}
                    placeholder="Поиск"
                />
            </Card>
        </div>
    );
});
