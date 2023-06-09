import { ProjectCategory, SkillCategory } from "@/enums";
import { ForwardRefExoticComponent, PropsWithChildren, ReactElement, SVGProps } from "react";

export type Skill = {
    id: number;
    name: string;
    icon: IconType;
    category: SkillCategory;
    isFeatured: boolean;
}

export type IconTypeProps = {
    width?: number,
    height?: number,
    className?: string
}

export type IconType = (props: IconTypeProps) => ReactElement<any, any> | JSX.Element;

export type Feature = {
    id: number;
    name: string;
    description: string;
    icon: IconType | any;
}

export type Project = {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    repository?: string | undefined;
    demoUrl?: string | undefined;
    tags: string[];
    projectCategory: ProjectCategory;
}