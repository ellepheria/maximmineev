export interface Image {
    src: string;
}

export enum Technologies {
    HTML = 'html',
    CSS = 'css',
    SCSS = 'scss',
    PYTHON = 'python',
    TYPESCRIPT = 'typescript',
    JAVASCRIPT = 'javascript',
}

export interface Project {
    id: string;
    title: string;
    description: string;
    images?: Image[];
    createdAt: string;
    technologies?: Technologies[]
    links?: string[]
}
