import cls from './ProjectsPage.module.scss';
import { classNames } from '../../../../shared';

interface ProjectsPageProps {
    className?: string;
}

const ProjectsPage = ({ className }: ProjectsPageProps) => (
    <div className={classNames(cls.ProjectsPage, {}, [className])}>
        Projects Page
    </div>
);

export default ProjectsPage;
