import { useState } from 'react'
import './App.scss'
import Navbar from './Navbar'
// import Sidebar from './sidebar/Sidebar'
import Home from './Home/Home'
import AboutMe from './About Me/AboutMe'
import Projects from './My Projects/Projects'
import Contact from './contact/Contact'
import Knowledge from './Knowledge/Knowledge'
import PastExp from './past exp/PastExp'


function App() {
 
  return (
    <>
    <Navbar>
      {/* <Sidebar></Sidebar> */}
    </Navbar>
    <Home></Home>
    <AboutMe></AboutMe>
    <PastExp></PastExp>
    <Knowledge></Knowledge>
    <Projects></Projects>
    <section><Contact></Contact></section>

    </>
  )
}

export default App
