import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProjectsPage.module.scss';
import { DynamicModuleLoader, ReducersList } from '../../../../shared/lib/components/DynamicModuleLoader';
import { projectReducer } from '../../../../entities/Project/model/slice/projectSlice';

interface ProjectsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    project: projectReducer,
};

const ProjectsPage = ({ className }: ProjectsPageProps) => (
    <DynamicModuleLoader reducers={reducers}>
        <div className={classNames(cls.ProjectsPage, {}, [className])}>
            Проекты
        </div>
    </DynamicModuleLoader>
);

export default memo(ProjectsPage);
