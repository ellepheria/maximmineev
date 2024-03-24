import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader/Loader';

import cls from './MainPage.module.scss';
import { Page } from '../../../widgets/Page/Page';

interface MainPageProps {
    className?: string;
}

const MainPage = (props: MainPageProps) => {
    const {
        className,
    } = props;

    return (
        <Page className={classNames(cls.MainPage, {}, [className || ''])}>
            Главная
            <Loader />
        </Page>
    );
};

export default memo(MainPage);
