import { useState } from 'react'
import { BrowserRouter,Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Public/Home'
import Navbar from './Components/Navbar'
import Login from './Pages/Public/Login'
import { Route } from 'react-router-dom'
import Signup from './Pages/Public/Signup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <BrowserRouter>
      <Navbar/>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
      </Routes></BrowserRouter>
     
    </>
  )
}

export default App
