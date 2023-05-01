import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import MusicControls from "../components/MusicControls";
import MusicStations from "../components/MusicStations";
import ReactPlayer from "react-player";

const Shazam = () => {
  return (
    <motion.div
      initial={{ height: 0 }}
      animate={{ height: "100%" }}
      exit={{ y: window.innerHeight, transition: { duration: 0.2 } }}
      className="bg-gradient-to-b min-h-screen  from-cyan-100 to-blue-400 font-shan bg-cover"
    >
      <div className="flex border-2  border-transparent bg-gradient-to-r from-cyan-100 to-blue-400  absolute align-middle items-center justify-center rounded-xl w-2/3 mt-16 h-2/3 ml-24 shadow-inner shadow-slate-900 drop-shadow-2xl slashed-zero ">
        <div className="relative rounded-lg overflow-hidden w-full h-full">
          <ReactPlayer
            width="131%"
            height="149%"
            loop="true"
            controls="false"
            //playing={livestream}
            volume="mute"
            playing="https://www.youtube.com/watch?v=Lcdi9O2XB4E&ab_channel=TOKYOTONES"
            url="//www.youtube.com/embed/5wRWniH7rt8?autoplay=1&mute=1&start=50"
          />
        </div>
      </div>

      <section className=" absolute bottom-10 mt-4 border-transparent rounded-xl h-16 border-black w-2/3 ml-24 ">
        <MusicControls />
      </section>

      <aside className="border-gray-800 border-l-2  mt-16 absolute w-1/5 h-5/6 right-10 ">
        <MusicStations />
      </aside>

      <Link to="/shazam"></Link>
    </motion.div>
  );
};

export default Shazam;
