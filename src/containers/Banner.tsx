"use client"

import { Variants, motion } from "framer-motion";
import { ReactNode } from "react";

const introHeaderVariants: Variants = {
    hide: {
        opacity: 0,
        x: -500,
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1,
        },
    },
};
const Banner = ({ children }: { children: ReactNode }) => {
    return (
        <motion.section className={`w-full h-screen flex flex-col flex-1 py-20 items-center justify-center`}
        initial="hide"
        whileInView="show"
        exit="hide"
        variants={introHeaderVariants}>
            <div className="container  px-4">
                {children}
            </div>
        </motion.section>
    )
}

export default Banner;