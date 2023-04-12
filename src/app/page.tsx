import { DevicePhoneMobileIcon, HeartIcon, ArrowTopRightOnSquareIcon, CodeBracketSquareIcon } from '@heroicons/react/20/solid';
import Section from "@/containers/Section";
import FeatureCard from "@/components/FeatureCard";
import type { Feature, Project } from "@/types";
import { NCloudScaleIcon, RocketIcon } from '@/components/icons';
import { ProjectCategory } from '@/enums';
import SkillSetList from '@/components/SkillSetList';
import Resume from '@/components/Resume';
import Image from 'next/image';
import ProjectCard from '@/components/ProjectCard';
import Banner from '@/containers/Banner';
import FeatureList from '@/components/FeatureList';

const projects: Array<Project> = [
  {
    id: 1,
    name: "Mountain Climber",
    description: "Landing page for Travel Agency. Built with CSS Flexbox",
    imageUrl: "mountain_climber.jpg",
    demoUrl: "http://nytprojects.dx.am/mountain/",
    tags: ['React', 'Node', 'CSS'],
    projectCategory: ProjectCategory.PERSONAL
  },
  {
    id: 2,
    name: "Guess the Color Game",
    description: "Simple Guess the Color Game made with JavaScript. The Game asks you to guess colour of RGB value shown in header.",
    imageUrl: "Guess-the-color-game.jpg",
    repository: "https://github.com/nlesko/Guess_the_Color_Portfolio",
    demoUrl: "http://nytprojects.dx.am/guess-the-color/",
    tags: ['React', 'Node', 'CSS'],
    projectCategory: ProjectCategory.PERSONAL
  },
  {
    id: 3,
    name: "Christmas Countdown Clock",
    description: "In the mood for holidays decided to put together this simple Christmas countdown clock It contains countdown timer that is counting how much time is left till December 25, 00:00:01 in the night. Besides timer added simple snow-like background using canvas. Also what kind of Christmas it would be without some Christmas lights? :)",
    imageUrl: "countdown-clock.jpg",
    repository: "https://github.com/nlesko/christmas-countdown-clock",
    demoUrl: "https://nlesko.github.io/projects/christmas-countdown-clock/",
    tags: ['React', 'Node', 'CSS'],
    projectCategory: ProjectCategory.PERSONAL
  },
  {
    id: 4,
    name: "Cryptocurrency Tracker",
    description: "Cryptocurrency Tracker built with vanilla JS using Coinranking API. Web application will list 50 Cryptocurrencies and show their Icon, name, current worth US dollars and change in last 24h.",
    imageUrl: "cryptocurrency-tracker.jpg",
    repository: "https://github.com/nlesko/cryptocurrency-vanilla-js-tracker",
    demoUrl: "https://nlesko.github.io/projects/cryptocurrency-tracker/",
    tags: ['React', 'Node', 'CSS'],
    projectCategory: ProjectCategory.PERSONAL
  },
  {
    id: 5,
    name: "Vue Smoothies",
    description: "A simple CRUD Smoothie recipe website using Vue.js, Axios for AJAX calls and Firebase for storing data.",
    imageUrl: "vue-smoothies.jpg",
    demoUrl: "https://serene-shore-38026.herokuapp.com/",
    tags: ['React', 'Node', 'CSS'],
    projectCategory: ProjectCategory.PERSONAL
  },
  {
    id: 6,
    name: "Build a Robot",
    description: "A Robot builder web application that uses Vue.js, Vuex for state managment, Axios for AJAX calls and Express for serving application.",
    imageUrl: "build-a-bot.jpg",
    repository: "https://github.com/nlesko/build-a-bot",
    demoUrl: "https://dry-taiga-74990.herokuapp.com/build",
    tags: ['React', 'Node', 'CSS'],
    projectCategory: ProjectCategory.PERSONAL
  },
  {
    id: 7,
    name: "Web template",
    description: "Modular, component-based website template built with TWIG template engine, bootstrap, jQuery, SCSS, slick, webpack and more. The template contains configurator for displaying different options on different pages.",
    imageUrl: "dm_t1.jpg",
    demoUrl: "http://t1.dimedia.hr/",
    tags: ['React', 'Node', 'CSS'],
    projectCategory: ProjectCategory.PROFESSIONAL
  },
  {
    id: 8,
    name: "Begamont Gradjenje",
    description: "Website targeted for the residential building market, built with TWIG template engine, bootstrap, sass, webpack, jQuery, and more. The website has features like SVG ground plan hover and clicks events, fullscreen lightbox gallery and more.",
    imageUrl: "begamont.jpg",
    demoUrl: "https://www.begamont-gradjenje.hr/",
    tags: [],
    projectCategory: ProjectCategory.PROFESSIONAL
  },
  {
    id: 9,
    name: "Library webshop",
    description: "Library webshop build with Prestashop e-commerce solution with custom theme and modules.",
    imageUrl: "ljevak_hr.jpg",
    demoUrl: "https://www.ljevak.hr/",
    tags: [],
    projectCategory: ProjectCategory.PROFESSIONAL
  }
];

