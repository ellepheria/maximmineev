import { memo } from 'react';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { HStack } from 'shared/ui/Stack';

export const PostDetailsSkeletons = memo(() => (
    <>
        <HStack justify="center" max>
            <Skeleton width="100%" height="525px" />
        </HStack>
        <HStack gap="16" justify="between" max>
            <Skeleton width="500px" height="50px" />
            <Skeleton width="100px" height="40px" />
        </HStack>
        <Skeleton width="100%" height="200px" />
        <Skeleton width="100%" height="200px" />
        <Skeleton width="100%" height="200px" />
        <Skeleton width="100%" height="200px" />
    </>
));
