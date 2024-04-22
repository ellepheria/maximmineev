import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { Page } from 'widgets/Page/Page';
import { ProjectDetails } from 'entities/ProjectDetails/ui/ProjectDetails/ProjectDetails';
import { Grid } from 'shared/ui/Grid/Grid';
import cls from './ProjectDetailsPage.module.scss';

const ProjectDetailsPage = () => {
    const { id } = useParams<{id: string}>();

    return (
        <Page>
            <Grid className={cls.grid}>
                <ProjectDetails id={id} />
            </Grid>
        </Page>
    );
};

export default memo(ProjectDetailsPage);
