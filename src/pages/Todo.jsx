import React from 'react'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion';
import todo from '../assets/todo.jpg'

const Todo = () => {
  return (
    <motion.div
    initial={{ height: 0 }}
      animate={{height: "100%"}}
      exit={{ y: window.innerHeight, trasition: {duration: 0.2}}}
      className="bg-gradient-to-b min-h-screen from-cyan-100 to-blue-400 bg-cover"
    >
      <div className='border '>
        <section className='flex flex-initial flex-row items-center justify-center'>
          <h2> TODO </h2>
          <img className='w-20' src={todo} alt="todo-icon" />
        </section>
      </div>
      <Link to="/todo"></Link>
      </motion.div>
  )
}

export default Todo

