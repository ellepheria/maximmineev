import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getProjectDetailsData = (state: StateSchema) => state.projectDetails?.project || { id: '-1' };
export const getProjectDetailsCover = (state: StateSchema) => state.projectDetails?.project?.cover;
export const getProjectDetailsId = (state: StateSchema) => state.projectDetails?.project?.id;
export const getProjectDetailsCreatedAt = (state: StateSchema) => state.projectDetails?.project?.createdAt;
export const getProjectDetailsImages = (state: StateSchema) => state.projectDetails?.project?.images;
export const getProjectDetailsLinks = (state: StateSchema) => state.projectDetails?.project?.links;
export const getProjectDetailsTypes = (state: StateSchema) => state.projectDetails?.project?.types;
export const getProjectDetailsDescription = (state: StateSchema) => state.projectDetails?.project?.description;
export const getProjectDetailsTechnologies = (state: StateSchema) => state.projectDetails?.project?.technologies;
export const getProjectDetailsTitle = (state: StateSchema) => state.projectDetails?.project?.title;
