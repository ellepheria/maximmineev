import { classNames } from 'shared/lib/classNames/classNames';
import {
    memo, ReactNode, useRef, useState,
} from 'react';
import cls from './Tooltip.module.scss';
import { Text, TextSize } from '../Text/Text';

interface TooltipProps {
    className?: string;
    children: ReactNode;
    text: string;
}

export const Tooltip = memo((props: TooltipProps) => {
    const {
        className,
        children,
        text,
    } = props;

    const refSetTimeout = useRef<NodeJS.Timeout>();
    const [showToolTip, setShowToolTip] = useState(false);

    const onMouseEnterHandler = () => {
        refSetTimeout.current = setTimeout(() => {
            setShowToolTip(true);
        }, 500);
    };

    const onMouseLeaveHandler = () => {
        clearTimeout(refSetTimeout.current);
        setShowToolTip(false);
    };

    return (
        <div
            className={classNames(cls.Tooltip, {}, [className])}
            onMouseEnter={onMouseEnterHandler}
            onMouseLeave={onMouseLeaveHandler}
        >
            {children}
            <div className={classNames(cls.tooltip, { [cls.show]: showToolTip })}>
                <Text text={text} size={TextSize.S} />
            </div>
        </div>
    );
});
