import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import MusicControls from "../components/MusicControls";
import MusicApi from "../components/MusicApi";

const Shazam = () => {
  return (
    <motion.div
      initial={{ height: 0 }}
      animate={{ height: "100%" }}
      exit={{ y: window.innerHeight, transition: { duration: 0.2 } }}
      className="bg-gradient-to-b min-h-screen from-cyan-100 to-blue-400 bg-cover"
    >
      <div className="flex border-4 border-black bg-gradient-to-r from-cyan-100 to-blue-400  absolute align-middle items-center justify-center rounded-xl w-2/3 mt-16 h-2/3 ml-24 shadow-xl ">
        <h1>Music Image through Api</h1>
      </div>

      <section className="absolute bottom-20 border-4 rounded-xl h-16 border-black w-2/3 ml-24 ">
        <MusicControls />
      </section>

      <aside className="border-4 border-black rounded-xl mt-16 absolute w-1/5 h-5/6 right-16 ">
        <MusicApi />
      </aside>

      <Link to="/shazam"></Link>
    </motion.div>
  );
};

export default Shazam;
