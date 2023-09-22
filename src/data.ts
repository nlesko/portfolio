import { transformSlots } from 'astro/jsx-runtime';
import type { Feature } from './features/features/Features';
import type { Tool } from './features/tools/Tools';
import { ProjectCategory, ToolCategory } from './env.d';
import cryptoCurrencyTrackerImage from './assets/images/projects/cryptocurrency-tracker.jpg';
export const features: Array<Feature> = [
    {
        id: 1,
        name: 'Performance',
        description: 'Optimizing fast on load and lag free interactions',
        icon: "NCloudScale",
    },
    {
        id: 2,
        name: 'Responsive',
        description: 'Mobile-first approach, built for any device',
        icon: "DevicePhoneMobile"
    },
    {
        id: 3,
        name: 'Dynamic',
        description: 'Alive Web Applications, dynamic content, not plain old static',
        icon: "Rocket"
    },
    {
        id: 4,
        name: 'Built With Love',
        description: 'Most important, build from bottom to top of my heart.',
        icon: "Heart"
    }
]

export const tools: Array<Tool> = [
    {
      id: 1,
      name: 'React',
      icon: "ReactJs",
      category: ToolCategory.FRONTEND,
      isFeatured: true
    },
    {
      id: 2,
      name: 'JavaScript',
      icon: "JavaScript",
      category: ToolCategory.FRONTEND,
      isFeatured: false
    },
    {
      id: 3,
      name: 'TypeScript',
      icon: "TypeScript",
      category: ToolCategory.FRONTEND,
      isFeatured: true
    },
    {
      id: 4,
      name: 'Node',
      icon: "NodeJs",
      category: ToolCategory.BACKEND,
      isFeatured: true
    },
    {
      id: 5,
      name: 'Tailwind',
      icon: "Tailwind",
      category: ToolCategory.FRONTEND,
      isFeatured: true
    },
    {
      id: 6,
      name: 'Bootstrap',
      icon: "Bootstrap",
      category: ToolCategory.FRONTEND,
      isFeatured: false
    },
    {
      id: 7,
      name: "VueJS",
      icon: "VueJs",
      category: ToolCategory.FRONTEND,
      isFeatured: false
    },
    {
      id: 8,
      name: "Express",
      icon: "ExpressJs",
      category: ToolCategory.BACKEND,
      isFeatured: false
    },
    {
      id: 9,
      name: "MongoDB",
      icon: "MongoDb",
      category: ToolCategory.BACKEND,
      isFeatured: false
    },
    {
      id: 10,
      name: "MSSQL",
      icon: "MicrosoftSqlServer",
      category: ToolCategory.BACKEND,
      isFeatured: true
    },
    {
      id: 11,
      name: "PostgreSQL",
      icon: "PostgreSql",
      category: ToolCategory.BACKEND,
      isFeatured: true
    },
    {
      id: 12,
      name: "Git",
      icon: "Git",
      category: ToolCategory.OTHER,
      isFeatured: false
    },
    {
      id: 13,
      name: "Prestashop",
      icon: "PrestaShop",
      category: ToolCategory.OTHER,
      isFeatured: false
    },
    {
      id: 14,
      name: "Photoshop",
      icon: "AdobePhotoshop",
      category: ToolCategory.OTHER,
      isFeatured: false
    },
    {
      id: 15,
      name: ".NET Core",
      icon: "DotNet",
      category: ToolCategory.BACKEND,
      isFeatured: true,
    },
    {
      id: 16,
      name: "Docker",
      icon: "Docker",
      category: ToolCategory.OTHER,
      isFeatured: false
    }
  ];

  export const projects: Array<Project> = [
    {
      id: 1,
      name: "Mountain Climber",
      description: "Landing page for Travel Agency. Built with CSS Flexbox",
      imageUrl: cryptoCurrencyTrackerImage,
      demoUrl: "http://nytprojects.dx.am/mountain/",
      tags: ['React', 'Node', 'CSS'],
      projectCategory: ProjectCategory.PERSONAL
    },
    {
      id: 2,
      name: "Guess the Color Game",
      description: "Simple Guess the Color Game made with JavaScript. The Game asks you to guess colour of RGB value shown in header.",
      imageUrl: cryptoCurrencyTrackerImage,
      repository: "https://github.com/nlesko/Guess_the_Color_Portfolio",
      demoUrl: "http://nytprojects.dx.am/guess-the-color/",
      tags: ['React', 'Node', 'CSS'],
      projectCategory: ProjectCategory.PERSONAL
    },
    {
      id: 3,
      name: "Christmas Countdown Clock",
      description: "In the mood for holidays decided to put together this simple Christmas countdown clock It contains countdown timer that is counting how much time is left till December 25, 00:00:01 in the night. Besides timer added simple snow-like background using canvas. Also what kind of Christmas it would be without some Christmas lights? :)",
      imageUrl: cryptoCurrencyTrackerImage,
      repository: "https://github.com/nlesko/christmas-countdown-clock",
      demoUrl: "https://nlesko.github.io/projects/christmas-countdown-clock/",
      tags: ['React', 'Node', 'CSS'],
      projectCategory: ProjectCategory.PERSONAL
    },
    {
      id: 4,
      name: "Cryptocurrency Tracker",
      description: "Cryptocurrency Tracker built with vanilla JS using Coinranking API. Web application will list 50 Cryptocurrencies and show their Icon, name, current worth US dollars and change in last 24h.",
      imageUrl: cryptoCurrencyTrackerImage,
      repository: "https://github.com/nlesko/cryptocurrency-vanilla-js-tracker",
      demoUrl: "https://nlesko.github.io/projects/cryptocurrency-tracker/",
      tags: ['React', 'Node', 'CSS'],
      projectCategory: ProjectCategory.PERSONAL
    },
    {
      id: 5,
      name: "Vue Smoothies",
      description: "A simple CRUD Smoothie recipe website using Vue.js, Axios for AJAX calls and Firebase for storing data.",
      imageUrl: cryptoCurrencyTrackerImage,
      demoUrl: "https://serene-shore-38026.herokuapp.com/",
      tags: ['React', 'Node', 'CSS'],
      projectCategory: ProjectCategory.PERSONAL
    },
    {
      id: 6,
      name: "Build a Robot",
      description: "A Robot builder web application that uses Vue.js, Vuex for state managment, Axios for AJAX calls and Express for serving application.",
      imageUrl: cryptoCurrencyTrackerImage,
      repository: "https://github.com/nlesko/build-a-bot",
      demoUrl: "https://dry-taiga-74990.herokuapp.com/build",
      tags: ['React', 'Node', 'CSS'],
      projectCategory: ProjectCategory.PERSONAL
    },
    {
      id: 7,
      name: "Web template",
      description: "Modular, component-based website template built with TWIG template engine, bootstrap, jQuery, SCSS, slick, webpack and more. The template contains configurator for displaying different options on different pages.",
      imageUrl: cryptoCurrencyTrackerImage,
      demoUrl: "http://t1.dimedia.hr/",
      tags: ['React', 'Node', 'CSS'],
      projectCategory: ProjectCategory.PROFESSIONAL
    },
    {
      id: 8,
      name: "Begamont Gradjenje",
      description: "Website targeted for the residential building market, built with TWIG template engine, bootstrap, sass, webpack, jQuery, and more. The website has features like SVG ground plan hover and clicks events, fullscreen lightbox gallery and more.",
      imageUrl: cryptoCurrencyTrackerImage,
      demoUrl: "https://www.begamont-gradjenje.hr/",
      tags: [],
      projectCategory: ProjectCategory.PROFESSIONAL
    },
    {
      id: 9,
      name: "Library webshop",
      description: "Library webshop build with Prestashop e-commerce solution with custom theme and modules.",
      imageUrl: cryptoCurrencyTrackerImage,
      demoUrl: "https://www.ljevak.hr/",
      tags: [],
      projectCategory: ProjectCategory.PROFESSIONAL
    }
  ];