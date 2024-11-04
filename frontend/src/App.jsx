import React from 'react'
import { Route, Routes } from "react-router-dom"
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Design from './pages/Design'
import Home from './pages/Home'
import Folio from './pages/Folio'
import Register from './pages/Register'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/:id' element={<Folio></Folio>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/register' element={<Register></Register>}></Route>
      <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
      <Route path='/design' element={<Design></Design>}></Route>
    </Routes>

  )
}

export default App