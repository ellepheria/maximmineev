import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { VStack } from 'shared/ui/Stack';
import cls from './CreatePostForm.module.scss';
import { CreatePostFormInputs } from '../CreatePostFormInputs/CreatePostFormInputs';
import { CreatePostFormBlocks } from '../CreatePostFormBlocks/CreatePostFormBlocks';

interface CreatePostFormProps {
    className?: string;
}

export const CreatePostForm = memo((props: CreatePostFormProps) => {
    const {
        className,
    } = props;
    const dispatch = useAppDispatch();

    return (
        <VStack
            max
            gap="16"
            className={classNames(cls.CreatePostForm, {}, [className])}
        >
            <CreatePostFormInputs />
            <CreatePostFormBlocks />
        </VStack>
    );
});
