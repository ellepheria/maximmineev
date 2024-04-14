import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo, useCallback, useState } from 'react';
import { Text } from 'shared/ui/Text/Text';
import Input from 'shared/ui/Input/Input';
import { HStack, VStack } from 'shared/ui/Stack';
import { Button } from 'shared/ui/Button/Button';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import cls from './CodeBlockAdder.module.scss';
import { createPostActions } from '../../model/slice/createPostSlice';
import { PostBlockType } from '../../../Post/model/types/post';

interface CodeBlockAdderProps {
    className?: string;
    currentIndex: number;
    setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}

export const CodeBlockAdder = memo((props: CodeBlockAdderProps) => {
    const {
        className,
        setCurrentIndex,
        currentIndex,
    } = props;
    const dispatch = useAppDispatch();
    const [code, setCode] = useState('');

    const addCodeBlock = useCallback(() => {
        dispatch(createPostActions.addBlock({
            id: currentIndex.toString(),
            type: PostBlockType.CODE,
            code,
        }));
        setCurrentIndex((prev) => prev + 1);
    }, [code, currentIndex, dispatch, setCurrentIndex]);

    const onAddBlock = useCallback(() => {
        addCodeBlock();
        setCode('');
    }, [addCodeBlock, setCode]);

    return (
        <VStack max gap="16" className={classNames(cls.CodeBlockAdder, {}, [className])}>
            <Text text="Введите Ваш код ниже:" />
            <Input value={code} onChange={setCode} />
            <HStack max justify="end">
                <Button onClick={onAddBlock}>
                    <Text text="Добавить код в статью" />
                </Button>
            </HStack>
        </VStack>
    );
});
