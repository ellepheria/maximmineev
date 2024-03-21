import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProjectsPage.module.scss';

interface ProjectsPageProps {
    className?: string;
}

const ProjectsPage = ({ className }: ProjectsPageProps) => (
    <div className={classNames(cls.ProjectsPage, {}, [className])}>
        Проекты
    </div>
);

export default memo(ProjectsPage);
