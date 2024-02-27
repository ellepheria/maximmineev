import {
    ChangeEvent, InputHTMLAttributes, memo, useCallback, useEffect, useRef,
} from 'react';
import { classNames } from '../../lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    className?: string;
	value?: string;
	onChange?: (value: string) => void;
	autofocus?: boolean;
}

const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        autofocus,
        placeholder,
        ...othersProps
    } = props;

    const ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (autofocus) {
            ref.current?.focus();
        }
    }, [autofocus]);

    const onChangeHandler = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        onChange?.(event.target.value);
    }, [onChange]);

    const mods: Record<string, boolean> = {

    };

    return (
        <div className={classNames(cls.inputWrapper, mods, [className])}>
            {placeholder && (
                <div className={cls.placeholder}>
                    {placeholder}
                </div>
            )}
            <input
                ref={ref}
                className={cls.Input}
                value={value}
                onChange={onChangeHandler}
                {...othersProps}
            />
        </div>
    );
});

export default Input;
