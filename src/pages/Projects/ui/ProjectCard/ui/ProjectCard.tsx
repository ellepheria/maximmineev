import { memo } from 'react';
import { Project } from 'entities/Project';
import { Card, CardTheme } from 'shared/ui/Card/Card';
import { HStack, VStack } from 'shared/ui/Stack';
import cls from './ProjectCard.module.scss';
import { classNames } from '../../../../../shared/lib/classNames/classNames';
import { ProjectType } from '../../../../../entities/Project/model/types/project';
import { Text, TextSize } from '../../../../../shared/ui/Text/Text';

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
                        <VStack max gap="16" align="end">
                            <Text title={title} size={TextSize.L} />
                            <Text text={description} className={cls.description} size={TextSize.M} />
                        </VStack>
                        <HStack max justify="end" gap="16" align="end">
                            <HStack gap="16">
                                <Text text={type} size={TextSize.S} />
                                <Text text={technologies.join(', ')} size={TextSize.S} />
                            </HStack>
                            <Text text={createdAt} size={TextSize.S} />
                        </HStack>
                    </VStack>
                </HStack>
            </VStack>
        </Card>
    );
});
