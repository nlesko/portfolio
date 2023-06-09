import Image from "next/image";
import React from "react";
import { Skill } from "../types";
import { Card, CardTitle } from "./ui";

/**
 * Creates skill card element.
 *
 * @param {String?} className sets classname for card component from parent component
 * @param {Boolean?} row sets card to display as row
 *  
 *
 * @returns
 */

interface Props {
    skill: Skill
    className?: string
    children?: React.ReactNode,
}


const SkillCard: React.FC<Props> = ({ skill, ...props }) => {
    // const SkillIcon = {...skill.icon}
    return (
        <div className="w-full sm:w-1/2 xl:w-1/4 sm:px-4 mb-6">
            <Card 
                className="bg-steel-blue-800/30 text-white shadow-md items-center"
                row
            >
                <div className="p-6">                    
                    {skill.icon ? React.createElement(skill.icon, { className: 'w-8 h-8' }) : null }
                </div>
                <CardTitle className="w-full p-6 text-sm uppercase text-center">
                    {skill.name}
                </CardTitle>
            </Card>
        </div>
    )
}

export default SkillCard;