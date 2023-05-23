"use client";
import { ArrowTopRightOnSquareIcon, CodeBracketSquareIcon } from '@heroicons/react/20/solid';

import { Project } from "@/types"
import Image from "next/image"
import { Variants, motion } from 'framer-motion';
import Tag from './Tag';



const ProjectCard = ({
    project,
    reverse = false
 }: {
    project: Project
    reverse?: boolean
}) => {
  const introProjectImageVariants: Variants = {
    hide: {
        opacity: 0,
        x: reverse ? 300 : -300,
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.4,
            function: 'ease',
        },
    },    
  };
  const introProjectDescVariants: Variants = {
    hide: {
        opacity: 0,
        x: reverse ? -300 : 300,
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.4,
            function: 'ease',
        },
    },    
  };
  const introProjectTitleLinksVariants: Variants = {
    hide: {
        opacity: 0,
        y: 50,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            function: 'ease',
        },
    },    
  };

    return (
        <div className={`flex ${reverse ? 'flex-row-reverse' : 'flex-row'} mb-20 relative`}>
              <motion.div className="w-1/2 relative z-10 max-w-[560px] h-[315px]"
                initial="hide"
                whileInView="show"
                viewport={{ once: true}}
                // exit="hide"
                variants={introProjectImageVariants}
              >
                <Image src={'/cryptocurrency-tracker.jpg'} alt={project.name} fill/>
              </motion.div>
              <div className="w-1/2 flex flex-col justify-between relative z-20">
                <motion.h3 className={`text-xl uppercase tracking-[0.2rem] ${reverse ? 'pr-7' : 'pl-8'} pt-2`}
                  initial="hide"
                  whileInView="show"
                  viewport={{ once: true}}
                  // exit="hide"
                  variants={introProjectTitleLinksVariants}
                >
                  {project.name}
                </motion.h3>
                
                <motion.div className={`bg-steel-blue-800/90 ${reverse ? '-mr-20' : '-ml-20'}  text-base p-8`}
                  initial="hide"
                  whileInView="show"
                  viewport={{ once: true}}
                  // exit="hide"
                  variants={introProjectDescVariants}
                >
                  {project.description}
                </motion.div>
                <motion.div className="flex flex-col  mt-2"
                   initial="hide"
                   whileInView="show"
                   viewport={{ once: true}}
                   // exit="hide"
                   variants={introProjectTitleLinksVariants}
                >                  
                  <div className={`flex flex-wrap gap-3 ${reverse ? 'justify-start pr-8' : 'justify-end pl-8'}  pb-2`}>
                    {project.tags && project.tags.map((tag, index) => (
                      <Tag textSize='sm' key={index}>
                        {tag}
                      </Tag>
                      // <li key={index} className="first:ml-0 ml-6 mb-1 font-light tracking-[0.2rem] text-xs">
                      //   {tag}
                      // </li>
                    ))}
                  </div>
                  {(project.repository || project.demoUrl) && (
                    <ul className={`flex flex-row flex-wrap ${reverse ? 'justify-start pr-8' : 'justify-end pl-8'} mt-2`}>
                      {project.repository && (
                        <li className="first:ml-0 ml-6 mb-1 font-light tracking-[0.2rem] text-sm">
                          <a href={project.repository} target="_blank" rel="noreferrer">
                            <CodeBracketSquareIcon width={24} height={24} />
                          </a>
                        </li>
                      )}
                      {project.demoUrl && (
                        <li className="first:ml-0 ml-6 mb-1 font-light tracking-[0.2rem] text-sm">
                          <a href={project.demoUrl} target="_blank" rel="noreferrer">
                            <ArrowTopRightOnSquareIcon width={24} height={24}/>
                          </a>
                        </li>
                      )}
                    </ul> 
                  )}
                </motion.div>
              </div>
            </div>
    )
}

export default ProjectCard