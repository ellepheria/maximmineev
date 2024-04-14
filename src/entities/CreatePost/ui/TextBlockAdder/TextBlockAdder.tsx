import { classNames } from 'shared/lib/classNames/classNames';
import React, {
    memo, useCallback, useMemo, useState,
} from 'react';
import { HStack, VStack } from 'shared/ui/Stack';
import Input from 'shared/ui/Input/Input';
import { Button } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import cls from './TextBlockAdder.module.scss';
import { createPostActions } from '../../model/slice/createPostSlice';
import { PostBlockType } from '../../../Post/model/types/post';

interface TextBlockAdderProps {
    className?: string;
    currentIndex: number;
    setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}

export const TextBlockAdder = memo((props: TextBlockAdderProps) => {
    const {
        className,
        setCurrentIndex,
        currentIndex,
    } = props;
    const dispatch = useAppDispatch();

    const [title, setTitle] = useState('');
    const [paragraphs, setParagraphs] = useState<string[]>([]);

    const addParagraph = useCallback(() => {
        setParagraphs([...paragraphs, '']);
    }, [paragraphs, setParagraphs]);

    const onChangeParagraph = useCallback((value: string, index: number) => {
        const newItems = [...paragraphs];
        newItems[index] = value;
        setParagraphs(newItems);
    }, [paragraphs, setParagraphs]);

    const removeLastParagraph = useCallback(() => {
        const newParagraphs = [...paragraphs];
        newParagraphs.pop();
        setParagraphs(newParagraphs);
    }, [paragraphs, setParagraphs]);

    const addTextBlock = useCallback(() => {
        dispatch(createPostActions.addBlock({
            id: currentIndex.toString(),
            type: PostBlockType.TEXT,
            title,
            paragraphs,
        }));
        setCurrentIndex((prev) => prev + 1);
    }, [currentIndex, dispatch, paragraphs, setCurrentIndex, title]);

    const onAddBlock = useCallback(() => {
        addTextBlock();
        setTitle('');
        setParagraphs([]);
    }, [addTextBlock, setParagraphs, setTitle]);

    const paragraphsInputs = useMemo(() => paragraphs.map((paragraph, index) => (
        <Input
            placeholder={`Параграф ${index}`}
            value={paragraph}
            onChange={(value) => onChangeParagraph(value, index)}
        />
    )), [onChangeParagraph, paragraphs]);

    return (
        <VStack max gap="16" className={classNames(cls.TextBlockAdder, {}, [className])}>
            <Input placeholder="Заголовок (опционально)" value={title} onChange={setTitle} />
            <VStack max gap="16">
                {paragraphsInputs}
            </VStack>
            <HStack max gap="16" justify="end">
                <Button onClick={addParagraph}>
                    <Text text="Добавить параграф" />
                </Button>
                <Button onClick={removeLastParagraph}>
                    <Text text="Удалить последний параграф" />
                </Button>
                <Button onClick={onAddBlock}>
                    <Text text="Добавить текст в статью" />
                </Button>
            </HStack>
        </VStack>
    );
});
