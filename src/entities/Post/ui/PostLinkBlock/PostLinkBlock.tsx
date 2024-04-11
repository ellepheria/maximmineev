import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './PostLinkBlock.module.scss';

interface PostLinkBlockProps {
    className?: string;
}

export const PostLinkBlock = memo((props: PostLinkBlockProps) => {
    const {
        className,
    } = props;

    return (
        <div className={classNames(cls.PostLinkBlock, {}, [className])}>
            /
        </div>
    );
});
