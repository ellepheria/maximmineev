import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { Page } from 'widgets/Page/Page';
import { PostDetails } from 'entities/Post/ui/PostDetails/PostDetails';

const PostDetailsPage = () => {
    const { id } = useParams<{ id: string }>();

    return (
        <Page>
            <PostDetails id={id} />
        </Page>
    );
};

export default memo(PostDetailsPage);
