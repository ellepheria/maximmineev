import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './CreatePostFormBlocks.module.scss';

interface CreatePostFormBlocksProps {
    className?: string;
}

export const CreatePostFormBlocks = memo((props: CreatePostFormBlocksProps) => {
    const {
        className,
    } = props;

    return (
        <div className={classNames(cls.CreatePostFormBlocks, {}, [className])}>
            /
        </div>
    );
});
