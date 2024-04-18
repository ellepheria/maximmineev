import { classNames, Mods } from 'shared/lib/classNames/classNames';
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

const mapGridJustifyToClassName: Record<GridJustify, string> = {
    start: cls.justifyStart,
    stretch: cls.justifyStretch,
    center: cls.justifyCenter,
    end: cls.justifyEnd,
};

export const Grid = memo((props: GridProps) => {
    const {
        className = '',
        colStart = '4',
        colEnd = '10',
        justify = 'start',
        align = 'start',
        justifyContent = 'around',
        alignContent = 'around',
        autoFlow = 'dense',
    } = props;

    const additional: string[] = [
        className,
        mapGridJustifyToClassName[justify],
    ];

    return (
        <div className={classNames(cls.Grid, {}, additional)}>
            /
        </div>
    );
});
