import React, { useState } from 'react'
import Navbar from './section/Navbar'

function App() {
  const [count, setCount] = useState(0)
  return (

    
      <>
        <div className="container mx-auto max-w-7xl">
          <Navbar/>
        </div>
      </>
    
  )
}

export default App
