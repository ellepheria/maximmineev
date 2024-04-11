import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './PostsPage.module.scss';

interface PostsPageProps {
    className?: string;
}

const PostsPage = memo((props: PostsPageProps) => {
    const {
        className,
    } = props;

    return (
        <div className={classNames(cls.PostsPage, {}, [className])}>
            /
        </div>
    );
});

export default PostsPage;
