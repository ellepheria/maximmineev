import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { Page } from 'widgets/Page/Page';
import cls from './PostsPage.module.scss';
import { postsPageReducer } from '../../model/slice/postsPageSlice';

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

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page className={classNames(cls.PostsPage, {}, [className])}>
                /
            </Page>
        </DynamicModuleLoader>
    );
});

export default PostsPage;
