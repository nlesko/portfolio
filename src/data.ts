import { transformSlots } from 'astro/jsx-runtime';
import type { Feature } from './features/features/Features';
import type { Tool } from './features/tools/Tools';
import { ProjectCategory, ToolCategory, type Project } from './env.d';
import cryptoCurrencyTrackerImage from './assets/images/projects/cryptocurrency-tracker.jpg';
import xmasCountDownClockImage from './assets/images/projects/countdown-clock.jpg';
import guessTheColorGameImage from './assets/images/projects/guess-the-color-game.jpg';
import dmt1Image from './assets/images/projects/dm_t1.jpg';
import ljevakImage from './assets/images/projects/ljevak_hr.jpg';
import begamontImage from './assets/images/projects/begamont.jpg';
import hangmanGameImage from './assets/images/projects/hangman-game.jpg';

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
      name: 'Tailwind CSS',
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
      id: 2,
      name: "Guess the Color Game",
      description: "A simple 'Guess the Color' game made with JavaScript. The game asks you to guess the color corresponding to the RGB value shown in the header.",
      imageUrl: guessTheColorGameImage,
      repository: "https://github.com/nlesko/Guess_the_Color_Portfolio",
      demoUrl: "http://nlesko.github.io/projects/guess-the-color-game/",
      tags: ['JavaScript', 'CSS'],
      projectCategory: ProjectCategory.PERSONAL
    },
    {
      id: 3,
      name: "Christmas Countdown Clock",
      description: "In the holiday spirit, I decided to create a simple Christmas countdown clock. It features a countdown timer that tracks the time remaining until December 25, 00:00:01 AM. Additionally, I added a simple snow-like background using canvas. And what kind of Christmas would it be without some festive lights? :",
      imageUrl: xmasCountDownClockImage,
      repository: "https://github.com/nlesko/christmas-countdown-clock",
      demoUrl: "https://nlesko.github.io/projects/christmas-countdown-clock/",
      tags: ['JavaScript', 'CSS', 'canvas'],
      projectCategory: ProjectCategory.PERSONAL
    },
    {
      id: 4,
      name: "Cryptocurrency Tracker",
      description: "A cryptocurrency tracker built with vanilla JavaScript using the Coinranking API. The web application lists 50 cryptocurrencies and displays their icon, name, current worth in US dollars, and the change in value over the last 24 hours.",
      imageUrl: cryptoCurrencyTrackerImage,
      repository: "https://github.com/nlesko/cryptocurrency-vanilla-js-tracker",
      demoUrl: "https://nlesko.github.io/projects/cryptocurrency-tracker/",
      tags: ['JavaScript', 'AJAX', 'CSS3 Grid'],
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
      tags: ['Vue', 'Vuex'],
      projectCategory: ProjectCategory.PERSONAL
    },
    {
      id: 7,
      name: "Hangman",
      description: "A simple Hangman game made with React. The game asks you to guess the word by selecting letters from the alphabet. The game features a hint button that reveals a letter in the word.",
      imageUrl: hangmanGameImage,
      repository: "https://github.com/nlesko/hangman-game",
      demoUrl: "https://nlesko.github.io/projects/hangman-game/",
      tags: ['React', 'Tailwind CSS', 'Redux'],
      projectCategory: ProjectCategory.PERSONAL
    },
    {
      id: 8,
      name: "Web template",
      description: "A modular, component-based website template built with the TWIG template engine, Bootstrap, jQuery, SCSS, Slick, Webpack, and more. The template includes a configurator for displaying different options across various pages.",
      imageUrl: dmt1Image,
      demoUrl: "http://t1.dimedia.hr/",
      tags: ['TWIG', 'SCSS', 'jQuery'],
      projectCategory: ProjectCategory.PROFESSIONAL
    },
    {
      id: 9,
      name: "Begamont Gradjenje",
      description: "A website targeted at the residential building market, built with the TWIG template engine, Bootstrap, Sass, Webpack, jQuery, and more. The website includes features such as SVG ground plan hover and click events, a fullscreen lightbox gallery, and more.",
      imageUrl: begamontImage,
      demoUrl: "https://www.begamont-gradjenje.hr/",
      tags: ['TWIG', 'SCSS', 'jQuery'],
      projectCategory: ProjectCategory.PROFESSIONAL
    },
    {
      id: 10,
      name: "Library webshop",
      description: "A library webshop built with the PrestaShop e-commerce solution, featuring a custom theme and modules.",
      imageUrl: ljevakImage,
      demoUrl: "https://www.ljevak.hr/",
      tags: ['PrestaShop', 'SCSS', 'jQuery', 'Smarty'],
      projectCategory: ProjectCategory.PROFESSIONAL
    }
  ];