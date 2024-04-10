import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ProjectPageSkeletons.module.scss';
import { VStack } from '../../../../shared/ui/Stack';
import { Skeleton } from '../../../../shared/ui/Skeleton/Skeleton';
import { Page } from '../../../../widgets/Page/Page';

interface ProjectPageSkeletonsProps {
    className?: string;
}

export const ProjectPageSkeletons = memo((props: ProjectPageSkeletonsProps) => {
    const {
        className,
    } = props;

    return (
        <Page className={classNames(cls.ProjectPageSkeletons, {}, [className])}>
            <VStack max gap="32" align="center">
                <Skeleton width="100%" height={263} border="16px" />
                <Skeleton width="100%" height={263} border="16px" />
                <Skeleton width="100%" height={263} border="16px" />
                <Skeleton width="100%" height={263} border="16px" />
                <Skeleton width="100%" height={263} border="16px" />
            </VStack>
        </Page>
    );
});
