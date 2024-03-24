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
    getProjectDetailsData,
    getProjectDetailsDescription,
    getProjectDetailsImages, getProjectDetailsLinks,
    getProjectDetailsTechnologies,
    getProjectDetailsTitle,
    getProjectDetailsTypes,
} from '../model/selectors/projectDetails';
import { VStack } from '../../../shared/ui/Stack';
import { Page } from '../../../widgets/Page/Page';

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

    const description = useSelector(getProjectDetailsDescription);
    const cover = useSelector(getProjectDetailsCover);
    const title = useSelector(getProjectDetailsTitle);
    const images = useSelector(getProjectDetailsImages);
    const createdAt = useSelector(getProjectDetailsCreatedAt);
    const technologies = useSelector(getProjectDetailsTechnologies);
    const types = useSelector(getProjectDetailsTypes);
    const links = useSelector(getProjectDetailsLinks);

    useInitialEffect(() => {
        dispatch(fetchProjectById(id));
    });

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page className={classNames(cls.ProjectDetailsPage, {}, [className])}>
                <VStack>
                    Project
                    {id}
                    {description}
                    {cover}
                    {title}
                    {images}
                    {createdAt}
                    {technologies}
                    {types}
                    {links}
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
});

export default ProjectDetailsPage;
