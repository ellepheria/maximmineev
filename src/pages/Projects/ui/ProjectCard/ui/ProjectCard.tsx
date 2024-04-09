import { memo, useMemo } from 'react';
import { Project } from 'entities/Project';
import { Card, CardTheme } from 'shared/ui/Card/Card';
import { HStack, VStack } from 'shared/ui/Stack';
import { classNames } from 'shared/lib/classNames/classNames';
import { ProjectType } from 'entities/Project/model/types/project';
import {
    Text, TextAlign, TextSize, TextTheme,
} from 'shared/ui/Text/Text';
import { Tab } from 'shared/ui/Tab/Tab';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'app/providers/router/routeConfig';
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

    const technologiesList = useMemo(() => technologies.slice(0, 2).map((item) => (
        <Tab className={cls.tab} key={item}>
            <Text text={item} size={TextSize.M} theme={TextTheme.INVERTED} key={item} />
        </Tab>
    )), [technologies]);

    return (
        <Card
            max
            theme={CardTheme.CLEAR}
            className={classNames(cls.ProjectCard, {}, [className])}
        >
            <VStack max className={cls.container}>
                <HStack max gap="32" align="start">
                    <AppLink to={`${RoutePath.projects}/${project.id}`} theme={AppLinkTheme.CLEAR}>
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

                    <VStack max justify="between" align="center" className={cls.content}>
                        <VStack max gap="16" align="end" justify="start">
                            <Text title={title} size={TextSize.M} align={TextAlign.RIGHT} />
                            <Text text={description} className={cls.description} size={TextSize.M} align={TextAlign.RIGHT} />
                        </VStack>
                        <HStack max justify="between" gap="8" align="center">
                            <HStack gap="8" className={cls.technologies}>
                                {technologiesList}
                            </HStack>
                            <AppLink
                                to={`${RoutePath.projects}/${project.id}`}
                                theme={AppLinkTheme.CLEAR}
                                className={cls.tabLink}
                            >
                                <Tab className={cls.tab}>
                                    <Text text="Перейти к проекту" size={TextSize.M} />
                                </Tab>
                            </AppLink>
                        </HStack>
                    </VStack>
                </HStack>
            </VStack>
        </Card>
    );
});
