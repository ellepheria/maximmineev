import { Project } from 'entities/Project';

export interface ProjectDetailsSchema {
    error?: string;
    isLoading?: boolean;
    project?: Project;
}
