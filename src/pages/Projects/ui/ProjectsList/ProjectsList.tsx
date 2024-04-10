import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useMemo } from 'react';
import { useSelector } from 'react-redux';
import cls from './ProjectsList.module.scss';
import { VStack } from '../../../../shared/ui/Stack';
import { useAppDispatch } from '../../../../shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '../../../../shared/lib/hooks/useInitialEffect/useInitialEffect';
import { fetchProjects } from '../../model/services/fetchProjects/fetchProjects';
import { getProjectsIsLoading, getProjectsList } from '../../model/selectors/projectsPageSelectors';
import { ProjectCard } from '../ProjectCard';
import { ProjectPageSkeletons } from '../ProjectPageSkeletons/ProjectPageSkeletons';
import { DynamicModuleLoader, ReducersList } from '../../../../shared/lib/components/DynamicModuleLoader';
import { projectsPageReducer } from '../../model/slice/projectsPage';

interface ProjectsListProps {
    className?: string;
}

const reducers: ReducersList = {
    projectsPage: projectsPageReducer,
};

export const ProjectsList = memo((props: ProjectsListProps) => {
    const {
        className,
    } = props;

    const dispatch = useAppDispatch();
    const isLoading = useSelector(getProjectsIsLoading);

    useInitialEffect(() => {
        dispatch(fetchProjects());
    });

    const projects = useSelector(getProjectsList);

    const projectList = useMemo(() => (
        projects.map((project) => (
            <ProjectCard project={project} key={project.id} />
        ))
    ), [projects]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            {isLoading ? (
                <ProjectPageSkeletons />
            )
                : (
                    <VStack max gap="32" align="center">
                        {projectList}
                    </VStack>
                )}
        </DynamicModuleLoader>
    );
});
