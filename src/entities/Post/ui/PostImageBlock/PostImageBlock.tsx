import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './PostImageBlock.module.scss';

interface PostImageBlockProps {
    className?: string;
}

export const PostImageBlock = memo((props: PostImageBlockProps) => {
    const {
        className,
    } = props;

    return (
        <div className={classNames(cls.PostImageBlock, {}, [className])}>
            /
        </div>
    );
});
