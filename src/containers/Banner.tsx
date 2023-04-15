"use client"

import { Variants, motion } from "framer-motion";
import { ReactNode } from "react";

const introTitleVariants: Variants = {
    hide: {
        opacity: 0,
        y: 300,
    },
    show: {
        opacity: 1,
        y: 0,        
        transition: {
            duration: 0.4,
            function: 'ease',
        },
    },
};
const Banner = ({ children }: { children: ReactNode }) => {
    return (
        <motion.section className={`w-full h-screen flex flex-col flex-1 py-20 items-center justify-center`}
        initial="hide"
        whileInView="show"
        viewport={{ once: true}}
        // exit="hide"
        variants={introTitleVariants}>
            <div className="container  px-4">
                {children}
            </div>
        </motion.section>
    )
}

export default Banner;