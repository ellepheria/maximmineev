import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './PostListBlock.module.scss';
import { PostListBlockType } from '../../model/types/post';

interface PostListBlockProps {
    className?: string;
    block: PostListBlockType
}

export const PostListBlock = memo((props: PostListBlockProps) => {
    const {
        className,
        block,
    } = props;

    return (
        <div className={classNames(cls.PostListBlock, {}, [className])}>
            {`${block}`}
        </div>
    );
});
