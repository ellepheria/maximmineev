import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ImageBlockAdder.module.scss';
import { Text } from '../../../../shared/ui/Text/Text';
import Input from '../../../../shared/ui/Input/Input';
import { VStack } from '../../../../shared/ui/Stack';

interface ImageBlockAdderProps {
    className?: string;
    image: string;
    setImage: (value: string) => void;
}

export const ImageBlockAdder = memo((props: ImageBlockAdderProps) => {
    const {
        className,
        image,
        setImage,
    } = props;

    return (
        <VStack max gap="16" className={classNames(cls.ImageBlockAdder, {}, [className])}>
            <Text text="Введите ссылку на изображение ниже:" />
            <Input value={image} onChange={setImage} />
        </VStack>
    );
});
