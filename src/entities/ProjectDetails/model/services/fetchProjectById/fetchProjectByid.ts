import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { Project } from 'entities/Project';

export const fetchProjectById = createAsyncThunk<
    Project,
    string | undefined,
    ThunkConfig<string>
>(
    'project/fetchProjectById',
    async (projectId, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi;

        if (!projectId) {
            throw new Error('No project id');
        }

        try {
            const response = await extra.api.get<Project>(`/projects/${projectId}`);

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
