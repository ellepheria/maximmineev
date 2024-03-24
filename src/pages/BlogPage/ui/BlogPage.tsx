import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './BlogPage.module.scss';
import { Page } from '../../../widgets/Page/Page';

interface BlogPageProps {
    className?: string;
}

const BlogPage = ({ className }: BlogPageProps) => (
    <Page className={classNames(cls.BlogPage, {}, [className])}>
        Блог
    </Page>
);

export default memo(BlogPage);
