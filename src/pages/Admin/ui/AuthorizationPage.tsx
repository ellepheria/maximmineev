import { memo } from 'react';
import { AuthorizationForm } from '../../../entities/Admin';

const AuthorizationPage = memo(() => (
    <div>
        admin authorization page
        <AuthorizationForm />
    </div>
));

export default AuthorizationPage;
