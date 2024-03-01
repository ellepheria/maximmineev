import { memo } from 'react';
import cls from './BlogPage.module.scss';
import { classNames } from '../../../shared';

interface BlogPageProps {
    className?: string;
}

const BlogPage = ({ className }: BlogPageProps) => (
    <div className={classNames(cls.BlogPage, {}, [className])}>
        Блог
    </div>
);

export default memo(BlogPage);
