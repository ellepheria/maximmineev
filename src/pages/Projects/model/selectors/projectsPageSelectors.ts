import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getProjectsList = (state: StateSchema) => state.projectsPage?.projects || [];
export const getProjectsIsLoading = (state: StateSchema) => state.projectsPage?.isLoading || false;
export const getProjectsError = (state: StateSchema) => state.projectsPage?.error || '';
