import { memo } from 'react';
import { Technologies } from 'entities/Project/model/types/project';
import { TechnologiesStack } from 'features/TechnologiesStack';
import { Grid } from 'shared/ui/Grid/Grid';

const technologies: Technologies[] = [
    Technologies.REACT,
    Technologies.TYPESCRIPT,
    Technologies.HTML,
    Technologies.CSS,
    Technologies.SASS,
    Technologies.VUE,
    Technologies.CSHARP,
    Technologies.PYTHON,
];

export const MainPageStack = memo(() => (
    <Grid>
        <TechnologiesStack technologies={technologies} title="Мой стек:" />
    </Grid>
));
