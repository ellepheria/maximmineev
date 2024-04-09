import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { ProjectType } from '../../../../entities/Project/model/types/project';

export const getProjectDetailsData = (state: StateSchema) => state.projectDetails?.project || { id: '-1' };
export const getProjectDetailsCover = (state: StateSchema) => state.projectDetails?.project?.cover;
export const getProjectDetailsId = (state: StateSchema) => state.projectDetails?.project?.id;
export const getProjectDetailsCreatedAt = (state: StateSchema) => state.projectDetails?.project?.createdAt;
export const getProjectDetailsImages = (state: StateSchema) => state.projectDetails?.project?.images;
export const getProjectDetailsLinks = (state: StateSchema) => state.projectDetails?.project?.links;
export const getProjectDetailsType = (state: StateSchema) => state.projectDetails?.project?.type || ProjectType.EDUCATION;
export const getProjectDetailsDescription = (state: StateSchema) => state.projectDetails?.project?.description;
export const getProjectDetailsTechnologies = (state: StateSchema) => state.projectDetails?.project?.technologies;
export const getProjectDetailsTitle = (state: StateSchema) => state.projectDetails?.project?.title;
export const getProjectDetailsRoles = (state: StateSchema) => state.projectDetails?.project?.roles;

export const getProjectDetailsDuties = (state: StateSchema) => state.projectDetails?.project?.duties;

export const getProjectDetailsIsTeamProject = (state: StateSchema) => state.projectDetails?.project?.isTeamProject;

export const getProjectDetailsIsLoading = (state: StateSchema) => state.projectDetails?.isLoading || false;
export const getProjectDetailsError = (state: StateSchema) => state.projectDetails?.error || '';
