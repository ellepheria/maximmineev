import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './CodeBlockAdder.module.scss';
import { Text } from '../../../../shared/ui/Text/Text';
import Input from '../../../../shared/ui/Input/Input';
import { HStack, VStack } from '../../../../shared/ui/Stack';
import { Button } from '../../../../shared/ui/Button/Button';

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

    return (
        <VStack max gap="16" className={classNames(cls.CodeBlockAdder, {}, [className])}>
            <Text text="Введите Ваш код ниже:" />
            <Input value={code} onChange={setCode} />
            <HStack max justify="end">
                <Button onClick={addCodeBlock}>
                    <Text text="Добавить код в статью" />
                </Button>
            </HStack>
        </VStack>
    );
});
