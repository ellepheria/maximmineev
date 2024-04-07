import { memo, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Page } from 'widgets/Page/Page';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { VStack } from 'shared/ui/Stack';
import cls from './ProjectsPage.module.scss';
import { projectsPageReducer } from '../model/slice/projectsPage';
import { fetchProjects } from '../model/services/fetchProjects/fetchProjects';
import { getProjectsIsLoading, getProjectsList } from '../model/selectors/projectsPageSelectors';
import { ProjectCard } from '../../ProjectCard';
import { PageLoader } from '../../../../../widgets/PageLoader/PageLoader';
import { Skeleton } from '../../../../../shared/ui/Skeleton/Skeleton';

interface ProjectsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    projectsPage: projectsPageReducer,
};

const ProjectsPage = (props: ProjectsPageProps) => {
    const {
        className,
    } = props;
    const dispatch = useAppDispatch();

    useInitialEffect(() => {
        dispatch(fetchProjects());
    });

    const isLoading = useSelector(getProjectsIsLoading);
    const projects = useSelector(getProjectsList);

    const projectList = useMemo(() => (
        projects.map((project) => (
            <ProjectCard project={project} key={project.id} />
        ))
    ), [projects]);

    if (isLoading) {
        return (
            <Page className={classNames(cls.ProjectsPage, {}, [className])}>
                <VStack max gap="32" align="center">
                    <Skeleton width="100%" height={263} border="16px" />
                    <Skeleton width="100%" height={263} border="16px" />
                    <Skeleton width="100%" height={263} border="16px" />
                </VStack>
            </Page>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page className={classNames(cls.ProjectsPage, {}, [className])}>
                <VStack max gap="32" align="center">
                    {projectList}
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ProjectsPage);
