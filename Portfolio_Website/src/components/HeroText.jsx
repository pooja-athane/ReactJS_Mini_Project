import React from 'react'
import { FlipWords } from './FlipWords'
import { motion } from 'motion/react'

const HeroText = () => {

    const words = ["Secure", "Modern", "Scalable"]
    // create variable in array that animate the hero text from left to 0 postion

    const Variants = {
        hidden: {
            opacity: 0,
            x: -50
        },
        visible: {
            opacity: 1,
            x: 0
        }
    }

    return (
        //mobile view  also responsive code
        <div className='z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text '>

            {/* desktop view */}

            <div className="flex-col hidden md:flex c-space">
                <motion.h1
                    className='text-4xl font-medium  text-neutral-300'
                    variants={Variants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 1 }}
                >
                    Hii i am Pooja
                </motion.h1>
                <div className="flex flex-col items-start">
                    <motion.p
                        className='text-5xl font-medium text-neutral-300'
                        variants={Variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.1 }}
                    >
                        Adevloper<br /> Dedicated to Crafting
                    </motion.p>

                    {/* Animated words */}
                    <motion.div
                        className=""
                        variants={Variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.2 }}
                    >
                        <FlipWords
                            words={words}
                            className="font-black text-white text-8xl"
                        />

                    </motion.div>
                    {/* Animated words */}

                    <motion.p
                        className='text-4xl font-medium text-neutral-300'
                        variants={Variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.3 }}
                    >
                        Web Solutions
                    </motion.p>
                </div>
            </div>

            {/* desktop view */}

        </div>
    )
}

export default HeroText
