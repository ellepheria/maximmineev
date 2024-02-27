import { memo } from 'react';
import { classNames } from '../../lib/classNames/classNames';
import cls from './Input.module.scss';

interface InputProps {
    className?: string;
}

const Input = memo((props: InputProps) => {
    const {
        className,
    } = props;

    const mods: Record<string, boolean> = {

    };

    return (
        <input
            className={classNames(cls.Input, mods, [className])}
        />
    );
});

export default Input;
