import React from 'react'
import { motion, useScroll, useTransform, useSpring, transform } from 'motion/react'

const ParallexBackground = () => {
    // animation scales

    const { scrollYProgress } = useScroll()
    // animation trigger means image move like 3d model nd damping used for the intensity of thta animation
    const x = useSpring(scrollYProgress, { damping: 50 })
    // uses spring animation with from to to
    const mountain3Y = useTransform(x, [0, 0.5], ["0%", "50%"])
    const plananetsX = useTransform(x, [0, 0.5], ["0%", "-20%"])
    const mountain2Y = useTransform(x, [0, 0.5], ["0%", "30%"])
    const mountain1Y = useTransform(x, [0, 0.5], ["0%", "0%"])

    return (
        <section className='absolute inset-0 bg-black/40'>
            <div className="relative h-screen overflow-y-hidden ">
                {/* Background sky */}
                <motion.div className="absolute inset-0 w-full h-screen -z-50"
                    style={{
                        backgroundImage: "url(/public/assets/sky.jpg)",
                        backgroundPosition: "bottom",
                        backgroundSize: "cover",
                    }

                    }
                />
                {/* ------------------------ */}
                {/* Mountain layer 1 */}

                <motion.div
                    className='absolute inset-0 w-full h-screen -z-40'
                    style={{
                        backgroundImage: "url(/public/assets/mountain-3.png)",
                        backgroundPosition: "bottom",
                        backgroundSize: "cover",
                        y: mountain3Y
                    }

                    }
                />
                {/* ----------------------- */}

                {/*planets layer  */}

                <motion.div
                    className='absolute inset-0 w-full h-screen -z-30'
                    style={{
                        backgroundImage: "url(/public/assets/planets.png)",
                        backgroundPosition: "bottom",
                        backgroundSize: "cover",
                        x: plananetsX
                    }

                    }
                />
                {/* ----------------------- */}

                {/* Mountain layer 2 */}

                <motion.div
                    className='absolute inset-0 w-full h-screen -z-20'
                    style={{
                        backgroundImage: "url(/public/assets/mountain-2.png)",
                        backgroundPosition: "bottom",
                        backgroundSize: "cover",
                        y: mountain2Y
                    }

                    }
                />
                {/* ----------------------- */}

                {/* Mountain layer 3*/}

                <motion.div
                    className='absolute inset-0 w-full h-screen -z-10'
                    style={{
                        backgroundImage: "url(/public/assets/mountain-1.png)",
                        backgroundPosition: "bottom",
                        backgroundSize: "cover",
                        y: mountain1Y
                    }

                    }
                />
                {/* ----------------------- */}


            </div>


        </section >
    )
}

export default ParallexBackground
