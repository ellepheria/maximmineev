import { memo } from 'react';
import { classNames } from '../../../shared';
import cls from './AdminAuthorizationPage.module.scss';

interface AdminAuthorizationPageProps {
    className?: string;
}

export const AdminAuthorizationPage = memo((props: AdminAuthorizationPageProps) => {
    const {
        className,
    } = props;

    return (
        <div className={classNames(cls.AdminAuthorizationPage, {}, [className])}>
            authorization page
        </div>
    );
});
