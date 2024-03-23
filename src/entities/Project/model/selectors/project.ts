import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getProjectIsLoading = (state: StateSchema) => state.project?.isLoading || false;
export const getProjectError = (state: StateSchema) => state.project?.error || '';
export const getProjectData = (state: StateSchema) => state.project?.project;
