import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { ProjectsPage } from 'pages/Projects';
import { BlogPage } from 'pages/BlogPage';
import { AdminAuthorizationPage } from 'pages/Admin';
import { ProjectDetailsPage } from 'pages/ProjectDetailsPage';

export enum AppRoutes {
    MAIN = 'main',
    PROJECTS = 'projects',
    BLOG = 'blog',
    ADMIN = 'admin',
    PROJECT_DETAILS = 'project_details',
    // NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.PROJECTS]: '/projects',
    [AppRoutes.BLOG]: '/blog',
    [AppRoutes.ADMIN]: '/admin',
    [AppRoutes.PROJECT_DETAILS]: '/projects/:id',
    // [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.PROJECTS]: {
        path: RoutePath.projects,
        element: <ProjectsPage />,
    },
    [AppRoutes.BLOG]: {
        path: RoutePath.blog,
        element: <BlogPage />,
    },
    [AppRoutes.ADMIN]: {
        path: RoutePath.admin,
        element: <AdminAuthorizationPage />,
    },
    [AppRoutes.PROJECT_DETAILS]: {
        path: RoutePath.project_details,
        element: <ProjectDetailsPage />,
    },
};
