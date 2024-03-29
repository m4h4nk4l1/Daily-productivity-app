import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { IoPlay, IoPause } from "react-icons/io5";
import MusicStations from "../components/MusicStations";
import ReactPlayer from "react-player";

const Shazam = () => {
  const [stationName, setStationName] = useState("Malayalam");
  const [video, setVideo] = useState(
    `//www.youtube.com/embed/LtbnCP9l5Z8?autoplay=1&mute=1&start=1`
  );

  const [isPlaying, setIsPlaying] = useState(true);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.pointerEvents = "none";
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.pointerEvents = "none";
  };

  const Ncs = () => {
    setVideo("//www.youtube.com/embed/EOLbOsMgwjY?autoplay=1&mute=1&start=5");
    setStationName("Ncs");
  };

  const Telugu = () => {
    setVideo("//www.youtube.com/embed/M0crvYsBOus?autoplay=1&mute=1&start=1");
    setStationName("Telugu");
  };

  const Hindi = () => {
    setVideo("//www.youtube.com/embed/TBkfwtl1-YQ?autoplay=1&mute=1&start=1");
    setStationName("Hindi");
  };

  const Tamil = () => {
    setVideo("//www.youtube.com/embed/vFgZUkiX-9Q?autoplay=1&mute=1&start=1");
    setStationName("Tamil");
  };

  const Malayalam = () => {
    setVideo("//www.youtube.com/embed/LtbnCP9l5Z8?autoplay=1&mute=1&start=1");
    setStationName("Malayalam");
  };

  const Beach = () => {
    setVideo("//www.youtube.com/embed/cvEpGjYtJbs?autoplay=1&mute=1&start=1");
    setStationName("Beach");
  };

  const Lofi = () => {
    setVideo("//www.youtube.com/embed/TlWYgGyNnJo?autoplay=1&mute=1&start=1");
    setStationName("Lofi");
  };

  const Maan = () => {
    setVideo("//www.youtube.com/embed/R1APP8byIL8?autoplay=1&mute=1&start=1");
    setStationName("Maan");
  };

  const Random = () => {
    setVideo("//www.youtube.com/embed/KRA26LhuTP4?autoplay=1&mute=1&start=1");
    setStationName("Random");
  };

  const Gaming = () => {
    setVideo("//www.youtube.com/embed/_bBiNPKeY7M?autoplay=1&mute=1&start=1");
    setStationName("Gaming");
  };

  return (
    <motion.div
      initial={{ height: 0 }}
      animate={{ height: "100%" }}
      exit={{ y: window.innerHeight, transition: { duration: 0.2 } }}
      className="bg-gradient-to-b min-h-screen from-cyan-100 to-blue-400 font-shan bg-cover text-black"
    >
      {/* Music Video player */}
      <div className="border-transparent bg-gradient-to-r from-cyan-100 to-blue-400 absolute rounded-lg w-2/3 mt-16 h-2/3 ml-24 shadow-slate-900 drop-shadow-2xl">
        <div
          className="rounded-lg overflow-hidden w-full h-full"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <ReactPlayer
            width="121%"
            // heigh = 138.5
            height="137.2%"
            playing={isPlaying}
            loop={true}
            overflow="hidden"
            url={video}
            controls={true}
          />
        </div>
      </div>
      {/* play & Pause buttons */}
      <section className=" absolute bottom-10 mt-4 border-transparent rounded-xl h-16 border-black w-2/3 ml-24 ">
        <div className="flex flex-row justify-center space-x-4">
          {isPlaying ? (
            <button onClick={handlePause}>
              <IoPause size={40} color="19376D" />
            </button>
          ) : (
            <button onClick={handlePlay}>
              <IoPlay size={40} color="19376D" />
            </button>
          )}
        </div>
      </section>
      {/* // music stations */}
      <aside className="border-gray-800 border-l-2  mt-16 absolute w-1/5 h-5/6 right-8 ">
        <MusicStations
          Ncs={Ncs}
          Telugu={Telugu}
          Hindi={Hindi}
          Tamil={Tamil}
          Malayalam={Malayalam}
          Beach={Beach}
          Lofi={Lofi}
          Maan={Maan}
          Random={Random}
          Gaming={Gaming}
          stationName={stationName}
        />
      </aside>
      {/* <Link to="/shazam"></Link> */}
    </motion.div>
  );
};

export default Shazam;
