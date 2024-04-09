import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { HStack, VStack } from 'shared/ui/Stack';
import { Page } from 'widgets/Page/Page';
import {
    Text, TextAlign, TextSize, TextTheme,
} from 'shared/ui/Text/Text';
import { Card } from 'shared/ui/Card/Card';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { TechnologiesStack } from 'features/TechnologiesStack';
import { ProjectDetailsRoles } from 'features/ProjectDetailsRoles';
import { ProjectDetailsDuties } from 'features/ProjectDetailsDuties';
import { ProjectDetailsLinks } from 'features/ProjectDetailsLinks';
import {
    getProjectDetailsCover,
    getProjectDetailsCreatedAt,
    getProjectDetailsDescription,
    getProjectDetailsDuties,
    getProjectDetailsImages,
    getProjectDetailsIsLoading,
    getProjectDetailsIsTeamProject,
    getProjectDetailsLinks,
    getProjectDetailsRoles,
    getProjectDetailsTechnologies,
    getProjectDetailsTitle,
    getProjectDetailsType,
} from '../model/selectors/projectDetails';
import { projectDetailsReducer } from '../model/slice/projectDetailsSlice';
import { fetchProjectById } from '../model/services/fetchProjectById/fetchProjectByid';
import cls from './ProjectDetailsPage.module.scss';

interface ProjectDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    projectDetails: projectDetailsReducer,
};

const ProjectDetailsPage = memo((props: ProjectDetailsPageProps) => {
    const {
        className,
    } = props;
    const { id } = useParams<{id: string}>();
    const dispatch = useAppDispatch();

    useInitialEffect(() => {
        dispatch(fetchProjectById(id));
    });

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
    const isLoading = useSelector(getProjectDetailsIsLoading);

    if (isLoading) {
        return (
            <Page className={classNames(cls.ProjectDetailsPage, {}, [className])}>
                <VStack max>
                    <Skeleton className={cls.cover} height={526} width="100%" />
                    <HStack justify="between" className={cls.title}>
                        <Skeleton height={50} width={300} border="8px" />
                        <Skeleton height={40} width={260} border="8px" />
                    </HStack>
                    <VStack max className={cls.content} gap="16">
                        <Skeleton height={150} width="80%" border="12px" />

                        <Text title="Обязанности на проекте:" size={TextSize.S} />
                        <VStack gap="8">
                            <Skeleton height={30} width={300} border="8px" className={cls.dutyItem} />
                            <Skeleton height={30} width={300} border="8px" className={cls.dutyItem} />
                            <Skeleton height={30} width={300} border="8px" className={cls.dutyItem} />
                        </VStack>

                        <Text title="Роли в проекте:" size={TextSize.S} />
                        <VStack gap="8">
                            <Skeleton height={30} width={300} border="8px" className={cls.dutyItem} />
                            <Skeleton height={30} width={300} border="8px" className={cls.dutyItem} />
                            <Skeleton height={30} width={300} border="8px" className={cls.dutyItem} />
                        </VStack>

                        <Text title="Ссылки:" size={TextSize.S} />
                        <VStack gap="8">
                            <Skeleton height={30} width={300} border="8px" className={cls.linkItem} />
                            <Skeleton height={30} width={300} border="8px" className={cls.linkItem} />
                            <Skeleton height={30} width={300} border="8px" className={cls.linkItem} />
                        </VStack>
                    </VStack>
                </VStack>
            </Page>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page className={classNames(cls.ProjectDetailsPage, {}, [className])}>
                <VStack max>
                    <img src={cover} alt="cover" className={cls.cover} />
                    <HStack justify="between" className={cls.title}>
                        <Text align={TextAlign.LEFT} title={title} size={TextSize.L} />
                        <Card className={cls.card}>
                            <Text text={`${type} - ${isTeamProject ? 'Командный' : 'Одиночный'} - ${createdAt}`} />
                        </Card>
                    </HStack>
                    <VStack max className={cls.content} gap="16">
                        <Text text={description} theme={TextTheme.PRIMARY} />
                        {duties && (
                            <ProjectDetailsDuties duties={duties} />
                        )}
                        {roles && (
                            <ProjectDetailsRoles roles={roles} />
                        )}
                        {links && (
                            <ProjectDetailsLinks links={links} />
                        )}
                        {technologies && (
                            <HStack justify="start" max>
                                <TechnologiesStack technologies={technologies} title="Технологии:" size={TextSize.S} />
                            </HStack>
                        )}
                    </VStack>
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
});

export default ProjectDetailsPage;
