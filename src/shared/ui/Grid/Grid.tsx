import { classNames } from 'shared/lib/classNames/classNames';
import { memo, ReactNode } from 'react';
import cls from './Grid.module.scss';

export type Column =
    '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | '13';

export type GridJustify = 'start' | 'end' | 'center' | 'stretch';

export type GridAlign = 'start' | 'end' | 'center' | 'stretch';

export type GridJustifyContent =
    'start' | 'end' | 'center' | 'stretch' | 'between' | 'around' | 'evenly';

export type GridAlignContent =
    'start' | 'end' | 'center' | 'stretch' | 'between' | 'around' | 'evenly';

export type GridAutoFlow = 'row' | 'column' | 'dense';

export type GridColumnGap = '4' | '8' | '12' | '16' | '20' | '24' | '28' | '32' | '40' | '44' | '48';

export type GridRowGap = '4' | '8' | '12' | '16' | '20' | '24' | '28' | '32' | '40' | '44' | '48';

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
    rowGap?: GridRowGap;
    columnGap?: GridColumnGap;
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
    13: cls.columnStart13,
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
    13: cls.columnEnd13,
};

const mapAutoFlowToClassName: Record<GridAutoFlow, string> = {
    column: cls.autoFlowColumn,
    row: cls.autoFlowRow,
    dense: cls.autoFlowDense,
};

const mapGridColumnGap: Record<GridColumnGap, string> = {
    4: cls.columnGap4,
    8: cls.columnGap8,
    12: cls.columnGap12,
    16: cls.columnGap16,
    20: cls.columnGap20,
    24: cls.columnGap24,
    28: cls.columnGap28,
    32: cls.columnGap32,
    40: cls.columnGap40,
    44: cls.columnGap44,
    48: cls.columnGap48,
};

const mapGridRowGap: Record<GridRowGap, string> = {
    4: cls.rowGap4,
    8: cls.rowGap8,
    12: cls.rowGap12,
    16: cls.rowGap16,
    20: cls.rowGap20,
    24: cls.rowGap24,
    28: cls.rowGap28,
    32: cls.rowGap32,
    40: cls.rowGap40,
    44: cls.rowGap44,
    48: cls.rowGap48,
};

export const Grid = memo((props: GridProps) => {
    const {
        className = '',
        colStart = '4',
        colEnd = '10',
        justify = 'start',
        align = 'start',
        justifyContent = 'around',
        alignContent = 'start',
        autoFlow = 'dense',
        rowGap = '4',
        columnGap = '4',
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
        mapGridColumnGap[columnGap],
        mapGridRowGap[rowGap],
    ];

    return (
        <div className={classNames(cls.Grid, {}, additional)}>
            {children}
        </div>
    );
});
