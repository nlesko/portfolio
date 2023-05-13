"use client";
import React from "react";
import type { Feature } from '../types';
import { Card, CardTitle } from './ui';
import { Variants, motion } from "framer-motion";

/**
 * Creates skill card element.
 *
 * @param {String?} className sets classname for card component from parent component
 * @param {Boolean?} row sets card to display as row
 *  
 *
 * @returns
 */

interface Props {
    feature: Feature
    className?: string
    children?: React.ReactNode,
}

const introFeatureCardVariants: Variants = {
    hide: {
        transform: 'perspective(2500px) rotateX(-100deg)'
    },
    show: {
        transform: 'perspective(2500px) rotateX(0deg)',
        transition: {
            duration: 0.4,
            function: 'ease',
        },
    },
    
};

const FeatureCard: React.FC<Props> = ({ feature, ...props }) => {
    return (

        <motion.div className="w-full md:w-1/2 xl:w-1/4 mb-6 xl:mb-0 px-6"
        initial="hide"
        whileInView="show"
        viewport={{ once: true}}
        // exit="hide"
        variants={introFeatureCardVariants}
        >
            <Card className="bg-steel-blue-800/30 px-8 py-12 shadow-md">
                <div className="flex items-center justify-center">
                    {feature.icon ? React.createElement(feature.icon, { className: 'w-7 h-7' }) : null }
                    <h4 className='ml-4 text-xl'>{feature.name}</h4>
                </div>
                <div className="my-2" />
                <div className='text-center'>
                    
                    <div className="my-2" />
                    <p className="text-base">
                        {feature.description}
                    </p>
                </div>
            </Card>
        </motion.div>
    )
}

export default FeatureCard;