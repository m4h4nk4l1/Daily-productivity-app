import React from 'react';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
    initial={{ height: 0 }}
    animate={{ height: "100%" }}
    exit={{ y: window.innerHeight, transition: { duration: 0.2 } }}
      className="bg-gradient-to-b min-h-screen font-shan from-cyan-100 to-blue-400 bg-cover text-2xl"
    >
      {/* <Link to="/"></Link> */}
      <div className='ml-80 pt-44 max-w-[75%] h-full text-xl' id="intro">
        <p className='mb-8'>
          Hi, my name is
        </p>
        <span className='pt-14 text-7xl text-black font-semibold'>Mahankali Phani Manohar Sai.</span>
        <h2 className='font-bold text-5xl pt-10'>I'm a frontend developer</h2>
        <p className='pt-8 font-medium'>
          Proficient in ReactJS, Tailwindcss, Redux and three building blocks of the
          web. <br />
          <br />
          Currently learning Typescript, nextJS and Focusing on Backend to become Fullstack Enginner. <br />
          <br />
          My work in code <a className='underline hover:no-underline hover:text-teal-500' href="https://github.com/m4h4nk4l1">Github</a>
        </p>
      </div>
    </motion.div>
  )
}

export default Home