"use client";

import { ListStyle, SkillCategory } from "@/enums";
import { AdobePhotoshopIcon, BootstrapIcon, DockerIcon, DotNetIcon, ExpressJsIcon, GitIcon, JavaScriptIcon, MicrosoftSqlServerIcon, MongoDbIcon, NodeJsIcon, PostgreSqlIcon, PrestaShopIcon, ReactJsIcon, TailwindIcon, TypeScriptIcon, VueJsIcon } from "./icons";
import { Skill } from "@/types";
import SkillCard from "./SkillCard";
import React from "react";
import Tag from "./Tag";

const SkillSetList = ({ listStyle = ListStyle.CARD }: { listStyle?: ListStyle}) => {
    const skillSets: Array<Skill> = [
      {
        id: 1,
        name: 'React',
        icon: ReactJsIcon,
        category: SkillCategory.FRONTEND,
        isFeatured: true
      },
      {
        id: 2,
        name: 'JavaScript',
        icon: JavaScriptIcon,
        category: SkillCategory.FRONTEND,
        isFeatured: false
      },
      {
        id: 3,
        name: 'TypeScript',
        icon: TypeScriptIcon,
        category: SkillCategory.FRONTEND,
        isFeatured: true
      },
      {
        id: 4,
        name: 'Node',
        icon: NodeJsIcon,
        category: SkillCategory.BACKEND,
        isFeatured: true
      },
      {
        id: 5,
        name: 'Tailwind',
        icon: TailwindIcon,
        category: SkillCategory.FRONTEND,
        isFeatured: true
      },
      {
        id: 6,
        name: 'Bootstrap',
        icon: BootstrapIcon,
        category: SkillCategory.FRONTEND,
        isFeatured: false
      },
      {
        id: 7,
        name: "VueJS",
        icon: VueJsIcon,
        category: SkillCategory.FRONTEND,
        isFeatured: false
      },
      {
        id: 8,
        name: "Express",
        icon: ExpressJsIcon,
        category: SkillCategory.BACKEND,
        isFeatured: false
      },
      {
        id: 9,
        name: "MongoDB",
        icon: MongoDbIcon,
        category: SkillCategory.BACKEND,
        isFeatured: false
      },
      {
        id: 10,
        name: "MSSQL",
        icon: MicrosoftSqlServerIcon,
        category: SkillCategory.BACKEND,
        isFeatured: true
      },
      {
        id: 11,
        name: "PostgreSQL",
        icon: PostgreSqlIcon,
        category: SkillCategory.BACKEND,
        isFeatured: true
      },
      {
        id: 12,
        name: "Git",
        icon: GitIcon,
        category: SkillCategory.OTHER,
        isFeatured: false
      },
      {
        id: 13,
        name: "Prestashop",
        icon: PrestaShopIcon,
        category: SkillCategory.OTHER,
        isFeatured: false
      },
      {
        id: 14,
        name: "Photoshop",
        icon: AdobePhotoshopIcon,
        category: SkillCategory.OTHER,
        isFeatured: false
      },
      {
        id: 15,
        name: ".NET Core",
        icon: DotNetIcon,
        category: SkillCategory.BACKEND,
        isFeatured: true,
      },
      {
        id: 16,
        name: "Docker",
        icon: DockerIcon,
        category: SkillCategory.OTHER,
        isFeatured: false
      }
    ];
  
    const renderListComponent = (skill: Skill) => {
      switch(listStyle) {
        case ListStyle.CARD:
          return (
            <SkillCard skill={skill} key={skill.id} />
          )
        case ListStyle.TAG:
          return (
            <Tag textSize="sm">
              {skill.name}
            </Tag>
          )
        default:
          return (
            <SkillCard skill={skill} key={skill.id} />
          )
      }
    }

    return (
      <div className={`flex flex-wrap ${listStyle === ListStyle.TAG ? 'gap-3' : ''}`}>
        {skillSets.length > 0 && skillSets.map((skill, index) => {
            if(skill.isFeatured) {
              return (
                <React.Fragment key={skill.id}>
                  {renderListComponent(skill)}
                </React.Fragment>
              )          
            }
            return null;
          })
        }
      </div>
    )
  }

export default SkillSetList;