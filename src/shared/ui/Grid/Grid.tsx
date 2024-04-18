import { classNames } from 'shared/lib/classNames/classNames';
import { memo, ReactNode } from 'react';
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
    children: ReactNode;
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

const mapGridAlignToClassName: Record<GridAlign, string> = {
    start: cls.alignStart,
    stretch: cls.alignStretch,
    center: cls.alignCenter,
    end: cls.alignEnd,
};

const mapGridJustifyContentToClassName: Record<GridJustifyContent, string> = {
    start: cls.justifyContentStart,
    stretch: cls.justifyContentStretch,
    center: cls.justifyContentCenter,
    end: cls.justifyContentEnd,
    around: cls.justifyContentAround,
    between: cls.justifyContentBetween,
    evenly: cls.justifyContentEvenly,
};

const mapGridAlignContentToClassName: Record<GridAlignContent, string> = {
    start: cls.alignContentStart,
    stretch: cls.alignContentStretch,
    center: cls.alignContentCenter,
    end: cls.alignContentEnd,
    around: cls.alignContentAround,
    between: cls.alignContentBetween,
    evenly: cls.alignContentEvenly,
};

const mapColumnStartToClassName: Record<Column, string> = {
    1: cls.columnStart1,
    2: cls.columnStart2,
    3: cls.columnStart3,
    4: cls.columnStart4,
    5: cls.columnStart5,
    6: cls.columnStart6,
    7: cls.columnStart7,
    8: cls.columnStart8,
    9: cls.columnStart9,
    10: cls.columnStart10,
    11: cls.columnStart11,
    12: cls.columnStart12,
};

const mapColumnEndToClassName: Record<Column, string> = {
    1: cls.columnEnd1,
    2: cls.columnEnd2,
    3: cls.columnEnd3,
    4: cls.columnEnd4,
    5: cls.columnEnd5,
    6: cls.columnEnd6,
    7: cls.columnEnd7,
    8: cls.columnEnd8,
    9: cls.columnEnd9,
    10: cls.columnEnd10,
    11: cls.columnEnd11,
    12: cls.columnEnd12,
};

const mapAutoFlowToClassName: Record<GridAutoFlow, string> = {
    column: cls.autoFlowColumn,
    row: cls.autoFlowRow,
    dense: cls.autoFlowDense,
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
        children,
    } = props;

    const additional: string[] = [
        className,
        mapGridJustifyToClassName[justify],
        mapGridAlignToClassName[align],
        mapGridJustifyContentToClassName[justifyContent],
        mapGridAlignContentToClassName[alignContent],
        mapColumnStartToClassName[colStart],
        mapColumnEndToClassName[colEnd],
        mapAutoFlowToClassName[autoFlow],
    ];

    return (
        <div className={classNames(cls.Grid, {}, additional)}>
            {children}
        </div>
    );
});
