import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './TechnologiesStack.module.scss';

interface TechnologiesStackProps {
    className?: string;
}

export const TechnologiesStack = memo((props: TechnologiesStackProps) => {
    const {
        className,
    } = props;

    return (
        <div className={classNames(cls.TechnologiesStack, {}, [className])}>
            /
        </div>
    );
});
