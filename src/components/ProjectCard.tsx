import { ArrowTopRightOnSquareIcon, CodeBracketSquareIcon } from '@heroicons/react/20/solid';

import { Project } from "@/types"
import Image from "next/image"

const ProjectCard = ({
    project,
    reverse = false
 }: {
    project: Project
    reverse?: boolean
}) => {
    return (
        <div className={`flex ${reverse ? 'flex-row-reverse' : 'flex-row'} mb-20 relative`}>
              <div className="w-1/2 relative z-10 max-w-[560px] h-[315px]">
                <Image src={'/cryptocurrency-tracker.jpg'} alt={project.name} fill/>
              </div>
              <div className="w-1/2 flex flex-col justify-between relative z-20">
                <h3 className={`text-xl uppercase tracking-[0.2rem] ${reverse ? 'pr-7' : 'pl-8'} pt-2`}>
                  {project.name}
                </h3>
                
                <div className={`bg-steel-blue-800/90 ${reverse ? '-mr-20' : '-ml-20'}  text-base p-8`}>
                  {project.description}
                </div>
                <div className="flex flex-col  mt-2">
                  
                  <ul className={`flex flex-wrap ${reverse ? 'justify-start pr-8' : 'justify-end pl-8'}  pb-2`}>
                    {project.tags && project.tags.map((tag, index) => (
                      <li key={index} className="first:ml-0 ml-6 mb-1 font-light tracking-[0.2rem] text-xs">
                        {tag}
                      </li>
                    ))}
                  </ul>
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
                </div>
              </div>
            </div>
    )
}

export default ProjectCard