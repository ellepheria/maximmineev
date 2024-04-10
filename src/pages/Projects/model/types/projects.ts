import { Project } from 'entities/Project';

export interface ProjectsPageSchema {
    projects?: Project[];
    isLoading?: boolean;
    error?: string;
}
