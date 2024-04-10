import { ProjectDetailsSchema } from 'entities/ProjectDetails/model/types/projectDetails';

export interface ProjectDetailsPageSchema {
    isLoading?: boolean;
    error?: string;
    projectDetails: ProjectDetailsSchema;
}
