import cls from './MainPage.module.scss';
import { classNames } from '../../../shared/lib/classNames/classNames';

interface MainPageProps {
    className?: string;
}

export const MainPage = (props: MainPageProps) => {
    const {
        className,
    } = props;

    return (
        <div className={classNames(cls.MainPage, {}, [className || ''])}>
            <h1>Алиночка, ты самая замечательная, я тебя очень сильно люблю и ценю!</h1>
        </div>
    );
};
