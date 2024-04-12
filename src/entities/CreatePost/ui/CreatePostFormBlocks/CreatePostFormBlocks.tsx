import { classNames } from 'shared/lib/classNames/classNames';
import {
    memo, useCallback, useMemo, useState,
} from 'react';
import { VStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text/Text';
import { ButtonTabs } from 'shared/ui/ButtonTabs/ButtonTabs';
import cls from './CreatePostFormBlocks.module.scss';
import { PostBlockType } from '../../../Post/model/types/post';
import Input from '../../../../shared/ui/Input/Input';

interface CreatePostFormBlocksProps {
    className?: string;
}

const blockTypes: string[] = Object.values(PostBlockType);

export const CreatePostFormBlocks = memo((props: CreatePostFormBlocksProps) => {
    const {
        className,
    } = props;
    const [blockType, setBlockType] = useState(PostBlockType.TEXT);

    const onChangeBlockType = useCallback((value: string) => {
        setBlockType(value as PostBlockType);
    }, []);

    return (
        <VStack max gap="16" className={classNames(cls.CreatePostFormBlocks, {}, [className])}>
            <Text title="Добавление блоков" />
            <ButtonTabs
                items={blockTypes}
                value={blockType}
                onChangeValue={onChangeBlockType}
            />
        </VStack>
    );
});
