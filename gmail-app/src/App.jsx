import react, { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import EmailList from './components/EmailList'


function App() {

  const [isOpen, setIsOpen] = useState(true)

  

  function toggleSidebar() {
    setIsOpen(!isOpen)
  }


  return (
    <>
      <div className="app  h-screen flex flex-col">
        <Header toggleSidebar={toggleSidebar} />
        <div className="flex flex-1">
          
            <Sidebar isOpen={isOpen} />
          

          <div className="flex-1 bg-gray-50">
            <EmailList />
          </div>
        </div>

      </div>

    </>
  )
}

export default App
