import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { Text } from 'shared/ui/Text/Text';
import Input from 'shared/ui/Input/Input';
import { HStack, VStack } from 'shared/ui/Stack';
import { Button } from 'shared/ui/Button/Button';
import cls from './CodeBlockAdder.module.scss';

interface CodeBlockAdderProps {
    className?: string;
    code: string;
    setCode: (value: string) => void;
    addCodeBlock: () => void;
}

export const CodeBlockAdder = memo((props: CodeBlockAdderProps) => {
    const {
        className,
        code,
        setCode,
        addCodeBlock,
    } = props;

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
