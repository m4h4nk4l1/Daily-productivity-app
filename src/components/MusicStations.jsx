import React from "react";
import { motion } from "framer-motion";
import { ImPointRight } from "react-icons/im";

const MusicStations = ({
  Ncs,
  Telugu,
  Hindi,
  Tamil,
  Malayalam,
  Beach,
  Lofi,
  Maan,
  Random,
  Gaming,
  stationName,
}) => {
  console.log(stationName);
  return (
    <>
      <h1 className="pl-12 flex flex-col flex-wrap font-semibold mb-8 tracking-wide text-2xl">
        Music Stations
      </h1>
      <div className="pl-16 space-y-4 font-medium text-lg">
        <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0 }}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={Ncs}
            className="flex flex-row"
          >
            {stationName === "Ncs" ? <ImPointRight className="mr-4" /> : ""}
            NCS Renders
          </motion.div>
        </motion.div>
        <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0 }}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={Telugu}
            className="flex flex-row"
          >
            {stationName === "Telugu" ? <ImPointRight className="mr-4" /> : ""}
            Telugu Songs Lofi
          </motion.div>
        </motion.div>
        <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0 }}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={Hindi}
            className="flex flex-row"
          >
            {stationName === "Hindi" ? <ImPointRight className="mr-4" /> : ""}
            Hindi Songs Lofi
          </motion.div>
        </motion.div>
        <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0 }}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={Tamil}
            className="flex flex-row"
          >
            {stationName === "Tamil" ? <ImPointRight className="mr-4" /> : ""}
            Tamil Songs Lofi
          </motion.div>
        </motion.div>
        <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0 }}>
          <motion.div
            className="flex flex-row"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={Malayalam}
          >
            {stationName === "Malayalam" ? (
              <ImPointRight className="mr-4" />
            ) : (
              ""
            )}
            Malayalam Songs Lofi
          </motion.div>
        </motion.div>
        <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0 }}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={Beach}
            className="flex flex-row"
          >
            {stationName === "Beach" ? <ImPointRight className="mr-4" /> : ""}
            Beach Side Lofi
          </motion.div>
        </motion.div>
        <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0 }}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={Lofi}
            className="flex flex-row"
          >
            {stationName === "Lofi" ? <ImPointRight className="mr-4" /> : ""}
            Lofi Girl
          </motion.div>
        </motion.div>
        <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0 }}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={Maan}
            className="flex flex-row"
          >
            {stationName === "Maan" ? <ImPointRight className="mr-4" /> : ""}
            Maan Meri Jaan
          </motion.div>
        </motion.div>
        <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0 }}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={Random}
            className="flex flex-row"
          >
            {stationName === "Random" ? <ImPointRight className="mr-4" /> : ""}
            Random Hindi Lofi
          </motion.div>
        </motion.div>
        <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0 }}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={Gaming}
            className="flex flex-row"
          >
            {stationName === "Gaming" ? <ImPointRight className="mr-4" /> : ""}
            Gaming Lofi
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default MusicStations;
