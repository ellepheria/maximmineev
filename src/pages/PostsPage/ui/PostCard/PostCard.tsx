import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Post } from 'entities/Post';
import { Card, CardTheme } from 'shared/ui/Card/Card';
import { HStack, VStack } from 'shared/ui/Stack';
import { Tab } from 'shared/ui/Tab/Tab';
import { Text } from 'shared/ui/Text/Text';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'app/providers/router/routeConfig';
import { PostBlockType, PostTextBlockType } from 'entities/Post/model/types/post';
import { PostTextBlock } from 'entities/Post/ui/PostTextBlock/PostTextBlock';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
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

    const textBlock = post.blocks.find(
        (block) => block.type === PostBlockType.TEXT,
    ) as PostTextBlockType;

    return (
        <Card
            className={classNames(cls.PostCard, {}, [className])}
            max
            theme={CardTheme.CLEAR}
        >
            <VStack max gap="16">
                <HStack max className={cls.titleWrapper} justify="center">
                    <Text title={post.title} />
                </HStack>
                <AppLink to={`${RoutePath.posts}/${post.id}`} theme={AppLinkTheme.CLEAR}>
                    <HStack max className={cls.container}>
                        <Tab className={`${cls.createdAt} ${cls.tab}`}>
                            <Text text={post.createdAt} />
                        </Tab>
                        <img src={post.cover} alt="post cover" className={cls.cover} />
                    </HStack>
                </AppLink>
                <Text
                    title={post.subtitle}
                    className={cls.subtitle}
                />
                {textBlock && (
                    <PostTextBlock block={textBlock} className={cls.description} />
                )}
                <HStack max justify="end" align="center">
                    <AppLink to={`${RoutePath.posts}/${post.id}`} theme={AppLinkTheme.CLEAR}>
                        <Button theme={ButtonTheme.INVERTED}>
                            <Text text="Читать далее..." />
                        </Button>
                    </AppLink>
                </HStack>
            </VStack>
        </Card>
    );
});
