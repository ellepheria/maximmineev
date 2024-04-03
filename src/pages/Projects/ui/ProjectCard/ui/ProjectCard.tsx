import { memo } from 'react';
import { Project } from 'entities/Project';
import { Card, CardTheme } from 'shared/ui/Card/Card';
import { HStack, VStack } from 'shared/ui/Stack';
import cls from './ProjectCard.module.scss';
import { classNames } from '../../../../../shared/lib/classNames/classNames';

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
        types = [],
        technologies = [],
        cover,
        title,
        description,
    } = project;

    return (
        <Card
            max
            theme={CardTheme.CLEAR}
            className={classNames(cls.ProjectCard, {}, [className])}
        >
            <VStack max className={cls.container}>
                <HStack max gap="32" align="start">
                    <img
                        src={cover}
                        alt={`project ${id} cover`}
                        className={cls.cover}
                    />
                    <VStack max justify="between" align="center" className={cls.content}>
                        <VStack max gap="16" align="center">
                            <h1>{title}</h1>
                            <p className={cls.description}>{description}</p>
                        </VStack>
                        <HStack max justify="end" gap="16" align="end">
                            <HStack>
                                <p>{types.join(', ')}</p>
                                <p>{technologies.join(', ')}</p>
                            </HStack>
                            <p>{createdAt}</p>
                        </HStack>
                    </VStack>
                </HStack>
            </VStack>
        </Card>
    );
});
