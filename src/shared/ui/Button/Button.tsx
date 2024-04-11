import { ButtonHTMLAttributes } from 'react';
import cls from './Button.module.scss';
import { classNames } from '../../lib/classNames/classNames';

export enum ButtonTheme {
    FILLED = 'filled',
    INVERTED = 'inverted',
    CLEAR = 'clear',
    OUTLINED = 'outlined',
    DISABLED = 'disabled',
    SQUARE = 'square',
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLElement> {
    className?: string;
    theme?: ButtonTheme;
    size?: ButtonSize;
    square?: boolean;
    disabled?: boolean;
}

export const Button = (props: ButtonProps) => {
    const {
        className,
        theme = ButtonTheme.FILLED,
        size = ButtonSize.M,
        square = false,
        disabled = false,
        children,
        ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
        [cls.square]: square,
        [cls.disabled]: disabled,
    };

    return (
        <button
            type="button"
            className={
                classNames(cls.Button, mods, [className, cls[theme], cls[size]])
            }
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
};
