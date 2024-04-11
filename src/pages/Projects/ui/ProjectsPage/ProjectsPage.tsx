import { memo } from 'react';
import { Page } from 'widgets/Page/Page';
import { ProjectsList } from '../ProjectsList/ProjectsList';

const ProjectsPage = () => (
    <Page>
        <ProjectsList />
    </Page>
);

export default memo(ProjectsPage);
