import { useState } from 'react'
import NavBar from './Components/Navbar'
import Home from './Routes/Home '
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App
