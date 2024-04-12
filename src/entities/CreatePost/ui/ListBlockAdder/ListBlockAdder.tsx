import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useMemo } from 'react';
import cls from './ListBlockAdder.module.scss';
import { Text } from '../../../../shared/ui/Text/Text';
import Input from '../../../../shared/ui/Input/Input';
import { HStack, VStack } from '../../../../shared/ui/Stack';
import { Button } from '../../../../shared/ui/Button/Button';
import { PostListBlock } from '../../../Post/ui/PostListBlock/PostListBlock';
import { PostBlockType } from '../../../Post/model/types/post';

interface ListBlockAdderProps {
    className?: string;
    listItems: string[];
    onChangeListItem: (value: string, index: number) => void;
    listTitle: string;
    setListTitle: (value: string) => void;
    addListItem: () => void;
    removeLastListItem: () => void;
    addListBlock: () => void;
}

export const ListBlockAdder = memo((props: ListBlockAdderProps) => {
    const {
        className,
        listTitle,
        setListTitle,
        onChangeListItem,
        listItems,
        removeLastListItem,
        addListItem,
        addListBlock,
    } = props;

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
                <Button onClick={addListBlock}>
                    <Text text="Добавить список в статью" />
                </Button>
            </HStack>
        </VStack>
    );
});
