import cls from './MainPage.module.scss';
import { Button, ButtonTheme, classNames } from '../../../shared';

interface MainPageProps {
    className?: string;
}

export const MainPage = (props: MainPageProps) => {
    const {
        className,
    } = props;

    return (
        <div className={classNames(cls.MainPage, {}, [className || ''])}>
            Main Page
        </div>
    );
};
