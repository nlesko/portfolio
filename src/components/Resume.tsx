"use client";

import { Children, ReactNode, useState } from "react";
import { JsxChild } from "typescript";

const tabsData = ['DEPT®', 'Heuretes', 'Dimedia']

const resumeData = [
  {
    id: 1,
    company: 'DEPT®',
    positions: [
      {
        id: 1,
        title: 'Software Engineer',
        date: 'Apr 2022 - Present',
        bullets: [
        ]
      }
    ]
  },
  {
    id: 2,
    company: 'Heuretes',
    positions: [
      {
        id: 1,
        title: 'Full stack Developer',
        date: 'Nov 2020 - March 2022',
        bullets: [
          "Developed high-quality websites and web applications using a variety of programming languages and frameworks to meet clients' needs.",
          "Developed a web application using React and an API using .NET Core for inventory management, database management (MSSQL), and implementation of publication and sync with advertising websites.",
          "Developed APIs for Project Management System/File Management System, ensuring seamless communication and data management between systems.",
          "Developed a multi-language website with a Content Management System and job application management, improving the user experience and facilitating international recruitment.",
          "Developed a file storage web application, allowing for secure and efficient management of digital files.",
          "Developed a real-time web application for customer support, featuring a ticketing system and live chat for timely and effective communication with customers.",
          "Developed a complete web solution for new construction projects, providing clients with a comprehensive platform for project management and communication.",

        ],
      },
      {
        id: 2,
        title: 'Frontend Developer',
        date: 'May 2020 - Nov 2020',
        bullets: [
          "Developed high-quality websites and web applications using a variety of programming languages and frameworks to meet clients' needs.",
          "Developed a web solution for inventory management, allowing for efficient and accurate tracking of inventory levels.",
          "Optimized website loading times to improve user experience and search engine rankings.",
          "Developed a custom-made solution for real-time monitoring of sports results and betting using React, ensuring a seamless user experience and reliable data updates.",
        ],
      }
    ],
  },
  {
    id: 3,
    company: 'Dimedia',
    positions: [
      {
        id: 1,
        title: 'Frontend Developer',
        date: 'Feb 2019 - Apr 2020',
        bullets: [
          "Developed high-quality websites and webshops from design (PSD to HTML) for a wide range of clients.",
          "Optimized and maintained websites to ensure optimal performance, security, and user experience.",
          "Designed and developed modular, component-based website templates for specific types of clients to ensure consistency and scalability.",
          "Developed new features and optimized the custom-made Content Management System (CMS) and Project Management System (PMS) to meet the clients' needs.",
          "Led the development of the business application interface for the residential building market, ensuring a user-friendly and intuitive interface.",
          "Optimized and maintained the Dimedia nekretnine business application, and implemented new features to improve functionality and user experience.",
        ],
      },
    ],
  },
];


const ResumeTab = ({ id, label, isActive, handleTabClick }: { id: number, label: string, isActive: boolean, handleTabClick: (id: number) => void }) => {
  return (
    <li role="presentation" className={`flex-grow text-left border-l-2 ${isActive ? 'border-white' : 'border-steel-blue-800/50'}`}>
      <a
        href="#tabs-home03"
        onClick={() => handleTabClick(id)}
        className="my-2 block border-y-0 border-t-0  px-7 pt-4 pb-3.5 text-sm font-light tracking-[0.2rem] leading-tight hover:isolate hover:border-transparent hover:bg-steel-blue-800/30 focus:isolate focus:border-transparent"
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

const ResumeTabPanel = ({ isActive, children }: { isActive: boolean, children: ReactNode }) => {
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

const ResumeTitle = ({ children }: { children: ReactNode }) => {
  return (
    <h3 className="text-lg mb-2 font-light tracking-[0.2rem]">{children}</h3>
  )
}

const ResumeDate = ({ children }: { children: ReactNode }) => {
  return (
    <div className="text-xs font-light tracking-[0.2rem]">{children}</div>
  )
}

const ResumeDescription = ({ children }: { children: ReactNode }) => {
  return (
    <div className="text-sm font-light tracking-[0.7rem]">{children}</div>
  )
}


const Resume = () => {
  const [activeTab, setActiveTab] = useState(resumeData[0]?.id ?? 1);

  const handleTabClick = (id: number) => {
    setActiveTab(id);
  };

  return (
    <div className="flex items-start">
      <ul
        className="mr-4 flex list-none flex-col flex-wrap pl-0"
        role="tablist"
        data-te-nav-ref>
        {resumeData.map((resume) => (
          <ResumeTab key={resume.id} label={resume.company} isActive={resume.id === activeTab} handleTabClick={handleTabClick} id={resume.id} />
        ))}
      </ul>
      <div className="my-2 block w-full relative overflow-hidden">
        {resumeData.map((resume) => (
          <ResumeTabPanel key={resume.id} isActive={resume.id === activeTab}>
            {resume.positions.map((position) => (
              <div key={position.id}>
                <ResumeTitle>{position.title}</ResumeTitle>
                <ResumeDate>{position.date}</ResumeDate>
                <ul className="py-4">
                  {position?.bullets?.map((bullet, index) => (
                    <li key={index}  className="relative before:absolute before:left-0 before:content-[attr(before)] pl-10">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </ResumeTabPanel>
        ))}       
      </div>
    </div>

  );
}

export default Resume;