import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './PostTextBlock.module.scss';
import { PostTextBlockType } from '../../model/types/post';

interface PostTextBlockProps {
    className?: string;
    block: PostTextBlockType;
}

export const PostTextBlock = memo((props: PostTextBlockProps) => {
    const {
        className,
        block,
    } = props;

    return (
        <div className={classNames(cls.PostTextBlock, {}, [className])}>
            {`${block}`}
        </div>
    );
});
