import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { Project } from 'entities/Project';

export const fetchProjects = createAsyncThunk<
    Project[],
    void,
    ThunkConfig<string>
>(
    'projectsPage/fetchProjects',
    async (_, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi;

        try {
            const response = await extra.api.get<Project[]>('/projects');

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
