import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page/Page';
import { MainPageHeader } from 'features/MainPageHeader';
import cls from './MainPage.module.scss';

interface MainPageProps {
    className?: string;
}

const MainPage = (props: MainPageProps) => {
    const {
        className,
    } = props;

    return (
        <Page className={classNames(cls.MainPage, {}, [className || ''])}>
            <MainPageHeader />
        </Page>
    );
};

export default memo(MainPage);
