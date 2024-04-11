import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { Page } from 'widgets/Page/Page';
import { ProjectDetails } from 'entities/ProjectDetails/ui/ProjectDetails/ProjectDetails';

const ProjectDetailsPage = () => {
    const { id } = useParams<{id: string}>();

    return (
        <Page>
            <ProjectDetails id={id} />
        </Page>
    );
};

export default memo(ProjectDetailsPage);
