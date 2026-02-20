import react, { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import EmailList from './components/EmailList'
import Compose from './components/Compose'


function App() {

  const [isOpen, setIsOpen] = useState(true)

  const [activeSection, setactiveSection] = useState("Inbox")

  const [selectedEmail, setSelectedEmail] = useState(null)

  const [showCompose, setShowCompose] = useState(false)

  const [sentEmails, setSentEmails] = useState([])



  function toggleSidebar() {
    setIsOpen(!isOpen)
  }


  return (
    <>
      <div className="app  h-screen flex flex-col">
        <Header toggleSidebar={toggleSidebar} />
        <div className="flex flex-1 overflow-hidden">

          <Sidebar isOpen={isOpen}
            activeSection={activeSection}
            setactiveSection={setactiveSection}
            setSelectedEmail={setSelectedEmail}
            setShowCompose={setShowCompose}

          />




          <div className="flex-1 bg-gray-50 overflow-y-auto">
            <EmailList
              activeSection={activeSection}
              selectedEmail={selectedEmail}
              setSelectedEmail={setSelectedEmail}
              sentEmails={sentEmails}
            />
          </div>

          {showCompose && (
            <Compose setShowCompose={setShowCompose}
              setSentEmails={setSentEmails}
            />
          )}
        </div>

      </div>

    </>
  )
}

export default App
