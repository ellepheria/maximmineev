import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Text } from 'shared/ui/Text/Text';
import Input from 'shared/ui/Input/Input';
import { HStack, VStack } from 'shared/ui/Stack';
import { Button } from 'shared/ui/Button/Button';
import cls from './LinkBlockAdder.module.scss';

interface LinkBlockAdderProps {
    className?: string;
    linkTitle: string;
    setLinkTitle: (value: string) => void;
    linkHref: string;
    setLinkHref: (value: string) => void;
    addLinkBlock: () => void;
}

export const LinkBlockAdder = memo((props: LinkBlockAdderProps) => {
    const {
        className,
        linkHref,
        linkTitle,
        setLinkHref,
        setLinkTitle,
        addLinkBlock,
    } = props;

    return (
        <VStack max gap="16" className={classNames(cls.LinkBlockAdder, {}, [className])}>
            <Text text="Введите параметры ссылки ниже:" />
            <Input value={linkTitle} onChange={setLinkTitle} placeholder="Текст ссылки:" />
            <Input value={linkHref} onChange={setLinkHref} placeholder="Адрес ссылки:" />
            <HStack max justify="end">
                <Button onClick={addLinkBlock}>
                    <Text text="Добавить ссылку в статью" />
                </Button>
            </HStack>
        </VStack>
    );
});
