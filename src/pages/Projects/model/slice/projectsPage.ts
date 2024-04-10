import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Project } from 'entities/Project/model/types/project';
import { fetchProjects } from '../services/fetchProjects/fetchProjects';
import { ProjectsPageSchema } from '../types/projects';

const initialState: ProjectsPageSchema = {
    isLoading: false,
    error: undefined,
    projects: [],
    _inited: false,
};

export const projectsPageSlice = createSlice({
    name: 'projectsPage',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProjects.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchProjects.fulfilled, (
                state,
                action: PayloadAction<Project[]>,
            ) => {
                state.isLoading = false;
                state.projects = action.payload;
                state._inited = true;
            })
            .addCase(fetchProjects.rejected, (
                state,
                action,
            ) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: projectsPageActions } = projectsPageSlice;
export const { reducer: projectsPageReducer } = projectsPageSlice;
