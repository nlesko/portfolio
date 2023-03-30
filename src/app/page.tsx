import { DevicePhoneMobileIcon, HeartIcon } from '@heroicons/react/20/solid';
import Section from "@/containers/Section";
import FeatureCard from "@/components/FeatureCard";
import type { Feature, Skill } from "@/types";
import { AdobePhotoshopIcon, BootstrapIcon, DockerIcon, ExpressJsIcon, GitIcon, JavaScriptIcon, MicrosoftSqlServerIcon, MongoDbIcon, NCloudScaleIcon, NodeJsIcon, PostgreSqlIcon, PrestaShopIcon, ReactJsIcon, RocketIcon, TailwindIcon, TypeScriptIcon, VueJsIcon } from '@/components/icons';
import SkillCard from '@/components/SkillCard';
import { SkillCategory } from '@/enums';

const FeatureList = () => {
  const features: Array<Feature> = [
    {
      id: 1,
      name: 'Performance',
      description: 'Optimizing fast on load and lag free interactions',
      icon: NCloudScaleIcon,
    },
    {
      id: 2,
      name: 'Responsive',
      description: 'Mobile-first approach, built for any device',
      icon: DevicePhoneMobileIcon
    },
    {
      id: 3,
      name: 'Dynamic',
      description: 'Alive Web Applications, dynamic content, not plain old static',
      icon: RocketIcon
    },
    {
      id: 4,
      name: 'Built With Love',
      description: 'Most important, build from bottom to top of my heart.',
      icon: HeartIcon
    }
  ]

  return (
    <div className="flex flex-row flex-wrap items-center">
      {features.length > 0 && features.map(feature => (
        <FeatureCard feature={feature} key={feature.id} />
      ))}
    </div>
  );
};

const SkillSetList = () => {
  const skillSets: Array<Skill> = [
    {
      id: 1,
      name: 'React',
      icon: ReactJsIcon,
      category: SkillCategory.FRONTEND
    },
    {
      id: 2,
      name: 'JavaScript',
      icon: JavaScriptIcon,
      category: SkillCategory.FRONTEND
    },
    {
      id: 3,
      name: 'TypeScript',
      icon: TypeScriptIcon,
      category: SkillCategory.FRONTEND
    },
    {
      id: 4,
      name: 'Node',
      icon: NodeJsIcon,
      category: SkillCategory.BACKEND
    },
    {
      id: 5,
      name: 'Tailwind',
      icon: TailwindIcon,
      category: SkillCategory.FRONTEND
    },
    {
      id: 6,
      name: 'Bootstrap',
      icon: BootstrapIcon,
      category: SkillCategory.FRONTEND
    },
    {
      id: 7,
      name: "VueJS",
      icon: VueJsIcon,
      category: SkillCategory.FRONTEND
    },
    {
      id: 8,
      name: "Express",
      icon: ExpressJsIcon,
      category: SkillCategory.BACKEND
    },
    {
      id: 9,
      name: "MongoDB",
      icon: MongoDbIcon,
      category: SkillCategory.BACKEND
    },
    {
      id: 10,
      name: "MSSQL",
      icon: MicrosoftSqlServerIcon,
      category: SkillCategory.BACKEND
    },
    {
      id: 11,
      name: "PostgreSQL",
      icon: PostgreSqlIcon,
      category: SkillCategory.BACKEND
    },
    {
      id: 12,
      name: "Git",
      icon: GitIcon,
      category: SkillCategory.OTHER
    },
    {
      id: 13,
      name: "Prestashop",
      icon: PrestaShopIcon,
      category: SkillCategory.OTHER
    },
    {
      id: 14,
      name: "Photoshop",
      icon: AdobePhotoshopIcon,
      category: SkillCategory.OTHER
    },
    {
      id: 16,
      name: "Docker",
      icon: DockerIcon,
      category: SkillCategory.OTHER
    }
  ];

  return (
    <div className="flex flex-wrap">
      {skillSets.length > 0 && skillSets.map((skill, index) => (
        <SkillCard skill={skill} key={skill.id} />
      ))
      }
    </div>
  )
}

export default function Home() {
  return (
    <main>
      <Section title="About">
        <FeatureList />
        <div className="my-20" />
        <div className="flex flex-row px-4">
          <div className="w-full p-10">
            <h3 className="text-4xl mb-4">Who am I?</h3>
            <p className="text-xl">
              Hello! My name is Nikola Leško, and  I am a Software engineer. I&apos;ve built products for companies and businesses around the globe ranging from marketing websites to complex solutions and enterprise apps, focusing on fast, elegant, and accessible user experiences.
              <br />
              <br />
              In building applications, I&apos;m equipped with just the right tools and can function independently of them to deliver fast, resilient solutions optimized for scale - performance, scalability, and accessibility are priorities while building the best possible solution.
            </p>
          </div>
        </div>
      </Section>
      <Section title="Toolbox">
        <div className="flex flex-row px-4">
          <div className="w-full p-10">
            <p className="text-xl">
              Here are a few technologies I’ve been working with recently:
            </p>
          </div>
        </div>
        <SkillSetList />
      </Section>
    </main>
  )
}
