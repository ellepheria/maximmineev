import cls from './Navbar.module.scss';
import { classNames, ThemeSwitcher } from '../../../shared';
import { AppLink } from '../../../shared/ui/AppLink/AppLink';
import { RoutePath } from '../../../app/providers/router/routeConfig';
import { useTheme } from '../../../app/providers/ThemeProvider';

interface NavBarProps {
    className?: string;
}

export const Navbar = ({ className }: NavBarProps) => (
    <div className={classNames(cls.Navbar, {}, [className])}>
        <ThemeSwitcher
            className={cls.themeSwitcher}
        />
        <div className={cls.links}>
            <AppLink
                to={RoutePath.main}
                className={cls.link}
            >
                Главная
            </AppLink>
            <AppLink
                to={RoutePath.projects}
                className={cls.link}
            >
                Проекты
            </AppLink>
            <AppLink
                to={RoutePath.blog}
                className={cls.link}
            >
                Блог
            </AppLink>
        </div>
    </div>
);
