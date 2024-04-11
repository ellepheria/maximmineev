import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { Page } from 'widgets/Page/Page';
import { PostDetails } from 'entities/Post/ui/PostDetails/PostDetails';
import cls from './PostDetailsPage.module.scss';

interface PostDetailsPageProps {
    className?: string;
}

const PostDetailsPage = (props: PostDetailsPageProps) => {
    const {
        className,
    } = props;

    const { id } = useParams<{ id: string }>();

    return (
        <Page className={classNames(cls.PostDetailsPage, {}, [className])}>
            <PostDetails id={id} />
        </Page>
    );
};

export default memo(PostDetailsPage);
