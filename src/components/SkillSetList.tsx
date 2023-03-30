"use client";

import { SkillCategory } from "@/enums";
import { AdobePhotoshopIcon, BootstrapIcon, DockerIcon, ExpressJsIcon, GitIcon, JavaScriptIcon, MicrosoftSqlServerIcon, MongoDbIcon, NodeJsIcon, PostgreSqlIcon, PrestaShopIcon, ReactJsIcon, TailwindIcon, TypeScriptIcon, VueJsIcon } from "./icons";
import { Skill } from "@/types";
import SkillCard from "./SkillCard";

const SkillSetList = () => {
    const skillSets: Array<Skill> = [
      {
        id: 1,
        name: 'React',
        icon: ReactJsIcon,
        category: SkillCategory.FRONTEND
      },
      {
        id: 2,
        name: 'JavaScript',
        icon: JavaScriptIcon,
        category: SkillCategory.FRONTEND
      },
      {
        id: 3,
        name: 'TypeScript',
        icon: TypeScriptIcon,
        category: SkillCategory.FRONTEND
      },
      {
        id: 4,
        name: 'Node',
        icon: NodeJsIcon,
        category: SkillCategory.BACKEND
      },
      {
        id: 5,
        name: 'Tailwind',
        icon: TailwindIcon,
        category: SkillCategory.FRONTEND
      },
      {
        id: 6,
        name: 'Bootstrap',
        icon: BootstrapIcon,
        category: SkillCategory.FRONTEND
      },
      {
        id: 7,
        name: "VueJS",
        icon: VueJsIcon,
        category: SkillCategory.FRONTEND
      },
      {
        id: 8,
        name: "Express",
        icon: ExpressJsIcon,
        category: SkillCategory.BACKEND
      },
      {
        id: 9,
        name: "MongoDB",
        icon: MongoDbIcon,
        category: SkillCategory.BACKEND
      },
      {
        id: 10,
        name: "MSSQL",
        icon: MicrosoftSqlServerIcon,
        category: SkillCategory.BACKEND
      },
      {
        id: 11,
        name: "PostgreSQL",
        icon: PostgreSqlIcon,
        category: SkillCategory.BACKEND
      },
      {
        id: 12,
        name: "Git",
        icon: GitIcon,
        category: SkillCategory.OTHER
      },
      {
        id: 13,
        name: "Prestashop",
        icon: PrestaShopIcon,
        category: SkillCategory.OTHER
      },
      {
        id: 14,
        name: "Photoshop",
        icon: AdobePhotoshopIcon,
        category: SkillCategory.OTHER
      },
      {
        id: 16,
        name: "Docker",
        icon: DockerIcon,
        category: SkillCategory.OTHER
      }
    ];
  
    return (
      <div className="flex flex-wrap">
        {skillSets.length > 0 && skillSets.map((skill, index) => (
          <SkillCard skill={skill} key={skill.id} />
        ))
        }
      </div>
    )
  }

export default SkillSetList;