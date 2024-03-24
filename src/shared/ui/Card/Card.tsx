import { classNames, Mods } from 'shared/lib/classNames/classNames';
import {
    HTMLProps, memo, ReactNode, useCallback,
} from 'react';
import cls from './Card.module.scss';
import { VStack } from '../Stack';

export enum CardTheme {
    CLEAR = 'clear',
    FILLED = 'filled',
    OUTLINED = 'outlined',
}

type DivProps = Omit<HTMLProps<HTMLDivElement>, 'max'>

interface CardProps extends DivProps {
    className?: string;
    theme?: CardTheme;
    onClick?: () => void;
    children?: ReactNode;
    max?: boolean;
}

export const Card = memo((props: CardProps) => {
    const {
        className,
        theme = CardTheme.FILLED,
        onClick,
        children,
        max = false,
        ...otherProps
    } = props;

    const additional = [
        className,
        cls[theme],
    ];

    const mods: Mods = {
        [cls.max]: max,
    };

    const onClickHandler = useCallback(() => {
        if (onClick) {
            onClick();
        }
    }, [onClick]);

    return (
        <VStack
            className={classNames(cls.Card, mods, additional)}
            onClick={onClickHandler}
            {...otherProps}
        >
            {children}
        </VStack>
    );
});
