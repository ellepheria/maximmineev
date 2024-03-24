import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import cls from './ProjectsPage.module.scss';
import { DynamicModuleLoader, ReducersList } from '../../../../shared/lib/components/DynamicModuleLoader';
import { projectsPageReducer } from '../model/slice/projectsPage';
import { fetchProjects } from '../model/services/fetchProjects/fetchProjects';

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

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.ProjectsPage, {}, [className])}>
                Проекты
            </div>
        </DynamicModuleLoader>
    );
};

export default memo(ProjectsPage);
