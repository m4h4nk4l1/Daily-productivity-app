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
  StationName,
}) => {
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
          >
            NCS Renders
          </motion.div>
        </motion.div>
        <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0 }}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={Telugu}
          >
            Telugu Songs Lofi
          </motion.div>
        </motion.div>
        <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0 }}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={Hindi}
          >
            Hindi Songs Lofi
          </motion.div>
        </motion.div>
        <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0 }}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={Tamil}
          >
            Tamil Songs Lofi
          </motion.div>
        </motion.div>
        <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0 }}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={Malayalam}
          >
            Malayalam Songs Lofi
          </motion.div>
        </motion.div>
        <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0 }}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={Beach}
          >
            Beach Side Lofi
          </motion.div>
        </motion.div>
        <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0 }}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={Lofi}
          >
            Lofi Girl
          </motion.div>
        </motion.div>
        <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0 }}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={Maan}
          >
            Maan Meri Jaan
          </motion.div>
        </motion.div>
        <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0 }}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={Random}
          >
            Random Hindi Lofi
          </motion.div>
        </motion.div>
        <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0 }}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={Gaming}
          >
            Gaming Lofi
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default MusicStations;
