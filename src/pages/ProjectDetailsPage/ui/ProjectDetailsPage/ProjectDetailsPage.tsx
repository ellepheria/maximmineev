import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { Page } from 'widgets/Page/Page';
import { ProjectDetails } from 'entities/ProjectDetails/ui/ProjectDetails/ProjectDetails';
import cls from './ProjectDetailsPage.module.scss';

interface ProjectDetailsPageProps {
    className?: string;
}

const ProjectDetailsPage = (props: ProjectDetailsPageProps) => {
    const {
        className,
    } = props;
    const { id } = useParams<{id: string}>();

    return (
        <Page className={classNames(cls.ProjectDetailsPage, {}, [className])}>
            <ProjectDetails id={id} />
        </Page>
    );
};

export default memo(ProjectDetailsPage);
