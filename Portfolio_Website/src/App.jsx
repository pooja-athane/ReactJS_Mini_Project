import React, { useState } from 'react'
import Navbar from './section/Navbar'
import Hero from './section/Hero'
import About from './section/About'
import Projects from './section/Projects'
import Experience from './section/Experience'
import Testimonial from './section/Testimonial'
import Footer from './section/Footer'
import Contact from './section/Contact'



function App() {
  const [count, setCount] = useState(0)
  return (
     <>
        <div className="container mx-auto max-w-7xl">
          <Navbar/>
          <Hero />
          <About/>
          <Projects/>
          <Experience/>
          <Testimonial/>
          <Contact/>
          <Footer/>
         
          
        {/* <section className='h-screen w-full'></section>
        <section className='h-screen w-full'></section>
        <section className='h-screen w-full'></section> */}
        </div>
      </>
    
  )
}

export default App
