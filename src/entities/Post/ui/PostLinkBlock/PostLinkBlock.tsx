import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { HStack } from 'shared/ui/Stack';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Text } from 'shared/ui/Text/Text';
import { PostLinkBlockType } from '../../model/types/post';
import cls from './PostLinkBlock.module.scss';

interface PostLinkBlockProps {
    className?: string;
    block: PostLinkBlockType;
}

export const PostLinkBlock = memo((props: PostLinkBlockProps) => {
    const {
        className,
        block,
    } = props;

    return (
        <HStack max justify="end" className={classNames(cls.PostLinkBlock, {}, [className])}>
            <AppLink to={block.link} target="_blank">
                <Text text={block.text} />
            </AppLink>
        </HStack>
    );
});
