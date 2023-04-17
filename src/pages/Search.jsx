import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Search = () => {
  return (
    <motion.div
    initial={{ height: 0 }}
    animate={{height: "100%"}}
    exit={{ y: window.innerHeight, transition: {duration: 0.2}}}
    className="bg-gradient-to-b min-h-screen from-cyan-100 to-blue-400 bg-cover"
    >
      <Link to="/search">Search</Link>
    </motion.div>
  );
};

export default Search;
