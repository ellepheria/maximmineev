import { classNames } from 'shared/lib/classNames/classNames';
import { memo, ReactNode } from 'react';
import cls from './Page.module.scss';

interface PageProps {
    className?: string;
    children: ReactNode;
    center?: boolean;
}

export const Page = memo((props: PageProps) => {
    const {
        className,
        children,
        center = true,
    } = props;

    return (
        <main className={classNames(cls.Page, { [cls.center]: center }, [className])}>
            {children}
        </main>
    );
});
