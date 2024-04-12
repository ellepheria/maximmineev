import { classNames } from 'shared/lib/classNames/classNames';
import {
    memo, useCallback, useMemo, useState,
} from 'react';
import { VStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text/Text';
import { ButtonTabs } from 'shared/ui/ButtonTabs/ButtonTabs';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import cls from './CreatePostFormBlocks.module.scss';
import { PostBlockType } from '../../../Post/model/types/post';
import { CodeBlockAdder } from '../CodeBlockAdder/CodeBlockAdder';
import { ImageBlockAdder } from '../ImageBlockAdder/ImageBlockAdder';
import { LinkBlockAdder } from '../LinkBlockAdder/LinkBlockAdder';
import { ListBlockAdder } from '../ListBlockAdder/ListBlockAdder';
import { TextBlockAdder } from '../TextBlockAdder/TextBlockAdder';
import { createPostActions } from '../../model/slice/createPostSlice';

interface CreatePostFormBlocksProps {
    className?: string;
}

const blockTypes: string[] = Object.values(PostBlockType);

export const CreatePostFormBlocks = memo((props: CreatePostFormBlocksProps) => {
    const {
        className,
    } = props;
    const dispatch = useAppDispatch();
    const [blockType, setBlockType] = useState(PostBlockType.TEXT);
    const [code, setCode] = useState('');
    const [image, setImage] = useState('');
    const [imageTitle, setImageTitle] = useState('');
    const [imageAlt, setImageAlt] = useState('');
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
        dispatch(createPostActions.addBlock({
            id: currentIndex.toString(),
            type: PostBlockType.CODE,
            code,
        }));
        setCurrentIndex((prev) => prev + 1);
    }, [code, currentIndex, dispatch]);

    const addLinkBlock = useCallback(() => {
        dispatch(createPostActions.addBlock({
            id: currentIndex.toString(),
            type: PostBlockType.LINK,
            link: linkHref,
            text: linkTitle,
        }));
        setCurrentIndex((prev) => prev + 1);
    }, [currentIndex, dispatch, linkHref, linkTitle]);

    const addListBlock = useCallback(() => {
        dispatch(createPostActions.addBlock({
            id: currentIndex.toString(),
            type: PostBlockType.LIST,
            items: listItems,
            title: listTitle,
        }));
        setCurrentIndex((prev) => prev + 1);
    }, [currentIndex, dispatch, listItems, listTitle]);

    const addImageBlock = useCallback(() => {
        dispatch(createPostActions.addBlock({
            id: currentIndex.toString(),
            type: PostBlockType.IMAGE,
            title: imageTitle,
            alt: imageAlt,
            src: image,
        }));
        setCurrentIndex((prev) => prev + 1);
    }, [currentIndex, dispatch, image, imageAlt, imageTitle]);

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
                    imageAlt={imageAlt}
                    imageTitle={imageTitle}
                    setImageAlt={setImageAlt}
                    setImageTitle={setImageTitle}
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
        imageAlt,
        imageTitle,
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
