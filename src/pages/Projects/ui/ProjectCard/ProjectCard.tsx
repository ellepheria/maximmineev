import { memo, useMemo } from 'react';
import { Project } from 'entities/Project';
import { Card, CardTheme } from 'shared/ui/Card/Card';
import { classNames } from 'shared/lib/classNames/classNames';
import { ProjectType } from 'entities/Project/model/types/project';
import {
    Text, TextAlign, TextSize, TextTheme,
} from 'shared/ui/Text/Text';
import { Tab } from 'shared/ui/Tab/Tab';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'app/providers/router/routeConfig';
import { Grid } from 'shared/ui/Grid/Grid';
import cls from './ProjectCard.module.scss';

interface ProjectCardProps {
    className?: string;
    project: Project;
}

export const ProjectCard = memo((props: ProjectCardProps) => {
    const {
        className,
        project,
    } = props;

    const {
        id,
        createdAt,
        type = ProjectType.EDUCATION,
        technologies = [],
        cover,
        title,
        description,
    } = project;

    const technologiesList = useMemo(() => technologies.map((item) => (
        <Tab className={cls.tab} key={item}>
            <Text
                text={item}
                size={TextSize.M}
                key={item}
                align={TextAlign.CENTER}
                className={cls.tabText}
            />
        </Tab>
    )), [technologies]);

    return (
        <Card
            max
            theme={CardTheme.CLEAR}
            className={classNames(cls.ProjectCard, {}, [className])}
        >
            <Grid className={cls.grid}>
                <AppLink
                    to={`${RoutePath.projects}/${project.id}`}
                    theme={AppLinkTheme.CLEAR}
                    className={cls.coverContainer}
                >
                    <div className={cls.imageWrapper}>
                        <Tab className={cls.createdAt}>
                            <Text text={createdAt} />
                        </Tab>
                        <Tab className={cls.type}>
                            <Text text={type} />
                        </Tab>
                        <img
                            src={cover}
                            alt={`project ${id} cover`}
                            className={cls.cover}
                        />
                    </div>
                </AppLink>

                <Text title={title} size={TextSize.M} align={TextAlign.RIGHT} className={cls.title} />
                <Text text={description} className={cls.description} size={TextSize.M} align={TextAlign.RIGHT} />
                <div className={cls.technologies}>
                    {technologiesList}
                </div>
                <AppLink
                    to={`${RoutePath.projects}/${project.id}`}
                    theme={AppLinkTheme.CLEAR}
                    className={cls.tabLink}
                >
                    <Tab className={`${cls.tab} ${cls.btn}`}>
                        <Text text="Перейти к проекту" size={TextSize.M} />
                    </Tab>
                </AppLink>
            </Grid>

        </Card>
    );
});
