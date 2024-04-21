import { memo, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { Grid } from 'shared/ui/Grid/Grid';
import { fetchProjects } from '../../model/services/fetchProjects/fetchProjects';
import {
    getProjectsInited,
    getProjectsIsLoading,
    getProjectsList,
} from '../../model/selectors/projectsPageSelectors';
import { ProjectPageSkeletons } from '../ProjectPageSkeletons/ProjectPageSkeletons';
import { projectsPageReducer } from '../../model/slice/projectsPage';
import { ProjectCard } from '../ProjectCard/ProjectCard';
import cls from './ProjectList.module.scss';

const reducers: ReducersList = {
    projectsPage: projectsPageReducer,
};

export const ProjectsList = memo(() => {
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getProjectsIsLoading);
    const inited = useSelector(getProjectsInited);

    useInitialEffect(() => {
        if (!inited) {
            dispatch(fetchProjects());
        }
    });

    const projects = useSelector(getProjectsList);

    const projectList = useMemo(() => (
        projects.map((project) => (
            <ProjectCard project={project} key={project.id} />
        ))
    ), [projects]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Grid className={cls.grid}>
                {isLoading ? (
                    <ProjectPageSkeletons />
                )
                    : (
                        // eslint-disable-next-line react/jsx-no-useless-fragment
                        <>
                            { projectList }
                        </>
                    )}
            </Grid>
        </DynamicModuleLoader>
    );
});
