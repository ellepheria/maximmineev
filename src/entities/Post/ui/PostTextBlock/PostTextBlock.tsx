import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { VStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text/Text';
import cls from './PostTextBlock.module.scss';
import { PostTextBlockType } from '../../model/types/post';

interface PostTextBlockProps {
    className?: string;
    block: PostTextBlockType;
}

export const PostTextBlock = memo((props: PostTextBlockProps) => {
    const {
        className,
        block,
    } = props;

    return (
        <VStack max gap="16" className={classNames('', {}, [className])}>
            {block.title && (
                <Text title={block.title} />
            )}
            <VStack max gap="8">
                {block.paragraphs.map((paragraph) => (
                    <Text text={paragraph} className={cls.paragraph} key={paragraph} />
                ))}
            </VStack>
        </VStack>
    );
});
