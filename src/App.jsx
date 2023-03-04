import React from 'react'
import SideBar from './components/SideBar'
import {Routes, Route} from "react-router-dom"
import Search from './pages/Search'
import Shazam from './pages/Shazam'
import Projects from './pages/Projects'
import Todo from './pages/Todo'

const App = () => {
  return (
    <div>
        <SideBar />
        
        <Routes>
        <Route  path="/search" element={<Search />}>
          
        </Route>
        <Route path="/projects" element={<Projects />}>

        </Route>
        <Route path="/shazam" element={<Shazam />}>
      
        </Route>
        <Route path="/todo" element={<Todo />}></Route>
      </Routes>
    </div>

  )   
}

export default App