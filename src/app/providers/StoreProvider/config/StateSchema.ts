import { AdminSchema } from 'entities/Admin';
import { ProjectSchema } from 'entities/Project/model/types/project';
import { EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ProjectDetailsSchema } from 'entities/ProjectDetails/model/types/projectDetails';
import { ProjectsPageSchema } from 'pages/Projects';
import { PostsPageSchema } from 'pages/PostsPage/model/types/posts';
import { PostDetailsSchema } from 'entities/Post';
import { CreatePostSchema } from 'entities/CreatePost/model/types/createPost';
import { UISchema } from 'features/ui/model/types/UISchema';

export interface StateSchema {
	admin: AdminSchema;
	ui: UISchema;

	// async reducers
	project?: ProjectSchema;
	projectDetails?: ProjectDetailsSchema;
	projectsPage?: ProjectsPageSchema;
	postsPage?: PostsPageSchema;
	postDetails?: PostDetailsSchema;
	createPost?: CreatePostSchema;
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
