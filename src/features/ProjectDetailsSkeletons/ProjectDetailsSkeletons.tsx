import { memo } from 'react';
import { VStack } from 'shared/ui/Stack';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import cls from './ProjectDetailsSkeletons.module.scss';

interface ProjectDetailsSkeletonsProps {
    className?: string;
}

export const ProjectDetailsSkeletons = memo((props: ProjectDetailsSkeletonsProps) => {
    const {
        className,
    } = props;

    return (
        <VStack max className={cls.flex}>
            <Skeleton className={cls.cover} width="100%" />
            <Skeleton height="100px" width="100%" border="8px" />
            <Skeleton height="300px" width="90%" border="12px" />
            <Skeleton height="300px" width="90%" border="12px" />
        </VStack>
    );
});
