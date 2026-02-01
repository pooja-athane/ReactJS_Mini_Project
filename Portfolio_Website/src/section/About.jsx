import React, { useRef } from 'react'
import Card from '../components/Card'

const About = () => {
    const grid2Container =useRef()

    const cards = [
        {
            text: "GRASP",
            style: { rotate: "75deg", top: "30%", left: "20%" }
        },
        {
            text: "SOLID",
            style: { rotate: "-30deg", top: "60%", left: "45%" }
        },
        {
            text: "Design Patterns",
            style: { rotate: "90deg", bottom: "30%", left: "70%" }
        },
        {
            text: "Design Principles",
            style: { rotate: "-45deg", top: "55%", left: "0%" }
        },
        {
            text: "SRP",
            style: { rotate: "20deg", top: "10%", left: "38%" }
        },
        {
            image: "assets/logos/csharp-pink.png",
            style: { rotate: "30deg", top: "70%", left: "70%" }
        },
        {
            image: "assets/logos/dotnet-pink.png",
            style: { rotate: "-45deg", top: "70%", left: "25%" }
        },
        {
            image: "assets/logos/blazor-pink.png",
            style: { rotate: "-45deg", top: "5%", left: "10%" }
        }
    ]


    return (
        <div id='about' className='c-space section-spacing '>
            <h2 className='text-heading'>About</h2>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12'>
                {/* card 1 */}
                <div className="flex items-end grid-default-color grid-1">

                    <img
                        src='public/assets/coding-pov.png'
                        alt='coding-img'
                        className='absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]'
                    />
                    <div className="z-10">
                        <p className='headtext'>Hii, I'm Pooja Athane</p>
                        <p className='subtext'> Over the ast 4 yers, i developed my frontend n backend dev skills to deliver dynamic and software and web applications
                        </p>
                    </div>
                    <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" ></div>
                </div>
                {/* ---------- */}

                {/* card 2 */}
                <div className="grid-default-color grid-2 ">
                    <div ref={grid2Container} className="flex items-center justify-center w-full h-full ">
                        <p className=' flex items-end text-5xl text-gray-50'>
                            CODE IS CRAFT
                        </p>
                       {/* <Card
                            style={{ rotate: "75deg", top: "30%", left: "20%" }}
                            text="GRASP"
                            containerRef={grid2Container}
                        />
                        <Card
                            style={{ rotate: "-30deg", top: "60%", left: "45%" }}
                            text="SOLID"
                            containerRef={grid2Container}
                        />
                        <Card
                            style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
                            text="Design Patterns"
                            containerRef={grid2Container}
                        />
                        <Card
                            style={{ rotate: "-45deg", top: "55%", left: "0%" }}
                            text="Design Principles"
                            containerRef={grid2Container}
                        />
                        <Card
                            style={{ rotate: "20deg", top: "10%", left: "38%" }}
                            text="SRP"
                            containerRef={grid2Container}
                        />
                        <Card
                            style={{ rotate: "30deg", top: "70%", left: "70%" }}
                            image="assets/logos/csharp-pink.png"
                            containerRef={grid2Container}
                        />
                        <Card
                            style={{ rotate: "-45deg", top: "70%", left: "25%" }}
                            image="assets/logos/dotnet-pink.png"
                            containerRef={grid2Container}
                        />
                        <Card
                            style={{ rotate: "-45deg", top: "5%", left: "10%" }}
                            image="assets/logos/blazor-pink.png"
                            containerRef={grid2Container}
                        /> */}
                        {cards.map((card, index) => (
                            <Card
                                key={index}
                                {...card}
                                containerRef={grid2Container}
                            />
                        ))}


                    </div>
                </div>
                {/* ----------- */}


                <div className=""></div>
                <div className=""></div>
                <div className=""></div>
            </div>
        </div>
    )
}

export default About
