import { memo } from 'react';
import { VStack } from 'shared/ui/Stack';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Page } from 'widgets/Page/Page';

export const PostsPageSkeletons = memo(() => (
    <Page>
        <VStack max gap="32">
            <Skeleton width="100%" height="900px" />
            <Skeleton width="100%" height="900px" />
            <Skeleton width="100%" height="900px" />
            <Skeleton width="100%" height="900px" />
        </VStack>
    </Page>
));
