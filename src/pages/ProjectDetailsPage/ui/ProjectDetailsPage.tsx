import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ProjectDetailsPage.module.scss';

interface ProjectDetailsPageProps {
    className?: string;
}

export const ProjectDetailsPage = memo((props: ProjectDetailsPageProps) => {
    const {
        className,
    } = props;

    return (
        <div className={classNames(cls.ProjectDetailsPage, {}, [className])}>
            /
        </div>
    );
});
