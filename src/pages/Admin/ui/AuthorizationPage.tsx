import { memo } from 'react';
import { AuthorizationForm } from '../../../entities/Admin';
import cls from './Authorizationpage.module.scss';

const AuthorizationPage = memo(() => (
    <div className={cls.page}>
        admin authorization page
        <AuthorizationForm />
    </div>
));

export default AuthorizationPage;
