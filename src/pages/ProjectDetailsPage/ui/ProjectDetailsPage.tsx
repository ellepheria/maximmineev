import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import cls from './ProjectDetailsPage.module.scss';
import { useInitialEffect } from '../../../shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from '../../../shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchProjectById } from '../model/services/fetchProjectById/fetchProjectByid';
import { DynamicModuleLoader, ReducersList } from '../../../shared/lib/components/DynamicModuleLoader';
import { projectDetailsReducer } from '../model/slice/projectDetailsSlice';
import {
    getProjectDetailsCover,
    getProjectDetailsCreatedAt,
    getProjectDetailsDescription,
    getProjectDetailsDuties,
    getProjectDetailsGithubLink,
    getProjectDetailsImages,
    getProjectDetailsIsTeamProject,
    getProjectDetailsLinks,
    getProjectDetailsRoles,
    getProjectDetailsTechnologies,
    getProjectDetailsTitle,
    getProjectDetailsType,
    getProjectDetailsWebsiteLink,
} from '../model/selectors/projectDetails';
import { HStack, VStack } from '../../../shared/ui/Stack';
import { Page } from '../../../widgets/Page/Page';
import {
    Text, TextAlign, TextSize, TextTheme,
} from '../../../shared/ui/Text/Text';
import { Card } from '../../../shared/ui/Card/Card';
import { AppLink } from '../../../shared/ui/AppLink/AppLink';

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
    const githubLink = useSelector(getProjectDetailsGithubLink);
    const websiteLink = useSelector(getProjectDetailsWebsiteLink);
    const isTeamProject = useSelector(getProjectDetailsIsTeamProject);

    return (
        <DynamicModuleLoader reducers={reducers}>
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
                            <>
                                <Text title="Обязанности на проекте:" size={TextSize.S} />
                                <ul className={cls.duties}>
                                    {duties.map((duty) => (
                                        <li
                                            key={duty}
                                            className={cls.dutyItem}
                                        >
                                            <Text text={duty} className={cls.duty} />
                                        </li>
                                    ))}
                                </ul>
                            </>
                        )}

                        {roles && (
                            <>
                                <Text title="Роли в проекте:" size={TextSize.S} />
                                <ul className={cls.duties}>
                                    {roles.map((role) => (
                                        <li
                                            key={role}
                                            className={cls.dutyItem}
                                        >
                                            <Text text={role} className={cls.duty} />
                                        </li>
                                    ))}
                                </ul>
                            </>
                        )}

                        <Text title="Ссылки" size={TextSize.S} />
                        <ul className={cls.links}>
                            {links && links.map((link) => (
                                <li
                                    key={link}
                                    className={cls.linkItem}
                                >
                                    <AppLink to={link} className={cls.link}>
                                        <Text text="link" className={cls.linkText} />
                                    </AppLink>
                                </li>
                            ))}
                            {githubLink && (
                                <li className={cls.linkItem}>
                                    <AppLink to={githubLink} className={cls.link}>
                                        <Text text="GitHub" className={cls.linkText} />
                                    </AppLink>
                                </li>
                            )}
                            {websiteLink && (
                                <li className={cls.linkItem}>
                                    <AppLink to={websiteLink} className={cls.link}>
                                        <Text text="Website" className={cls.linkText} />
                                    </AppLink>
                                </li>
                            )}
                        </ul>
                    </VStack>
                    {images}
                    {technologies}
                    {roles}
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
});

export default ProjectDetailsPage;
