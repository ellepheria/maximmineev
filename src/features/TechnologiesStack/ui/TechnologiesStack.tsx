import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useMemo } from 'react';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { Technologies } from 'entities/Project/model/types/project';
import { mapTechIcon } from 'shared/const/mapTechIcon';
import { Grid } from 'shared/ui/Grid/Grid';
import cls from './TechnologiesStack.module.scss';

interface TechnologiesStackProps {
    className?: string;
    title?: string;
    technologies?: Technologies[];
    size?: TextSize;
}

export const TechnologiesStack = memo((props: TechnologiesStackProps) => {
    const {
        className,
        title,
        technologies,
        size = TextSize.M,
    } = props;

    const icons = useMemo(() => technologies?.map((item) => (
        <div data-hint={item} className={cls.container} key={item}>
            <img src={mapTechIcon[item]} alt={item} className={cls.icon} data-hint={item} />
        </div>
    )), [technologies]);

    if (!technologies) {
        return null;
    }

    return (
        <Grid
            className={classNames(cls.TechnologiesStack, {}, [className])}
        >
            {title && <Text title={title} size={size} className={cls.title} />}
            {icons}
        </Grid>
    );
});
