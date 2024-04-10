import { memo, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { HStack, VStack } from 'shared/ui/Stack';
import {
    Text, TextAlign, TextSize, TextTheme,
} from 'shared/ui/Text/Text';
import { Card } from 'shared/ui/Card/Card';
import { ProjectDetailsDuties } from 'features/ProjectDetailsDuties';
import { ProjectDetailsRoles } from 'features/ProjectDetailsRoles';
import { ProjectDetailsLinks } from 'features/ProjectDetailsLinks';
import { TechnologiesStack } from 'features/TechnologiesStack';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import {
    ProjectDetailsSkeletons,
} from 'features/ProjectDetailsSkeletons/ProjectDetailsSkeletons';
import cls from './ProjectDetails.module.scss';
import { fetchProjectById } from '../../model/services/fetchProjectById/fetchProjectByid';
import {
    getProjectDetailsCover,
    getProjectDetailsCreatedAt,
    getProjectDetailsDescription, getProjectDetailsDuties,
    getProjectDetailsImages, getProjectDetailsIsLoading, getProjectDetailsIsTeamProject,
    getProjectDetailsLinks,
    getProjectDetailsRoles,
    getProjectDetailsTechnologies,
    getProjectDetailsTitle,
    getProjectDetailsType,
} from '../../model/selectors/projectDetails';
import { projectDetailsReducer } from '../../model/slice/projectDetailsSlice';

interface ProjectDetailsProps {
    className?: string;
    id?: string;
}

const reducers: ReducersList = {
    projectDetails: projectDetailsReducer,
};

export const ProjectDetails = (props: ProjectDetailsProps) => {
    const {
        className,
        id,
    } = props;

    const dispatch = useAppDispatch();

    useInitialEffect(() => {
        dispatch(fetchProjectById(id));
    });

    const isLoading = useSelector(getProjectDetailsIsLoading);

    const description = useSelector(getProjectDetailsDescription);
    const cover = useSelector(getProjectDetailsCover);
    const title = useSelector(getProjectDetailsTitle);
    const images = useSelector(getProjectDetailsImages);
    const createdAt = useSelector(getProjectDetailsCreatedAt);
    const technologies = useSelector(getProjectDetailsTechnologies);
    const type = useSelector(getProjectDetailsType);
    const links = useSelector(getProjectDetailsLinks);
    const roles = useSelector(getProjectDetailsRoles);
    const duties = useSelector(getProjectDetailsDuties);
    const isTeamProject = useSelector(getProjectDetailsIsTeamProject);

    const projectType = useMemo(
        () => `${type} - ${isTeamProject ? 'Командный' : 'Одиночный'} - ${createdAt}`,
        [createdAt, type, isTeamProject],
    );

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            {isLoading ? (
                <ProjectDetailsSkeletons />
            )
                : (
                    <VStack max>
                        <img src={cover} alt="cover" className={cls.cover} />
                        <HStack justify="between" className={cls.title}>
                            <Text align={TextAlign.LEFT} title={title} size={TextSize.L} />
                            <Card className={cls.card}>
                                <Text text={projectType} />
                            </Card>
                        </HStack>
                        <VStack max className={cls.content} gap="16">
                            <Text text={description} theme={TextTheme.PRIMARY} />
                            <ProjectDetailsDuties duties={duties} />
                            <ProjectDetailsRoles roles={roles} />
                            <ProjectDetailsLinks links={links} />
                            <HStack justify="start" max>
                                <TechnologiesStack technologies={technologies} title="Технологии:" size={TextSize.S} />
                            </HStack>
                        </VStack>
                    </VStack>
                )}
        </DynamicModuleLoader>
    );
};
