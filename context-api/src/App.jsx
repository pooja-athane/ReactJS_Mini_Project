import React from 'react'
import Login from './components/Login'
import UserContextProvider from './context/UserContextProvider'
import Profile from './components/Profile'

function App() {
  return (

    <>
      <h1>Learning Context Api</h1>
      <UserContextProvider>
        <Login/>
        <Profile/>
      </UserContextProvider>

    </>

  )
}

export default App
