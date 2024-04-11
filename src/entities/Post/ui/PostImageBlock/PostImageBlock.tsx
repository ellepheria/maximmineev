import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Text, TextAlign, TextSize } from 'shared/ui/Text/Text';
import { VStack } from 'shared/ui/Stack';
import cls from './PostImageBlock.module.scss';
import { PostImageBlockType } from '../../model/types/post';

interface PostImageBlockProps {
    className?: string;
    block: PostImageBlockType;
}

export const PostImageBlock = memo((props: PostImageBlockProps) => {
    const {
        className,
        block,
    } = props;

    return (
        <VStack
            className={classNames('', {}, [className])}
            justify="center"
            align="center"
            gap="8"
            max
        >
            <img
                src={block.src}
                alt={block.alt}
                className={cls.image}
            />
            {block.title && (
                <Text text={block.title} align={TextAlign.CENTER} size={TextSize.S} />
            )}
        </VStack>
    );
});
