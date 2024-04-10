import { createSlice } from '@reduxjs/toolkit';
import { ProjectDetailsPageSchema } from '../types/projectDetailsPage';

const initialState: ProjectDetailsPageSchema = {
    projectDetails: {},
    error: undefined,
    isLoading: true,
};

export const projectDetailsPageSlice = createSlice({
    name: 'projectDetailsPage',
    initialState,
    reducers: {},
});

export const { actions: projectDetailsPageActions } = projectDetailsPageSlice;
export const { reducer: projectDetailsPageReducer } = projectDetailsPageSlice;
