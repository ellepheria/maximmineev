import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from '../routeConfig';
import { PageLoader } from '../../../../shared';

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
