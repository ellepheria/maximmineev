import { classNames } from 'shared/lib/classNames/classNames';
import {
    memo, useCallback, useMemo, useState,
} from 'react';
import { HStack, VStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text/Text';
import { ButtonTabs } from 'shared/ui/ButtonTabs/ButtonTabs';
import cls from './CreatePostFormBlocks.module.scss';
import { PostBlockType } from '../../../Post/model/types/post';
import Input from '../../../../shared/ui/Input/Input';
import { Button } from '../../../../shared/ui/Button/Button';
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
    const [code, setCode] = useState('');
    const [image, setImage] = useState('');
    const [linkTitle, setLinkTitle] = useState('');
    const [linkHref, setLinkHref] = useState('');
    const [listTitle, setListTitle] = useState('');
    const [listItems, setListItems] = useState<string[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const onChangeBlockType = useCallback((value: string) => {
        setBlockType(value as PostBlockType);
    }, []);

    const onChangeListItem = useCallback((value: string, index: number) => {
        const newItems = [...listItems];
        newItems[index] = value;
        setListItems(newItems);
    }, [listItems]);

    const addListItem = useCallback(() => {
        setListItems([...listItems, '']);
    }, [listItems]);

    const removeLastListItem = useCallback(() => {
        const newItems = [...listItems];
        newItems.pop();
        setListItems(newItems);
    }, [listItems]);

    const addCodeBlock = useCallback(() => {

    }, []);

    const addLinkBlock = useCallback(() => {

    }, []);

    const addListBlock = useCallback(() => {

    }, []);

    const addImageBlock = useCallback(() => {

    }, []);

    const addTextBlock = useCallback(() => {

    }, []);

    const renderBlockAdder = useMemo(() => {
        switch (blockType) {
        case PostBlockType.CODE:
            return (
                <CodeBlockAdder
                    code={code}
                    setCode={setCode}
                    addCodeBlock={addCodeBlock}
                />
            );
        case PostBlockType.IMAGE:
            return (
                <ImageBlockAdder
                    image={image}
                    setImage={setImage}
                    addImageBlock={addImageBlock}
                />
            );
        case PostBlockType.LINK:
            return (
                <LinkBlockAdder
                    linkTitle={linkTitle}
                    setLinkTitle={setLinkTitle}
                    linkHref={linkHref}
                    setLinkHref={setLinkHref}
                    addLinkBlock={addLinkBlock}
                />
            );
        case PostBlockType.LIST:
            return (
                <ListBlockAdder
                    removeLastListItem={removeLastListItem}
                    onChangeListItem={onChangeListItem}
                    listItems={listItems}
                    addListItem={addListItem}
                    listTitle={listTitle}
                    setListTitle={setListTitle}
                    addListBlock={addListBlock}
                />
            );
        case PostBlockType.TEXT:
            return (
                <TextBlockAdder />
            );
        default:
            return null;
        }
    }, [
        addCodeBlock,
        addImageBlock,
        addLinkBlock,
        addListBlock,
        addListItem,
        blockType,
        code,
        image,
        linkHref,
        linkTitle,
        listItems,
        listTitle,
        onChangeListItem,
        removeLastListItem,
    ]);

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
