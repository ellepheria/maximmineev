import { memo } from 'react';
import { Page } from 'widgets/Page/Page';
import { MainPageHeader } from 'features/MainPageHeader';
import { MainPageStack } from 'widgets/MainPageStack';
import { VStack } from 'shared/ui/Stack';
import { MainPageLinks } from 'features/MainPageLinks';

const MainPage = () => (
    <Page>
        <VStack max gap="32">
            <MainPageHeader />
            <MainPageLinks />
            <MainPageStack />
        </VStack>
    </Page>
);

export default memo(MainPage);
