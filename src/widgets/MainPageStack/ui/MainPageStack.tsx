import { memo } from 'react';
import { Technologies } from 'entities/Project/model/types/project';
import { TechnologiesStack } from 'features/TechnologiesStack';
import { Grid } from 'shared/ui/Grid/Grid';
import cls from './MainPageStack.module.scss';

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
    <Grid className={cls.grid}>
        <TechnologiesStack technologies={technologies} title="Мой стек:" />
    </Grid>
));
