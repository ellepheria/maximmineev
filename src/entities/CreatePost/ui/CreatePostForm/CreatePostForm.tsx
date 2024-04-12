import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { HStack, VStack } from 'shared/ui/Stack';
import Input from 'shared/ui/Input/Input';
import { Button } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import cls from './CreatePostForm.module.scss';
import { createPostActions } from '../../model/slice/createPostSlice';
import { getCreatePostData } from '../../model/selectors/createPostSelectors';
import { createNewPost } from '../../model/services/createNewPost/createNewPost';

interface CreatePostFormProps {
    className?: string;
}

export const CreatePostForm = memo((props: CreatePostFormProps) => {
    const {
        className,
    } = props;
    const dispatch = useAppDispatch();
    const post = useSelector(getCreatePostData);

    const onChangeTitle = useCallback((value?: string) => {
        dispatch(createPostActions.updatePost({ title: value || '' }));
    }, [dispatch]);

    const onChangeSubtitle = useCallback((value?: string) => {
        dispatch(createPostActions.updatePost({ subtitle: value || '' }));
    }, [dispatch]);

    const onChangeCover = useCallback((value?: string) => {
        dispatch(createPostActions.updatePost({ cover: value || '' }));
    }, [dispatch]);

    const onChangeCreatedAt = useCallback((value?: string) => {
        dispatch(createPostActions.updatePost({ createdAt: value || '' }));
    }, [dispatch]);

    const createPost = useCallback(() => {
        console.log('click');
        dispatch(createNewPost());
    }, [dispatch]);

    return (
        <VStack
            max
            gap="16"
            className={classNames(cls.CreatePostForm, {}, [className])}
        >
            <Input
                value={post?.title}
                onChange={onChangeTitle}
                placeholder="Заголовок статьи"
            />
            <Input
                value={post?.subtitle}
                onChange={onChangeSubtitle}
                placeholder="Подзаголовок статьи"
            />
            <Input
                value={post?.cover}
                onChange={onChangeCover}
                placeholder="Ссылка на обложку статьи"
            />
            <Input
                value={post?.createdAt}
                onChange={onChangeCreatedAt}
                placeholder="Дата создания статьи"
            />
            <HStack max justify="end">
                <Button onClick={createPost}>
                    <Text text="Создать статью" />
                </Button>
            </HStack>
        </VStack>
    );
});
