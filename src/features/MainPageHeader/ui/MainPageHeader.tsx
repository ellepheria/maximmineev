import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import MainImage from 'shared/assets/images/main-photo.jpg';
import { Text } from 'shared/ui/Text/Text';
import { Grid } from 'shared/ui/Grid/Grid';
import cls from './MainPageHeader.module.scss';

const description: string[] = [
    // eslint-disable-next-line max-len
    'Я занимаюсь фронтенд-разработкой с 2020 года, сейчас учусь на втором курсе Уральского Федерального Университета на специальности "Программная инженерия".',
    'Есть опыт разработки на Vue.js, в основном пишу на React, TypeScript',
];

export const MainPageHeader = memo(() => (
    <Grid>
        <Text
            title="Привет! Меня зовут Максим"
        />
        {description.map((block) => (
            <Text text={block} key={block} />
        ))}
        <img src={MainImage} alt="main" className={cls.photo} />
    </Grid>
));
