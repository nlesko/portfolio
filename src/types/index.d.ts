export type Skill = {
    id: number;
    name: string;
    icon: IconType;
    category: SkillCategory;
}

export type IconType = (props: IconTypeProps) => JSX.Element;

export type Feature = {
    id: number;
    name: string;
    description: string;
    icon?: IconType;
}