import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Grid.module.scss';

export type Column =
    '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';

export type GridJustify = 'start' | 'end' | 'center' | 'stretch';

export type GridAlign = 'start' | 'end' | 'center' | 'stretch';

export type GridJustifyContent =
    'start' | 'end' | 'center' | 'stretch' | 'between' | 'around' | 'evenly';

export type GridAlignContent =
    'start' | 'end' | 'center' | 'stretch' | 'between' | 'around' | 'evenly';

export type GridAutoFlow = 'row' | 'column' | 'dense';

interface GridProps {
    className?: string;
    colStart?: Column;
    colEnd?: Column;
    justify?: GridJustify;
    align?: GridAlign;
    justifyContent?: GridJustifyContent;
    alignContent?: GridAlignContent;
    autoFlow?: GridAutoFlow;
}

export const Grid = memo((props: GridProps) => {
    const {
        className,
        colStart,
        colEnd,
        justify,
        align,
        justifyContent,
        alignContent,
        autoFlow,
    } = props;

    return (
        <div className={classNames(cls.Grid, {}, [className])}>
            /
        </div>
    );
});
