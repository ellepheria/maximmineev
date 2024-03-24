import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getProjectsList = (state: StateSchema) => state.projectsPage?.projects || [];
