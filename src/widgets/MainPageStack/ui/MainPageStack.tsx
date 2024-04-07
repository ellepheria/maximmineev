import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { HStack } from 'shared/ui/Stack';
import { Technologies } from 'entities/Project/model/types/project';
import { TechnologiesStack } from 'features/TechnologiesStack';
import cls from './MainPageStack.module.scss';

interface MainPageStackProps {
    className?: string;
}

const technologies: Technologies[] = [
    Technologies.REACT,
    Technologies.TYPESCRIPT,
    Technologies.HTML,
    Technologies.CSS,
    Technologies.SASS,
    Technologies.VUE,
    Technologies.CSHARP,
    Technologies.PYTHON,
];

export const MainPageStack = memo((props: MainPageStackProps) => {
    const {
        className,
    } = props;

    return (
        <HStack
            className={classNames(cls.MainPageStack, {}, [className])}
            align="center"
            justify="center"
            max
        >
            <TechnologiesStack technologies={technologies} title="Мой стек:" />
        </HStack>
    );
});
