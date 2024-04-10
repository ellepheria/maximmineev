import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page/Page';
import cls from './ProjectsPage.module.scss';
import { ProjectsList } from '../ProjectsList/ProjectsList';

interface ProjectsPageProps {
    className?: string;
}

const ProjectsPage = (props: ProjectsPageProps) => {
    const {
        className,
    } = props;

    return (
        <Page className={classNames(cls.ProjectsPage, {}, [className])}>
            <ProjectsList />
        </Page>
    );
};

export default memo(ProjectsPage);
