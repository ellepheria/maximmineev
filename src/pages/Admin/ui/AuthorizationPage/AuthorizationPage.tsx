import { AuthorizationForm } from 'entities/Admin';
import { memo } from 'react';
import cls from './Authorizationpage.module.scss';
import { Page } from '../../../../widgets/Page/Page';

const AuthorizationPage = memo(() => (
    <Page className={cls.page}>
        admin authorization page
        <AuthorizationForm />
    </Page>
));

export default AuthorizationPage;
