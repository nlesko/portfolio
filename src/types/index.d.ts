import { ProjectCategory, SkillCategory } from "@/enums";
import { ForwardRefExoticComponent, SVGProps } from "react";

export type Skill = {
    id: number;
    name: string;
    icon: IconType;
    category: SkillCategory;
}

export type IconTypeProps = {
    width?: number,
    height?: number,
    className?: string
}

export type IconType = (props: IconTypeProps| ForwardRefExoticComponent<SVGProps>) => JSX.Element;

export type Feature = {
    id: number;
    name: string;
    description: string;
    icon?: React.PropsWithChildren<IconType> | ForwardRefExoticComponent<SVGProps>;
}

export type Project = {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    repository: string | null;
    demoUrl: string | null;
    tags: string[];
    projectCategory: ProjectCategory;
}