import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './PostListBlock.module.scss';

interface PostListBlockProps {
    className?: string;
}

export const PostListBlock = memo((props: PostListBlockProps) => {
    const {
        className,
    } = props;

    return (
        <div className={classNames(cls.PostListBlock, {}, [className])}>
            /
        </div>
    );
});
