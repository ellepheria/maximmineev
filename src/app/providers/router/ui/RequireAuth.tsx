import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { getAdminAuthData } from 'entities/Admin';
import { RoutePath } from '../routeConfig';

interface RequireAuthProps {
    children: JSX.Element;
}

export function RequireAuth({ children }: RequireAuthProps) {
    const auth = useSelector(getAdminAuthData);
    const location = useLocation();

    if (!auth) {
        return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
    }

    return children;
}
