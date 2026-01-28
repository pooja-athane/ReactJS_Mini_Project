import React, { useState } from 'react'
import Navbar from './section/Navbar'
import Hero from './section/Hero'

function App() {
  const [count, setCount] = useState(0)
  return (

    
      <>
        <div className="container mx-auto max-w-7xl">
          <Navbar/>
          <Hero />
        </div>
      </>
    
  )
}

export default App
