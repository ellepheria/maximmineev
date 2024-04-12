import { memo } from 'react';
import { VStack } from 'shared/ui/Stack';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';

export const ProjectPageSkeletons = memo(() => (
    <VStack max gap="32" align="center">
        <Skeleton width="100%" height={280} border="16px" />
        <Skeleton width="100%" height={280} border="16px" />
        <Skeleton width="100%" height={280} border="16px" />
        <Skeleton width="100%" height={280} border="16px" />
        <Skeleton width="100%" height={280} border="16px" />
        <Skeleton width="100%" height={280} border="16px" />
    </VStack>
));
