import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './PostImageBlock.module.scss';
import { PostImageBlockType } from '../../model/types/post';

interface PostImageBlockProps {
    className?: string;
    block: PostImageBlockType;
}

export const PostImageBlock = memo((props: PostImageBlockProps) => {
    const {
        className,
        block,
    } = props;

    return (
        <div className={classNames(cls.PostImageBlock, {}, [className])}>
            {`${block}`}
        </div>
    );
});
