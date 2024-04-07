import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page/Page';
import cls from './BlogPage.module.scss';

interface BlogPageProps {
    className?: string;
}

const BlogPage = ({ className }: BlogPageProps) => (
    <Page className={classNames(cls.BlogPage, {}, [className])}>
        Блог
    </Page>
);

export default memo(BlogPage);
