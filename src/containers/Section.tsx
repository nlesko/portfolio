"use client"

import { Variants, motion } from "framer-motion"

const introHeaderVariants: Variants = {
    hide: {
        opacity: 0,
        y: -100,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
        },
    },
};

const Section =  ({ className, children, title, ...props }: {
    className?: string,
    children: React.ReactNode,
    title?: string,
}) => {

    const renderTitle = () => {
        return (
            <motion.div className="w-full flex flex-col items-center justify-center"
            initial="hide"
        whileInView="show"
        viewport={{ once: true}}
        // exit="hide"
        variants={introHeaderVariants}>
                <h2 className="text-4xl uppercase font-light tracking-[0.7rem]">{title}</h2>
                <hr className="w-52 h-[2px] mt-11 mb-16 bg-white rounded-[75%]" style={{border: 'none'}} />
            </motion.div>
        )
    }

    return(
        <section className={`w-full py-20 ${className}`} >
            <div className="container mx-auto px-4">
                {title && renderTitle()}
                {children}
            </div>
        </section>
    )
}


export default Section;