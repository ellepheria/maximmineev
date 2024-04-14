import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo, useCallback, useState } from 'react';
import { Text } from 'shared/ui/Text/Text';
import Input from 'shared/ui/Input/Input';
import { HStack, VStack } from 'shared/ui/Stack';
import { Button } from 'shared/ui/Button/Button';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import cls from './ImageBlockAdder.module.scss';
import { createPostActions } from '../../model/slice/createPostSlice';
import { PostBlockType } from '../../../Post/model/types/post';

interface ImageBlockAdderProps {
    className?: string;
    currentIndex: number;
    setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}

export const ImageBlockAdder = memo((props: ImageBlockAdderProps) => {
    const {
        className,
        setCurrentIndex,
        currentIndex,
    } = props;
    const dispatch = useAppDispatch();

    const [image, setImage] = useState('');
    const [imageTitle, setImageTitle] = useState('');
    const [imageAlt, setImageAlt] = useState('');

    const addImageBlock = useCallback(() => {
        dispatch(createPostActions.addBlock({
            id: currentIndex.toString(),
            type: PostBlockType.IMAGE,
            title: imageTitle,
            alt: imageAlt,
            src: image,
        }));
        setCurrentIndex((prev) => prev + 1);
    }, [currentIndex, dispatch, image, imageAlt, imageTitle, setCurrentIndex]);

    const onAddBlock = useCallback(() => {
        addImageBlock();
        setImage('');
        setImageAlt('');
        setImageTitle('');
    }, [addImageBlock, setImage, setImageAlt, setImageTitle]);

    return (
        <VStack max gap="16" className={classNames(cls.ImageBlockAdder, {}, [className])}>
            <Text text="Введите ссылку на изображение ниже:" />
            <Input value={image} onChange={setImage} placeholder="Ссылка на изображение" />
            <Input value={imageTitle} onChange={setImageTitle} placeholder="Текст под изображением" />
            <Input value={imageAlt} onChange={setImageAlt} placeholder="alt" />
            <HStack max justify="end">
                <Button onClick={onAddBlock}>
                    <Text text="Добавить изображение в статью" />
                </Button>
            </HStack>
        </VStack>
    );
});
