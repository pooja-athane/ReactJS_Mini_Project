import React, { useState } from 'react'
import Navbar from './section/Navbar'
import Hero from './section/Hero'
import About from './section/About'



function App() {
  const [count, setCount] = useState(0)
  return (
     <>
        <div className="container mx-auto max-w-7xl">
          <Navbar/>
          <Hero />
          <About/>
         
          
        {/* <section className='h-screen w-full'></section>
        <section className='h-screen w-full'></section>
        <section className='h-screen w-full'></section> */}
        </div>
      </>
    
  )
}

export default App
