import cls from './MainPage.module.scss';
import { classNames, Loader, PageLoader } from '../../../shared';

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

export default MainPage;
