import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Search from '../pages/Search';
import Shazam from '../pages/Shazam';
import Projects from '../pages/Projects'; 
import Todo from '../pages/Todo';
import Home from '../pages/Home';
import {AnimatePresence} from 'framer-motion';


const AnimatedRoutes = () => {
    const location = useLocation();
  return (
    <AnimatePresence>
    <Routes location={location} key={location.pathname }>
        <Route path="/" element={<Home />}>
            </Route>
        <Route  path="/search" element={<Search />}>
          
        </Route>
        <Route path="/projects" element={<Projects />}>

        </Route>
        <Route path="/shazam" element={<Shazam />}>
      
        </Route>
        <Route path="/todo" element={<Todo />}></Route>
      </Routes>
      </AnimatePresence>
  )
}

export default AnimatedRoutes