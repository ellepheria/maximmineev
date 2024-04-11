import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './PostCodeBlock.module.scss';

interface PostCodeBlockProps {
    className?: string;
}

export const PostCodeBlock = memo((props: PostCodeBlockProps) => {
    const {
        className,
    } = props;

    return (
        <div className={classNames(cls.PostCodeBlock, {}, [className])}>
            /
        </div>
    );
});
