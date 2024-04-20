import { memo } from 'react';
import { Page } from 'widgets/Page/Page';
import { MainPageHeader } from 'features/MainPageHeader';
import { MainPageStack } from 'widgets/MainPageStack';
import { MainPageLinks } from 'features/MainPageLinks';
import { Grid } from 'shared/ui/Grid/Grid';
import cls from './MainPage.module.scss';

const MainPage = () => (
    <Page center>
        <Grid
            className={cls.grid}
        >
            <MainPageHeader />
            <MainPageLinks />
            <MainPageStack />
        </Grid>
    </Page>
);

export default memo(MainPage);
