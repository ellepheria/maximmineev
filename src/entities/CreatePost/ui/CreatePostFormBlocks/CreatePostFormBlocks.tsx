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

    const onChangeBlockType = useCallback((value: string) => {
        setBlockType(value as PostBlockType);
    }, []);

    const onChangeListItem = useCallback((value: string, index: number) => {
        const newItems = listItems;
        newItems[index] = value;
        setListItems(newItems);
    }, [listItems]);

    const addListItem = useCallback(() => {
        const newItems = listItems;
        newItems.push('1');
        console.log(newItems);
        setListItems(newItems);
    }, [listItems]);

    const removeLastListItem = useCallback(() => {
        const newItems = listItems;
        newItems.pop();
        console.log(newItems);
        setListItems(newItems);
    }, [listItems]);

    const listItemInputs = useMemo(() => listItems.map((item, index) => (
        <Input
            value={listItems[index]}
            placeholder={`Элемент ${index}`}
            onChange={(value: string) => onChangeListItem(value, index)}
        />
    )), [listItems, onChangeListItem]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const listItemsAdder = (
        <>
            <Text text="Введите элементы списка ниже:" />
            <Input value={listTitle} onChange={setListTitle} placeholder="Заголовок списка:" />
            {listItemInputs}
            <HStack max gap="16" justify="end">
                <Button onClick={addListItem}>
                    <Text text="Добавить элемент в список" />
                </Button>
                <Button onClick={removeLastListItem}>
                    <Text text="Удалить последний элемент" />
                </Button>
                <Button>
                    <Text text="Добавить список в статью" />
                </Button>
            </HStack>
        </>
    );

    const renderBlockAdder = useMemo(() => {
        switch (blockType) {
        case PostBlockType.CODE:
            return (
                <>
                    <Text text="Введите Ваш код ниже:" />
                    <Input value={code} onChange={setCode} />
                </>
            );
        case PostBlockType.IMAGE:
            return (
                <>
                    <Text text="Введите ссылку на изображение ниже:" />
                    <Input value={image} onChange={setImage} />
                </>
            );
        case PostBlockType.LINK:
            return (
                <>
                    <Text text="Введите параметры ссылки ниже:" />
                    <Input value={linkTitle} onChange={setLinkTitle} placeholder="Текст ссылки:" />
                    <Input value={linkHref} onChange={setLinkHref} placeholder="Адрес ссылки:" />
                </>
            );
        case PostBlockType.LIST:
            return (
                <div>
                    {listItemsAdder}
                </div>
            );
        default:
            return null;
        }
    }, [blockType, code, image, linkHref, linkTitle, listItemsAdder]);

    return (
        <VStack max gap="16" className={classNames(cls.CreatePostFormBlocks, {}, [className])}>
            <>
                <Text title="Добавление блоков" />
                <ButtonTabs
                    items={blockTypes}
                    value={blockType}
                    onChangeValue={onChangeBlockType}
                />
                {renderBlockAdder}
            </>
        </VStack>
    );
});
