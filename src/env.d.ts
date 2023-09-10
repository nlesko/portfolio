/// <reference types="astro/client" />
export enum ListStyle {
    GRID = 1,
    LIST = 2,
    TAG = 3,
    CARD = 4,
}

export enum ToolCategory {
    FRONTEND=1,
    BACKEND=2,
    OTHER=3
}

export type Tool = {
    id: number;
    name: string;
    icon?: string;
    category: ToolCategory;
    isFeatured: boolean;
}
export type Feature = {
    id: number;
    name: string;
    description: string;
    icon: IconType | any;
    pack?: string;
}