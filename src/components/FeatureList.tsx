"use client"

import { DevicePhoneMobileIcon, HeartIcon } from "@heroicons/react/20/solid";
import FeatureCard from "./FeatureCard";
import { NCloudScaleIcon, RocketIcon } from "./icons";
import { Feature } from "@/types";

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

export default FeatureList;