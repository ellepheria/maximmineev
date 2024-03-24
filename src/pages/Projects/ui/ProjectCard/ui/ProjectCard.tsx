import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Project } from 'entities/Project';
import { Card } from 'shared/ui/Card/Card';
import { HStack, VStack } from 'shared/ui/Stack';
import { AppLink } from 'shared/ui/AppLink/AppLink';
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
        types = [],
        technologies = [],
        cover,
        title,
        description,
    } = project;

    return (
        <AppLink to={`${RoutePath.projects}/${id}`}>
            <Card max className={classNames(cls.ProjectCard, {}, [className])}>
                <VStack max>
                    <HStack max>
                        {cover}
                        <VStack>
                            <h1>{title}</h1>
                            <p>{description}</p>
                        </VStack>
                    </HStack>
                    <HStack max>
                        <HStack>
                            <p>{types.join(', ')}</p>
                            <p>{technologies.join(', ')}</p>
                        </HStack>
                        <p>{createdAt}</p>
                    </HStack>
                </VStack>
            </Card>
        </AppLink>
    );
});
