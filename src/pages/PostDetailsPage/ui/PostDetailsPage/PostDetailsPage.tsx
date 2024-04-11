import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './PostDetailsPage.module.scss';

interface PostDetailsPageProps {
    className?: string;
}

const PostDetailsPage = memo((props: PostDetailsPageProps) => {
    const {
        className,
    } = props;

    return (
        <div className={classNames(cls.PostDetailsPage, {}, [className])}>
            /
        </div>
    );
});

export default PostDetailsPage;
