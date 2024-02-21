import cls from './ProjectsPage.module.scss';
import { classNames } from '../../../../shared';

interface ProjectsPageProps {
    className?: string;
}

export const ProjectsPage = ({ className }: ProjectsPageProps) => (
    <div className={classNames(cls.ProjectsPage, {}, [className])}>
        Projects Page
    </div>
);
