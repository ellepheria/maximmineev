import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from '../../../../shared';
import { routeConfig } from '../routeConfig';

const AppRouter = () => (
    <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
            <Route
                key={path}
                path={path}
                element={(
                    <Suspense fallback={<PageLoader />}>
                        {element}
                    </Suspense>
                )}
            />
        ))}
    </Routes>
);

export default AppRouter;
