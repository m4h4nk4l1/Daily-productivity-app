import React from "react";
import dashboard from "../assets/dashboard.png"
import search from "../assets/search.png"
import tasks from "../assets/edit.png"
import music from "../assets/music.png"
import projects from "../assets/projects.png"
import { Link, useNavigate } from "react-router-dom";
import {motion} from 'framer-motion';


const SideBar = () => {
    const navigate = useNavigate();

    return (
    <motion.nav
      className="flex flex-col fixed items-center justify-between left-0 
        w-[3.8rem] h-[80vh] mt-16
        rounded-tr-3xl rounded-br-3xl object-none bg-gradient-to-t from-cyan-100 to-blue-400 bg-cover"
    >
        <button onClick={() => navigate('/')} >
            
                <img className="rounded-full h-auto w-10" src={dashboard} alt="dashboard" />
                
                </button>
            <button onClick={() => navigate('/shazam')}>
            
                <img className="rounded-full h-auto w-10" src={music} alt="music" />
                
            </button>
            <button onClick={() => navigate('/todo')}>
                <img className="rounded-full h-auto w-10" src={tasks} alt="tasks" />
            </button>
            
            <button onClick={() => navigate('/search')}>
                <img className="rounded-full h-auto w-10" src={search} alt="search" />
            </button>

            <button onClick={() => navigate('/projects')}>
                <img className="rounded-full h-auto w-10" src={projects} alt="projects" />
            </button>
        
    </motion.nav>
  );
};

export default SideBar;