import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      initial={{ height: 0 }}
      animate={{ height: "100%" }}
      exit={{ y: window.innerHeight, transition: { duration: 0.2 } }}
      className="bg-gradient-to-b min-h-screen font-shan from-cyan-100 to-blue-400 bg-cover text-black text-2xl"
    >
      {/* <Link to="/"></Link> */}
      <div className="text-sm flex flex-row space-x-2 items-center justify-end mr-20 pt-4">
        <button className="border bg-gradient-to-t from-cyan-100 to-blue-400 border-spacing-2 border-current p-1 hover:border-cyan-600 rounded-md">
          My Resume
        </button>
      </div>
      <div className="ml-40 pt-24 max-w-[75%] h-full text-lg" id="intro">
        <p className="mb-8">Hi, my name is</p>
        <span className="pt-14 text-5xl text-black font-semibold ">
          Mahankali Phani Manohar Sai.
        </span>
        <h2 className="font-bold text-3xl pt-10">I'm a software developer</h2>
        <p className="pt-8 font-medium">
          Proficient in ReactJS, Tailwindcss, Redux and three building blocks of
          the web. <br />
          <br />
          Currently learning Typescript, Nextjs and focusing on Backend to
          become Fullstack Engineer. <br />
          <br />
          My work in code{" "}
          <a
            className="underline hover:no-underline hover:text-teal-500"
            href="https://github.com/m4h4nk4l1"
          >
            Github
          </a>
        </p>
      </div>
      <p className="text-sm mt-32 ml-40 flex justify-start ">
        chill out while checking my portfolio scroll through the sidebar
      </p>
    </motion.div>
  );
};

export default Home;
