import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { VStack } from 'shared/ui/Stack';
import { Text, TextSize } from 'shared/ui/Text/Text';
import cls from './PostListBlock.module.scss';
import { PostListBlockType } from '../../model/types/post';

interface PostListBlockProps {
    className?: string;
    block: PostListBlockType
}

export const PostListBlock = memo((props: PostListBlockProps) => {
    const {
        className,
        block,
    } = props;

    return (
        <VStack
            className={classNames(cls.PostListBlock, {}, [className])}
            gap="16"
        >
            {block.title && (
                <Text title={block.title} size={TextSize.S} />
            )}
            <ul className={cls.list}>
                {block.items.map((item) => (
                    <li
                        key={item}
                        className={cls.item}
                    >
                        <Text text={item} className={cls.text} />
                    </li>
                ))}
            </ul>
        </VStack>
    );
});
