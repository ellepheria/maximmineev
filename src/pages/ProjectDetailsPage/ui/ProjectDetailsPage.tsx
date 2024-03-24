import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import cls from './ProjectDetailsPage.module.scss';
import { useInitialEffect } from '../../../shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from '../../../shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchProjectById } from '../model/services/fetchProjectById/fetchProjectByid';
import { DynamicModuleLoader, ReducersList } from '../../../shared/lib/components/DynamicModuleLoader';
import { projectDetailsReducer } from '../model/slice/projectDetailsSlice';

interface ProjectDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    projectDetails: projectDetailsReducer,
};

export const ProjectDetailsPage = memo((props: ProjectDetailsPageProps) => {
    const {
        className,
    } = props;
    const { id } = useParams<{id: string}>();
    const dispatch = useAppDispatch();

    useInitialEffect(() => {
        dispatch(fetchProjectById(id));
    });

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.ProjectDetailsPage, {}, [className])}>
                /
            </div>
        </DynamicModuleLoader>
    );
});
