import React from "react";
import { motion } from "framer-motion";

const MusicStations = () => {
  return (
    <>
      <h1 className="pl-12 flex flex-col flex-wrap font-semibold mb-8 tracking-wide text-2xl">
        Music Stations
      </h1>
      <div className="pl-16 space-y-4 font-medium text-lg">
        <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0 }}>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            NCS Renders
          </motion.div>
        </motion.div>
        <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0 }}>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Telugu Songs Lofi
          </motion.div>
        </motion.div>
        <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0 }}>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Hindi Songs Lofi
          </motion.div>
        </motion.div>
        <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0 }}>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Tamil Songs Lofi
          </motion.div>
        </motion.div>
        <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0 }}>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            {" "}
            Malayalam Songs Lofi
          </motion.div>
        </motion.div>
        <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0 }}>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Beach Side Lofi
          </motion.div>
        </motion.div>
        <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0 }}>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Lofi Girl
          </motion.div>
        </motion.div>
        <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0 }}>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Maan Meri Jaan
          </motion.div>
        </motion.div>
        <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0 }}>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Random Hindi Lofi
          </motion.div>
        </motion.div>
        <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0 }}>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Gaming Lofi
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default MusicStations;
