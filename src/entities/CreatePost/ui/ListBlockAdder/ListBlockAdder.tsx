import { classNames } from 'shared/lib/classNames/classNames';
import React, {
    memo, useCallback, useMemo, useState,
} from 'react';
import { Text } from 'shared/ui/Text/Text';
import Input from 'shared/ui/Input/Input';
import { HStack, VStack } from 'shared/ui/Stack';
import { Button } from 'shared/ui/Button/Button';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import cls from './ListBlockAdder.module.scss';
import { PostListBlock } from '../../../Post/ui/PostListBlock/PostListBlock';
import { PostBlockType } from '../../../Post/model/types/post';
import { createPostActions } from '../../model/slice/createPostSlice';

interface ListBlockAdderProps {
    className?: string;
    currentIndex: number;
    setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}

export const ListBlockAdder = memo((props: ListBlockAdderProps) => {
    const {
        className,
        setCurrentIndex,
        currentIndex,
    } = props;
    const dispatch = useAppDispatch();

    const [listTitle, setListTitle] = useState('');
    const [listItems, setListItems] = useState<string[]>([]);

    const onChangeListItem = useCallback((value: string, index: number) => {
        const newItems = [...listItems];
        newItems[index] = value;
        setListItems(newItems);
    }, [listItems, setListItems]);

    const addListItem = useCallback(() => {
        setListItems([...listItems, '']);
    }, [listItems, setListItems]);

    const removeLastListItem = useCallback(() => {
        const newItems = [...listItems];
        newItems.pop();
        setListItems(newItems);
    }, [listItems, setListItems]);

    const addListBlock = useCallback(() => {
        dispatch(createPostActions.addBlock({
            id: currentIndex.toString(),
            type: PostBlockType.LIST,
            items: listItems,
            title: listTitle,
        }));
        setCurrentIndex((prev) => prev + 1);
    }, [currentIndex, dispatch, listItems, listTitle, setCurrentIndex]);

    const onAddBlock = useCallback(() => {
        addListBlock();
        setListTitle('');
        setListItems([]);
    }, [addListBlock, setListItems, setListTitle]);

    const listItemInputs = useMemo(() => listItems.map((item, index) => (
        <Input
            value={item}
            onChange={(value: string) => onChangeListItem(value, index)}
        />
    )), [listItems, onChangeListItem]);

    return (
        <VStack max gap="16" className={classNames(cls.ListBlockAdder, {}, [className])}>
            <Text text="Введите элементы списка ниже:" />
            <Input value={listTitle} onChange={setListTitle} placeholder="Заголовок списка:" />
            <HStack max gap="32" justify="between">
                <VStack gap="8" className={cls.inputs}>
                    {listItemInputs}
                </VStack>
                <PostListBlock
                    className={cls.list}
                    block={{
                        id: '1',
                        title: listTitle,
                        items: listItems,
                        type: PostBlockType.LIST,
                    }}
                />
            </HStack>
            <HStack max gap="16" justify="end">
                <Button onClick={addListItem}>
                    <Text text="Добавить элемент в список" />
                </Button>
                <Button onClick={removeLastListItem}>
                    <Text text="Удалить последний элемент" />
                </Button>
                <Button onClick={onAddBlock}>
                    <Text text="Добавить список в статью" />
                </Button>
            </HStack>
        </VStack>
    );
});
