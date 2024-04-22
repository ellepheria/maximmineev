import { memo } from 'react';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { HStack } from 'shared/ui/Stack';
import { Grid } from 'shared/ui/Grid/Grid';
import cls from './PostDetailsSkeletons.module.scss';

export const PostDetailsSkeletons = memo(() => (
    <Grid className={cls.grid}>
        <HStack justify="center" max>
            <Skeleton width="100%" className={cls.image} />
        </HStack>
        <HStack gap="16" justify="between" max>
            <Skeleton width="100%" height="100px" />
        </HStack>
        <Skeleton width="100%" height="200px" />
        <Skeleton width="100%" height="200px" />
        <Skeleton width="100%" height="200px" />
        <Skeleton width="100%" height="200px" />
    </Grid>
));
