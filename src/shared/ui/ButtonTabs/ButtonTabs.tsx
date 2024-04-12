import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ButtonTabs.module.scss';
import { HStack } from '../Stack';
import { Button, ButtonTheme } from '../Button/Button';

interface ButtonTabsProps {
    className?: string;
    items: string[];
    value?: string;
    onChangeValue?: (value: string) => void;
}

export const ButtonTabs = memo((props: ButtonTabsProps) => {
    const {
        className,
        items,
        value,
        onChangeValue,
    } = props;

    return (
        <HStack max className={classNames(cls.ButtonTabs, {}, [className])}>
            {items.map((item) => (
                <Button
                    theme={ButtonTheme.CLEAR}
                    onClick={() => onChangeValue?.(item)}
                    className={classNames(
                        cls.button,
                        {
                            [cls.active]: item === value,
                        },
                    )}
                    key={item}
                >
                    {item}
                </Button>
            ))}
        </HStack>
    );
});
