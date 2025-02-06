
import './App.css'
import {Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'
import About from './components/About'
import Project from './components/Project'



function App() {

  return (
    <div>

      <Navbar/>
      <Dashboard/>
      <About/>
      <Project/>
     
      {/* <Routes>
        <Route path="/" element={<Dashboard/>} />
       
      </Routes> */}
    </div>
  )
}

export default App
