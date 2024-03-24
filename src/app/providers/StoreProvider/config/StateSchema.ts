import { AdminSchema } from 'entities/Admin';
import { ProjectSchema } from 'entities/Project/model/types/project';
import { EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ProjectDetailsSchema } from '../../../../pages/ProjectDetailsPage';
import { ProjectsPageSchema } from '../../../../pages/Projects/ProjectsPage/model/types/projects';

export interface StateSchema {
	admin: AdminSchema;

	// async reducers
	project?: ProjectSchema;
	projectDetails?: ProjectDetailsSchema;
	projectsPage?: ProjectsPageSchema;
}

export type StateSchemaKey = keyof StateSchema;
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;

export interface ReducerManager {
	getReducerMap: () => ReducersMapObject<StateSchema>;
	reduce: any;
	add: (key: StateSchemaKey, reducer: Reducer) => void;
	remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
	reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
	api: AxiosInstance;
}

export interface ThunkConfig<T> {
	rejectValue: T;
	extra: ThunkExtraArg;
	state: StateSchema;
}
