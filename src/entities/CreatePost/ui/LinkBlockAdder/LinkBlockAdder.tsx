import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo, useCallback, useState } from 'react';
import { Text } from 'shared/ui/Text/Text';
import Input from 'shared/ui/Input/Input';
import { HStack, VStack } from 'shared/ui/Stack';
import { Button } from 'shared/ui/Button/Button';
import cls from './LinkBlockAdder.module.scss';
import { useAppDispatch } from '../../../../shared/lib/hooks/useAppDispatch/useAppDispatch';
import { createPostActions } from '../../model/slice/createPostSlice';
import { PostBlockType } from '../../../Post/model/types/post';

interface LinkBlockAdderProps {
    className?: string;
    currentIndex: number;
    setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}

export const LinkBlockAdder = memo((props: LinkBlockAdderProps) => {
    const {
        className,
        setCurrentIndex,
        currentIndex,
    } = props;
    const dispatch = useAppDispatch();

    const [linkTitle, setLinkTitle] = useState('');
    const [linkHref, setLinkHref] = useState('');

    const addLinkBlock = useCallback(() => {
        dispatch(createPostActions.addBlock({
            id: currentIndex.toString(),
            type: PostBlockType.LINK,
            link: linkHref,
            text: linkTitle,
        }));
        setCurrentIndex((prev) => prev + 1);
    }, [currentIndex, dispatch, linkHref, linkTitle, setCurrentIndex]);

    const onAddBlock = useCallback(() => {
        addLinkBlock();
        setLinkTitle('');
        setLinkHref('');
    }, [addLinkBlock, setLinkHref, setLinkTitle]);

    return (
        <VStack max gap="16" className={classNames(cls.LinkBlockAdder, {}, [className])}>
            <Text text="Введите параметры ссылки ниже:" />
            <Input value={linkTitle} onChange={setLinkTitle} placeholder="Текст ссылки:" />
            <Input value={linkHref} onChange={setLinkHref} placeholder="Адрес ссылки:" />
            <HStack max justify="end">
                <Button onClick={onAddBlock}>
                    <Text text="Добавить ссылку в статью" />
                </Button>
            </HStack>
        </VStack>
    );
});
