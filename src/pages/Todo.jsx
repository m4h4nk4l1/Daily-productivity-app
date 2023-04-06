import React from 'react'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion';

const Todo = () => {
  return (
    <motion.div
    initial={{ height: 0 }}
      animate={{height: "100%"}}
      exit={{ y: window.innerHeight, trasition: {duration: 0.2}}}
      className="bg-gradient-to-b min-h-screen from-cyan-100 to-blue-400 bg-cover"
    >
      <Link to="/todo">ToDo</Link>
      </motion.div>
  )
}

export default Todo