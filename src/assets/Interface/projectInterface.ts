export interface ProjectArray {
    data: ProjectItem[]
}

export interface ProjectItem {
    id: number,
    resume: string,
    link: string,
    techno: Techno[],
    title: string,
}

export interface Techno {
    id: number,
    name: string,
    color: string,
}