import { transformSlots } from 'astro/jsx-runtime';
import type { Feature } from './features/features/Features';
import type { Tool } from './features/tools/Tools';
import { ToolCategory } from './env.d';
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