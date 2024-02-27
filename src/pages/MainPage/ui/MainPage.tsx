import { memo } from 'react';
import {
    classNames, Loader,
} from '../../../shared';
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
            <Loader />
        </div>
    );
};

export default memo(MainPage);
