import { classNames } from 'shared/lib/classNames/classNames';
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

interface CardProps extends HTMLProps<HTMLDivElement>{
    className?: string;
    theme?: CardTheme;
    onClick?: () => void;
    children?: ReactNode;
}

export const Card = memo((props: CardProps) => {
    const {
        className,
        theme = CardTheme.FILLED,
        onClick,
        children,
        max,
        ...otherProps
    } = props;

    const additional = [
        className,
        cls[theme],
    ];

    const onClickHandler = useCallback(() => {
        if (onClick) {
            onClick();
        }
    }, [onClick]);

    return (
        <VStack
            className={classNames(cls.Card, {}, additional)}
            onClick={onClickHandler}
            {...otherProps}
        >
            {children}
        </VStack>
    );
});
