import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './CreatePostForm.module.scss';

interface CreatePostFormProps {
    className?: string;
}

export const CreatePostForm = memo((props: CreatePostFormProps) => {
    const {
        className,
    } = props;

    return (
        <div className={classNames(cls.CreatePostForm, {}, [className])}>
            /
        </div>
    );
});
