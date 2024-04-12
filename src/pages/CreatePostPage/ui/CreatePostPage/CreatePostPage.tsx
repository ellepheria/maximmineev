import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Page } from 'widgets/Page/Page';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { createPostReducer } from 'entities/CreatePost/model/slice/createPostSlice';
import { CreatePost } from 'entities/CreatePost/ui/CreatePost/CreatePost';
import cls from './CreatePostPage.module.scss';

interface CreatePostPageProps {
    className?: string;
}

const reducers: ReducersList = {
    createPost: createPostReducer,
};

const CreatePostPage = memo((props: CreatePostPageProps) => {
    const {
        className,
    } = props;

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page className={classNames(cls.CreatePostPage, {}, [className])}>
                <CreatePost />
            </Page>
        </DynamicModuleLoader>

    );
});

export default CreatePostPage;
