import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './BlogPage.module.scss';

interface BlogPageProps {
    className?: string;
}

const BlogPage = ({ className }: BlogPageProps) => (
    <div className={classNames(cls.BlogPage, {}, [className])}>
        Блог
    </div>
);

export default memo(BlogPage);
