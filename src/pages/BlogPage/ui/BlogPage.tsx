import { memo } from 'react';
import cls from './BlogPage.module.scss';
import { classNames } from '../../../shared';

interface BlogPageProps {
    className?: string;
}

const BlogPage = ({ className }: BlogPageProps) => (
    <div className={classNames(cls.BlogPage, {}, [className])}>
        Blog Page
    </div>
);

export default memo(BlogPage);
