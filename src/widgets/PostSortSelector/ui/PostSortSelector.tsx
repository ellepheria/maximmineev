import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback, useMemo } from 'react';
import { PostSortField } from 'pages/PostsPage/model/consts/postsPageConsts';
import { Select, SelectOption } from 'shared/ui/Select/Select';
import { SortOrder } from 'shared/types/sortOptions';
import cls from './PostSortSelector.module.scss';

interface PostSortSelectorProps {
    className?: string;
    sort: PostSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: PostSortField) => void;
}

export const PostSortSelector = memo((props: PostSortSelectorProps) => {
    const {
        className,
        onChangeSort,
        sort,
        order,
        onChangeOrder,
    } = props;

    const orderOptions = useMemo<SelectOption[]>(() => [
        {
            value: 'asc',
            content: 'возрастанию',
        },
        {
            value: 'desc',
            content: 'убыванию',
        },
    ], []);

    const sortFieldOptions = useMemo<SelectOption[]>(() => [
        {
            value: PostSortField.CREATED,
            content: 'дате создания',
        },
        {
            value: PostSortField.TITLE,
            content: 'названию',
        },
    ], []);

    const changeSortHandler = useCallback((newSort: string) => {
        onChangeSort(newSort as PostSortField);
    }, [onChangeSort]);

    const changeOrderHandler = useCallback((newOrder: string) => {
        onChangeOrder(newOrder as SortOrder);
    }, [onChangeOrder]);

    return (
        <div className={classNames(cls.PostSortSelector, {}, [className])}>
            <Select
                options={sortFieldOptions}
                label="Сортировать ПО"
                value={sort}
                onChange={changeSortHandler}
            />
            <Select
                options={orderOptions}
                label="по"
                value={order}
                onChange={changeOrderHandler}
                className={cls.order}
            />
        </div>
    );
});
