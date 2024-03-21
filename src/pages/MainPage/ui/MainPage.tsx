import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader/Loader';

import cls from './MainPage.module.scss';

interface MainPageProps {
    className?: string;
}

const MainPage = (props: MainPageProps) => {
    const {
        className,
    } = props;

    return (
        <div className={classNames(cls.MainPage, {}, [className || ''])}>
            Главная
            <Loader />
        </div>
    );
};

export default memo(MainPage);
