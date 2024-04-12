import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { ProjectsPage } from 'pages/Projects';
import { AdminAuthorizationPage } from 'pages/Admin';
import { ProjectDetailsPage } from 'pages/ProjectDetailsPage';
import { PostsPage } from 'pages/PostsPage';
import { PostDetailsPage } from 'pages/PostDetailsPage';
import { CreatePostPage } from '../../../pages/CreatePostPage';

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
}

export enum AppRoutes {
    MAIN = 'main',
    PROJECTS = 'projects',
    ADMIN_AUTH = 'admin_auth',
    PROJECT_DETAILS = 'project_details',
    POSTS = 'posts',
    POST_DETAILS = 'post_details',
    CREATE_POST = 'create_post',
    // NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.PROJECTS]: '/projects',
    [AppRoutes.ADMIN_AUTH]: '/admin_auth',
    [AppRoutes.PROJECT_DETAILS]: '/projects/:id',
    [AppRoutes.POSTS]: '/posts',
    [AppRoutes.POST_DETAILS]: '/posts/:id',
    [AppRoutes.CREATE_POST]: '/create_post',
    // [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.PROJECTS]: {
        path: RoutePath.projects,
        element: <ProjectsPage />,
    },
    [AppRoutes.POSTS]: {
        path: RoutePath.posts,
        element: <PostsPage />,
    },
    [AppRoutes.POST_DETAILS]: {
        path: RoutePath.post_details,
        element: <PostDetailsPage />,
    },
    [AppRoutes.ADMIN_AUTH]: {
        path: RoutePath.admin_auth,
        element: <AdminAuthorizationPage />,
    },
    [AppRoutes.PROJECT_DETAILS]: {
        path: RoutePath.project_details,
        element: <ProjectDetailsPage />,
    },
    [AppRoutes.CREATE_POST]: {
        path: RoutePath.create_post,
        element: <CreatePostPage />,
        authOnly: true,
    },
};
