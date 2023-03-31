import { DevicePhoneMobileIcon, HeartIcon } from '@heroicons/react/20/solid';
import Section from "@/containers/Section";
import FeatureCard from "@/components/FeatureCard";
import type { Feature, Skill } from "@/types";
import { AdobePhotoshopIcon, BootstrapIcon, ExpressJsIcon, GitIcon, JavaScriptIcon, MicrosoftSqlServerIcon, MongoDbIcon, NCloudScaleIcon, NodeJsIcon, PostgreSqlIcon, PrestaShopIcon, ReactJsIcon, RocketIcon, TailwindIcon, TypeScriptIcon, VueJsIcon } from '@/components/icons';
import SkillCard from '@/components/SkillCard';
import { SkillCategory } from '@/enums';
import SkillSetList from '@/components/SkillSetList';

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
              Hi, I'm Nikola Leško, a software engineer with experience in building fast and elegant products for global companies. From marketing websites to enterprise apps, I prioritize performance, scalability, and accessibility to deliver optimized solutions. Let's discuss how I can help your business succeed.
              {/* Hi there! My name is Nikola Leško, and I'm a passionate software engineer with a proven track record of building cutting-edge products for companies and businesses worldwide. I specialize in crafting elegant, fast, and accessible user experiences that meet and exceed client expectations.
              <br />
              <br />
              My experience spans across a variety of industries, and I have developed everything from marketing websites to complex enterprise-level applications. With every project, I prioritize performance, scalability, and accessibility to ensure that my solutions are optimized for scale.
              <br />
              <br />
              As a self-motivated individual, I'm comfortable working independently or in a team environment. I'm equipped with a diverse set of tools and technologies, which enables me to deliver fast, resilient solutions that meet business needs.
<br /><br />
              I'm always looking for new challenges and opportunities to learn and grow as a developer. So, if you're interested in discussing a potential collaboration or have any questions, please don't hesitate to reach out. */}
            </p>
          </div>
        </div>
      </Section>
      <Section title="Toolbox">
        <div className="flex flex-row px-4">
          <div className="w-full p-10">
            <p className="text-xl">
              As a Full-stack Web Developer / Software Engineer, I'm like a builder with a toolbox full of the latest tech and gadgets. Let me show you what I've got - we can use my tools to build something amazing together
              <br />
              <br />
              Explore the technologies and tools I use to bring ideas to life.
            </p>
          </div>
        </div>
        <SkillSetList />
      </Section>
    </main>
  )
}
