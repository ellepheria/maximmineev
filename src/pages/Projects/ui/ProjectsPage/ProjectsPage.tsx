import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page/Page';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import cls from './ProjectsPage.module.scss';
import { projectsPageReducer } from '../../model/slice/projectsPage';
import { ProjectsList } from '../ProjectsList/ProjectsList';

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

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page className={classNames(cls.ProjectsPage, {}, [className])}>
                <ProjectsList />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ProjectsPage);
