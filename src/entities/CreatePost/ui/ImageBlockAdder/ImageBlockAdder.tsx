import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ImageBlockAdder.module.scss';
import { Text } from '../../../../shared/ui/Text/Text';
import Input from '../../../../shared/ui/Input/Input';
import { HStack, VStack } from '../../../../shared/ui/Stack';
import { Button } from '../../../../shared/ui/Button/Button';

interface ImageBlockAdderProps {
    className?: string;
    image: string;
    setImage: (value: string) => void;
    addImageBlock: () => void;
}

export const ImageBlockAdder = memo((props: ImageBlockAdderProps) => {
    const {
        className,
        image,
        setImage,
        addImageBlock,
    } = props;

    return (
        <VStack max gap="16" className={classNames(cls.ImageBlockAdder, {}, [className])}>
            <Text text="Введите ссылку на изображение ниже:" />
            <Input value={image} onChange={setImage} />
            <HStack max justify="end">
                <Button onClick={addImageBlock}>
                    <Text text="Добавить изображение в статью" />
                </Button>
            </HStack>
        </VStack>
    );
});
