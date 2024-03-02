import { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RoutePath } from '../../../app/providers/router/routeConfig';
import { getAdminAuthData } from '../../../entities/Admin/model/selectors/getAuthData/getAdminAuthData';
import { adminActions } from '../../../entities/Admin/model/slice/adminSlice';
import {
    Button,
    ThemeSwitcher,
    classNames,
} from '../../../shared';
import { AppLink } from '../../../shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavBarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavBarProps) => {
    const dispatch = useDispatch();
    const authData = useSelector(getAdminAuthData);

    const onLogout = () => {
        dispatch(adminActions.logout());
    };

    return (
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
            {authData && (
                <Button
                    onClick={onLogout}
                >
                    Выйти
                </Button>
            )}
        </div>
    );
});
