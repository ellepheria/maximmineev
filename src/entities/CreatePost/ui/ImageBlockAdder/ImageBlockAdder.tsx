import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Text } from 'shared/ui/Text/Text';
import Input from 'shared/ui/Input/Input';
import { HStack, VStack } from 'shared/ui/Stack';
import { Button } from 'shared/ui/Button/Button';
import cls from './ImageBlockAdder.module.scss';

interface ImageBlockAdderProps {
    className?: string;
    image: string;
    setImage: (value: string) => void;
    imageTitle: string;
    setImageTitle: (value: string) => void;
    imageAlt: string;
    setImageAlt: (value: string) => void;
    addImageBlock: () => void;
}

export const ImageBlockAdder = memo((props: ImageBlockAdderProps) => {
    const {
        className,
        image,
        setImage,
        addImageBlock,
        imageAlt,
        setImageAlt,
        setImageTitle,
        imageTitle,
    } = props;

    return (
        <VStack max gap="16" className={classNames(cls.ImageBlockAdder, {}, [className])}>
            <Text text="Введите ссылку на изображение ниже:" />
            <Input value={image} onChange={setImage} placeholder="Ссылка на изображение" />
            <Input value={imageTitle} onChange={setImageTitle} placeholder="Текст под изображением" />
            <Input value={imageAlt} onChange={setImageAlt} placeholder="alt" />
            <HStack max justify="end">
                <Button onClick={addImageBlock}>
                    <Text text="Добавить изображение в статью" />
                </Button>
            </HStack>
        </VStack>
    );
});
