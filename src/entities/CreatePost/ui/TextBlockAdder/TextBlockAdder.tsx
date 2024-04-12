import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './TextBlockAdder.module.scss';

interface TextBlockAdderProps {
    className?: string;
}

export const TextBlockAdder = memo((props: TextBlockAdderProps) => {
    const {
        className,
    } = props;

    return (
        <div className={classNames(cls.TextBlockAdder, {}, [className])}>
            /
        </div>
    );
});
