
import './App.css'
import {Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'
import About from './components/About'
import Project from './components/Project'
import Contact from './components/Contact'
import StarCanvas from './components/Star'



function App() {

  return (
    <div>

      <Navbar/>
      <Dashboard/>
      <About/>
      <Project/>
      
        <Contact  />
        {/* <StarCanvas/> */}

     

    </div>
  )
}

export default App
