import { createSlice } from '@reduxjs/toolkit';
import { ProjectSchema } from '../types/project';

const initialState: ProjectSchema = {
    isLoading: false,
    error: undefined,
    project: undefined,
};

export const projectSlice = createSlice({
    name: 'articleDetails',
    initialState,
    reducers: {},
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(fetchProjectById.pending, (state) => {
    //             state.error = undefined;
    //             state.isLoading = true;
    //         })
    //         .addCase(fetchProjectById.fulfilled, (
    //             state,
    //             action: PayloadAction<Project>,
    //         ) => {
    //             state.isLoading = false;
    //             state.project = action.payload;
    //         })
    //         .addCase(fetchProjectById.rejected, (
    //             state,
    //             action,
    //         ) => {
    //             state.isLoading = false;
    //             state.error = action.payload as string;
    //         });
    // },
});

export const { actions: projectActions } = projectSlice;
export const { reducer: projectReducer } = projectSlice;
