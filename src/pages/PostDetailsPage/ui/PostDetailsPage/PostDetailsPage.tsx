import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { Page } from 'widgets/Page/Page';
import { PostDetails } from 'entities/Post/ui/PostDetails/PostDetails';
import { Grid } from 'shared/ui/Grid/Grid';
import cls from './PostDetailsPage.module.scss';

const PostDetailsPage = () => {
    const { id } = useParams<{ id: string }>();

    return (
        <Page>
            <Grid className={cls.grid}>
                <PostDetails id={id} />
            </Grid>
        </Page>
    );
};

export default memo(PostDetailsPage);
