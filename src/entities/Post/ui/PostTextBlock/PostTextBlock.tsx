import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './PostTextBlock.module.scss';

interface PostTextBlockProps {
    className?: string;
}

export const PostTextBlock = memo((props: PostTextBlockProps) => {
    const {
        className,
    } = props;

    return (
        <div className={classNames(cls.PostTextBlock, {}, [className])}>
            /
        </div>
    );
});
