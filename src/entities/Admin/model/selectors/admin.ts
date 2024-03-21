import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getAdminAuthData = (state: StateSchema) => state.admin.authData;
