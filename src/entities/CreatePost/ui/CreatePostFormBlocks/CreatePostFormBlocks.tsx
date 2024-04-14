import { classNames } from 'shared/lib/classNames/classNames';
import {
    memo, useCallback, useMemo, useState,
} from 'react';
import { VStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text/Text';
import { ButtonTabs } from 'shared/ui/ButtonTabs/ButtonTabs';
import cls from './CreatePostFormBlocks.module.scss';
import { PostBlockType } from '../../../Post/model/types/post';
import { CodeBlockAdder } from '../CodeBlockAdder/CodeBlockAdder';
import { ImageBlockAdder } from '../ImageBlockAdder/ImageBlockAdder';
import { LinkBlockAdder } from '../LinkBlockAdder/LinkBlockAdder';
import { ListBlockAdder } from '../ListBlockAdder/ListBlockAdder';
import { TextBlockAdder } from '../TextBlockAdder/TextBlockAdder';

interface CreatePostFormBlocksProps {
    className?: string;
}

const blockTypes: string[] = Object.values(PostBlockType);

export const CreatePostFormBlocks = memo((props: CreatePostFormBlocksProps) => {
    const {
        className,
    } = props;
    const [blockType, setBlockType] = useState(PostBlockType.TEXT);
    const [currentIndex, setCurrentIndex] = useState(0);

    const onChangeBlockType = useCallback((value: string) => {
        setBlockType(value as PostBlockType);
    }, []);

    const renderBlockAdder = useMemo(() => {
        switch (blockType) {
        case PostBlockType.CODE:
            return (
                <CodeBlockAdder
                    currentIndex={currentIndex}
                    setCurrentIndex={setCurrentIndex}
                />
            );
        case PostBlockType.IMAGE:
            return (
                <ImageBlockAdder
                    setCurrentIndex={setCurrentIndex}
                    currentIndex={currentIndex}
                />
            );
        case PostBlockType.LINK:
            return (
                <LinkBlockAdder
                    setCurrentIndex={setCurrentIndex}
                    currentIndex={currentIndex}
                />
            );
        case PostBlockType.LIST:
            return (
                <ListBlockAdder
                    setCurrentIndex={setCurrentIndex}
                    currentIndex={currentIndex}
                />
            );
        case PostBlockType.TEXT:
            return (
                <TextBlockAdder
                    setCurrentIndex={setCurrentIndex}
                    currentIndex={currentIndex}
                />
            );
        default:
            return null;
        }
    }, [blockType, currentIndex]);

    return (
        <VStack max gap="16" className={classNames(cls.CreatePostFormBlocks, {}, [className])}>
            <Text title="Добавление блоков" />
            <ButtonTabs
                items={blockTypes}
                value={blockType}
                onChangeValue={onChangeBlockType}
            />
            {renderBlockAdder}
        </VStack>
    );
});
