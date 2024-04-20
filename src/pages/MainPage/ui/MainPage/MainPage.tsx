import { memo } from 'react';
import { Page } from 'widgets/Page/Page';
import { MainPageHeader } from 'features/MainPageHeader';
import { MainPageStack } from 'widgets/MainPageStack';
import { VStack } from 'shared/ui/Stack';
import { MainPageLinks } from 'features/MainPageLinks';
import { Grid } from 'shared/ui/Grid/Grid';

const MainPage = () => (
    <Page>
        <Grid
            colStart="1"
            colEnd="13"
            alignContent="start"
        >
            <VStack max gap="32">
                <MainPageHeader />
                <MainPageLinks />
                <MainPageStack />
            </VStack>
        </Grid>
    </Page>
);

export default memo(MainPage);
