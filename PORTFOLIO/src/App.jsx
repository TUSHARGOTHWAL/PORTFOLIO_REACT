import { useState } from 'react'
import './App.scss'
import Navbar from './Navbar'
import Sidebar from './sidebar/Sidebar'
import Home from './Home/Home'
import AboutMe from './About Me/AboutMe'
import Projects from './My Projects/Projects'
import Contact from './contact/Contact'

function App() {
 
  return (
    <>
    <Navbar></Navbar>
    <Home></Home>
   
    <AboutMe></AboutMe>
    <Projects></Projects>
    <section><Contact></Contact></section>

    </>
  )
}

export default App
