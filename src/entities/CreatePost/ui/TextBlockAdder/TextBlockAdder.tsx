import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback, useMemo } from 'react';
import { HStack, VStack } from 'shared/ui/Stack';
import Input from 'shared/ui/Input/Input';
import { Button } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import cls from './TextBlockAdder.module.scss';

interface TextBlockAdderProps {
    className?: string;
    title: string;
    setTitle: (value: string) => void;
    paragraphs: string[];
    setParagraphs: (values: string[]) => void;
    addTextBlock: () => void;
}

export const TextBlockAdder = memo((props: TextBlockAdderProps) => {
    const {
        className,
        title,
        setTitle,
        paragraphs,
        setParagraphs,
        addTextBlock,
    } = props;

    const addParagraph = useCallback(() => {
        setParagraphs([...paragraphs, '']);
    }, [paragraphs, setParagraphs]);

    const onChangeParagraph = useCallback((value: string, index: number) => {
        const newItems = [...paragraphs];
        newItems[index] = value;
        console.log(value);
        setParagraphs(newItems);
    }, [paragraphs, setParagraphs]);

    const removeLastParagraph = useCallback(() => {
        const newParagraphs = [...paragraphs];
        newParagraphs.pop();
        setParagraphs(newParagraphs);
    }, [paragraphs, setParagraphs]);

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
                <Button onClick={addTextBlock}>
                    <Text text="Добавить текст в статью" />
                </Button>
            </HStack>
        </VStack>
    );
});
