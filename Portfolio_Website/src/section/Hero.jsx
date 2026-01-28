import React from 'react'
import HeroText from '../components/HeroText'
import ParallexBackground from '../components/ParallexBackground'

const Hero = () => {
  return (
<section className='min-h-screen   flex items-start justify-center overflow-hidden md:items-start md:justify-start c-space '>
    <HeroText/>
    <ParallexBackground/>
</section>   
  )
}

export default Hero
