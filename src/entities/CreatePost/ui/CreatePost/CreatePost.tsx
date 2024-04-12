import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { VStack } from 'shared/ui/Stack';
import cls from './CreatePost.module.scss';
import { getCreatePostData, getCreatePostError, getCreatePostIsLoading } from '../../model/selectors/createPostSelectors';
import { CreatePostForm } from '../CreatePostForm/CreatePostForm';
import { PostDetails } from '../../../Post/ui/PostDetails/PostDetails';

interface CreatePostProps {
    className?: string;
}

export const CreatePost = memo((props: CreatePostProps) => {
    const {
        className,
    } = props;

    const dispatch = useAppDispatch();
    const isLoading = useSelector(getCreatePostIsLoading);
    const error = useSelector(getCreatePostError);
    const post = useSelector(getCreatePostData);

    return (
        <VStack max gap="32" className={classNames(cls.CreatePost, {}, [className])}>
            <CreatePostForm />
            <PostDetails initialData={post} />
        </VStack>
    );
});
