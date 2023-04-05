"use client";

import { Children, ReactNode, useState } from "react";
import { JsxChild } from "typescript";

const tabsData = ['DEPT®', 'Heuretes', 'Dimedia']

const ResumeTab = ({ index, label, isActive, handleTabClick }: { index: number, label: string, isActive: boolean, handleTabClick: (index: number) => void }) => {
  return (
    <li role="presentation" className="flex-grow text-center">
      <a
        href="#tabs-home03"
        onClick={() => handleTabClick(index)}
        className="my-2 block border-x-0 border-t-0 border-b-2 border-transparent px-7 pt-4 pb-3.5 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
        data-te-toggle="pill"
        data-te-target="#tabs-home03"
        data-te-nav-active
        role="tab"
        aria-controls="tabs-home03"
        aria-selected="true"
      >{label}</a
      >
    </li>
  )
}

const ResumeTabPanel = ({isActive, children}: {isActive: boolean, children: ReactNode}) => {
  return (
    <div role="tabpanel" className={`w-full h-max text-white p-4 antialiased font-sans text-base font-light leading-relaxed transition-all duration-300 ${isActive ? 'opacity-1 relative' : 'opacity-0 absolute'}`} data-value="html" style={{
      zIndex: 1, top: '0px', left: '0px'
    }}>
      <div>
        {children}
      </div>


    </div>
  )
}

const Resume = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="flex items-start">
      <ul
        className="mr-4 flex list-none flex-col flex-wrap pl-0"
        role="tablist"
        data-te-nav-ref>
        {tabsData.map((tab, index) => (
          <ResumeTab key={index} label={tab} isActive={index === activeTab} handleTabClick={handleTabClick} index={index} />
        ))}
      </ul>
      <div className="my-2 block w-full relative overflow-hidden">
        <ResumeTabPanel isActive={activeTab === 0}>
          <h3>Software Engineer</h3>
          <div>
            Apr 2022 - Present
          </div>          
        </ResumeTabPanel>
        <ResumeTabPanel isActive={activeTab === 1}>
          <h3>Full stack Developer</h3>
          <div>
            Nov 2020 - March 2022
          </div>
          <ul>
            <li>
{`Developed high-quality websites and web applications using a variety of programming languages and frameworks to meet clients' needs.`}`
            </li>
            <li>
            Developed a web application using React and an API using .NET Core for inventory management, database management (MSSQL), and implementation of publication and sync with advertising websites.
            </li>
            <li>
            Developed APIs for Project Management System/File Management System, ensuring seamless communication and data management between systems.
            </li>
            <li>
            Developed a multi-language website with a Content Management System and job application management, improving the user experience and facilitating international recruitment.
            </li>
            <li>
            Developed a file storage web application, allowing for secure and efficient management of digital files.
            </li>
            <li>
            Developed a real-time web application for customer support, featuring a ticketing system and live chat for timely and effective communication with customers.
            </li>
            <li>
            Developed a complete web solution for new construction projects, providing clients with a comprehensive platform for project management and communication.
            </li>
          </ul>
          <h3>Frontend Developer</h3>
          <div>
            May 2020 - Nov 2020
          </div>
          <ul>
            <li>
            {`Developed high-quality websites and web applications using a variety of programming languages and frameworks to meet clients' needs.`}
            </li>
            <li>
            Developed a web solution for inventory management, allowing for efficient and accurate tracking of inventory levels.
            </li>
            <li>
            Optimized website loading times to improve user experience and search engine rankings.
            </li>
            <li>
            Developed a custom-made solution for real-time monitoring of sports results and betting using React, ensuring a seamless user experience and reliable data updates.
            </li>
          </ul>
        </ResumeTabPanel>
        <ResumeTabPanel isActive={activeTab === 2}>
          <h3>FrontendDeveloper</h3>
          <div>
            Feb 2019 - Apr 2020
          </div>
          <ul>
            <li>
              Developed high-quality websites and webshops from design (PSD to HTML) for a wide range of clients.  
            </li>
            <li>
            Optimized and maintained websites to ensure optimal performance, security, and user experience.  
            </li>  
            <li>
            Designed and developed modular, component-based website templates for specific types of clients to ensure consistency and scalability.
            </li>
            <li>
            {`Developed new features and optimized the custom-made Content Management System (CMS) and Project Management System (PMS) to meet the clients' needs.`}
            </li>
            <li>
            Led the development of the business application interface for the residential building market, ensuring a user-friendly and intuitive interface.
            </li>
            <li>
            Optimized and maintained the Dimedia nekretnine business application, and implemented new features to improve functionality and user experience.
            </li>
          </ul>          
        </ResumeTabPanel>
      </div>
    </div>

  );
}

export default Resume;