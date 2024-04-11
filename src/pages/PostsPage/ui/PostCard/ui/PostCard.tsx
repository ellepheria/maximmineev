import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Post } from 'entities/Post';
import { Card, CardTheme } from 'shared/ui/Card/Card';
import { HStack, VStack } from 'shared/ui/Stack';
import { Tab } from 'shared/ui/Tab/Tab';
import { Text, TextAlign, TextSize } from 'shared/ui/Text/Text';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'app/providers/router/routeConfig';
import cls from './PostCard.module.scss';

interface PostCardProps {
    className?: string;
    post: Post;
}

export const PostCard = memo((props: PostCardProps) => {
    const {
        className,
        post,
    } = props;

    return (
        <Card
            className={classNames(cls.PostCard, {}, [className])}
            max
            theme={CardTheme.CLEAR}
        >
            <AppLink to={`${RoutePath.posts}/${post.id}`} theme={AppLinkTheme.CLEAR}>
                <VStack max gap="16">
                    <HStack max className={cls.container}>
                        <Tab className={`${cls.createdAt} ${cls.tab}`}>
                            <Text text={post.createdAt} />
                        </Tab>
                        <Tab className={`${cls.title} ${cls.tab}`}>
                            <Text title={post.title} size={TextSize.L} text={post.subtitle} />
                        </Tab>
                        <Tab className={`${cls.description} ${cls.tab}`}>
                            <Text text={post.description} size={TextSize.L} align={TextAlign.RIGHT} />
                        </Tab>
                        <img src={post.cover} alt="post cover" className={cls.cover} />
                    </HStack>
                </VStack>
            </AppLink>
        </Card>
    );
});
