import { memo, useCallback } from 'react';
import Input from 'shared/ui/Input/Input';
import { HStack } from 'shared/ui/Stack';
import { Button } from 'shared/ui/Button/Button';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { createPostActions } from '../../model/slice/createPostSlice';
import { createNewPost } from '../../model/services/createNewPost/createNewPost';
import { getCreatePostData } from '../../model/selectors/createPostSelectors';

export const CreatePostFormInputs = memo(() => {
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
        dispatch(createNewPost());
        dispatch(createPostActions.clearPost());
    }, [dispatch]);

    return (
        <>
            <Input
                value={post?.title || ''}
                onChange={onChangeTitle}
                placeholder="Заголовок статьи"
            />
            <Input
                value={post?.subtitle || ''}
                onChange={onChangeSubtitle}
                placeholder="Подзаголовок статьи"
            />
            <Input
                value={post?.cover || ''}
                onChange={onChangeCover}
                placeholder="Ссылка на обложку статьи"
            />
            <Input
                value={post?.createdAt || ''}
                onChange={onChangeCreatedAt}
                placeholder="Дата создания статьи"
            />
            <HStack max justify="end">
                <Button onClick={createPost}>
                    <Text text="Создать статью" size={TextSize.L} />
                </Button>
            </HStack>
        </>
    );
});
