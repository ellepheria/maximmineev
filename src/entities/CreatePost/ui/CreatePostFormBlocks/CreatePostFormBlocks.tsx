import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './CreatePostFormBlocks.module.scss';
import { VStack } from '../../../../shared/ui/Stack';
import { Text } from '../../../../shared/ui/Text/Text';

interface CreatePostFormBlocksProps {
    className?: string;
}

export const CreatePostFormBlocks = memo((props: CreatePostFormBlocksProps) => {
    const {
        className,
    } = props;

    return (
        <VStack max gap="16" className={classNames(cls.CreatePostFormBlocks, {}, [className])}>
            <Text title="Добавление блоков" />
        </VStack>
    );
});
