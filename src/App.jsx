import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import './App.css'
import Layout from './component/Layout'
import Home from './pages/Home'
import About from './pages/About'

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
       

        </Route>
      </Routes>
    </>
  )
}

export default App