export default function Home() {
  return (

    <main>
      <Banner>
        <div className="flex flex-col align-center justify-center">
          <h1 className="text-6xl text-center font-bold tracking-widest">
            Hi, 
            <span className="block mt-5 tracking-[0.7rem]">{`I'm Nikola`}</span>
            <span className="block mt-5 text-4xl">Software Engineer / Full Stack Web Developer.</span>
            {/* <span className=" block mt-6 tracking-[0.4rem]">Nikola Leško.</span> */}

          </h1>
          <div className="mt-5" />
          <p className="text-2xl text-center">
          {`And I'm the person behind the code that makes websites and web apps come to life.`}
          </p>
        </div>
        {/* <div className="flex">
                    <h2 className="text-5xl uppercase font-light tracking-widest">Building stuff for the web</h2>
                </div> */}
        
      </Banner>
      {/* <Section title=""> */}

      {/* <div className="my-20" /> */}
      {/* <div className="flex flex-row px-4">
          <div className="w-full py-10">
            <h3 className="text-4xl mb-4">Who am I?</h3>
            <p className="text-xl">
              {`Hi, I'm Nikola Leško, a software engineer with experience in building fast and elegant products for global companies. From marketing websites to enterprise apps, I prioritize performance, scalability, and accessibility to deliver optimized solutions. Let's discuss how I can help your business succeed.`} */}
      {/* Hi there! My name is Nikola Leško, and I'm a passionate software engineer with a proven track record of building cutting-edge products for companies and businesses worldwide. I specialize in crafting elegant, fast, and accessible user experiences that meet and exceed client expectations.
              <br />
              <br />
              My experience spans across a variety of industries, and I have developed everything from marketing websites to complex enterprise-level applications. With every project, I prioritize performance, scalability, and accessibility to ensure that my solutions are optimized for scale.`}
              <br />
              <br />
              {`As a self-motivated individual, I'm comfortable working independently or in a team environment. I'm equipped with a diverse set of tools and technologies, which enables me to deliver fast, resilient solutions that meet business needs.`}
<br /><br />
              I'm always looking for new challenges and opportunities to learn and grow as a developer. So, if you're interested in discussing a potential collaboration or have any questions, please don't hesitate to reach out. */}
      {/* </p>
          </div>
        </div> */}
      {/* </Section> */}
      <Section title="Me & Toolbox">
        <FeatureList />
        <div className='my-20' />
        <div className="flex flex-col px-4">
          <p className="mb-4">
            {`Hi, I'm Nikola Leško, a software engineer with experience in building fast and elegant products for global companies. From marketing websites to enterprise apps, I prioritize performance, scalability, and accessibility to deliver optimized solutions. Let's discuss how I can help your business succeed.`}
          </p>

          <p className="mb-4">
            {`As a Full-stack Web Developer / Software Engineer, I'm like a builder with a toolbox full of the latest tech and gadgets. Let me show you what I've got - we can use my tools to build something amazing together.`}
          </p>
          <p className="">
            Explore the technologies and tools I use to bring ideas to life.
          </p>
        </div>
        <div className="my-20" />
        <SkillSetList />
      </Section>
      {/* <Section title="My Journey So Far">
        <div className="w-full p-10">
          <Resume />
        </div>
      </Section> */}
      <Section title="Projects">
        <div className="w-full p-10">
          {projects.length > 0 && projects.map((project, index) => (
            <ProjectCard key={project.id} reverse={index % 2 === 0} project={project} />
          ))}
        </div>
      </Section>
      {/* <Section title="Projects" className=''>
        <div className="grid gap-7 grid-cols-3">
          {projects.length > 0 && projects.map((project, index) => (
            <div key={project.id} className="flex flex-col p-6 bg-steel-blue-800/90">
              <h3 className="text-2xl uppercase">
                {project.name}
              </h3>
              <div className=" text-large">
                {project.description}
              </div>
              <ul className="flex flex-wrap justify-start">
                {project.tags && project.tags.map((tag, index) => (
                  <li key={index} className="first:ml-0 ml-6 mb-1">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section> */}
    </main>
  )
}
