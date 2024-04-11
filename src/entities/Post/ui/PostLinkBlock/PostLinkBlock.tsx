import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './PostLinkBlock.module.scss';
import { PostLinkBlockType } from '../../model/types/post';

interface PostLinkBlockProps {
    className?: string;
    block: PostLinkBlockType;
}

export const PostLinkBlock = memo((props: PostLinkBlockProps) => {
    const {
        className,
        block,
    } = props;

    return (
        <div className={classNames(cls.PostLinkBlock, {}, [className])}>
            {`${block}`}
        </div>
    );
});
