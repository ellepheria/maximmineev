export enum Technologies {
    HTML = 'html',
    CSS = 'css',
    SCSS = 'scss',
    PYTHON = 'python',
    TYPESCRIPT = 'typescript',
    JAVASCRIPT = 'javascript',
}

export enum ProjectType {
    EDUCATION = 'education',
    COMMERCIAL = 'commercial',
}

export interface Project {
    id: string;
    cover?: string;
    title?: string;
    description?: string;
    images?: string[];
    createdAt?: string;
    technologies?: Technologies[];
    types?: ProjectType[];
    links?: string[];
}

export interface ProjectSchema {
    project?: Project;
    error?: string;
    isLoading?: boolean;
}
