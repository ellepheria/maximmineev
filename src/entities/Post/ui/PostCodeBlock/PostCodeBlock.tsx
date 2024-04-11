import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './PostCodeBlock.module.scss';
import { PostCodeBlockType } from '../../model/types/post';

interface PostCodeBlockProps {
    className?: string;
    block: PostCodeBlockType;
}

export const PostCodeBlock = memo((props: PostCodeBlockProps) => {
    const {
        className,
        block,
    } = props;

    return (
        <div className={classNames(cls.PostCodeBlock, {}, [className])}>
            {`${block}`}
        </div>
    );
});
