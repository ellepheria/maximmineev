import { memo } from 'react';
import { VStack } from 'shared/ui/Stack';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';

export const PostsPageSkeletons = memo(() => (
    <VStack max gap="32">
        <Skeleton width="100%" height="900px" />
        <Skeleton width="100%" height="900px" />
        <Skeleton width="100%" height="900px" />
        <Skeleton width="100%" height="900px" />
    </VStack>
));
