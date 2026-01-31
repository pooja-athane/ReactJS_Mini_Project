import React, { Suspense } from 'react'
import HeroText from '../components/HeroText'
import ParallexBackground from '../components/ParallexBackground'
import { Canvas, useFrame } from '@react-three/fiber'
import { Astronaut } from '../components/Astronaut'
import { useMediaQuery } from 'react-responsive'
import { Float } from '@react-three/drei'
import Loader from '../components/Loader'
// import easing from 'math'


const Hero = () => {
    const isMobile = useMediaQuery({
        maxWidth: 853
    })
    return (
        <section className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space">
            <HeroText />
            <ParallexBackground />
            <figure
                className='absolute inset-0'
                style={{
                    width: "100vw",
                    height: "100vh"
                }}
            >

                <Canvas
                    camera={{
                        position: [0, 1, 3]
                    }}
                >
                    <Suspense fallback={<Loader />}>
                        <Float></Float>
                    </Suspense>
                    <Astronaut
                        scale={isMobile && 0.23}
                        position={isMobile && [0, -1.5, 0]}

                    />
                </Canvas>
            </figure>





        </section>
    )
}


//for orbit animation
function Rig() {
    return useFrame((state, delta) => {
        easing.damp3(
            // /inital position
            state.camera.position,
            // mouse movement
            [state.mouse.x / 10,
            1 + state.mouse.y / 10,
                1
            ],
            0.5,
            delta
        )
    })
}

export default Hero
