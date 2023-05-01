import React from "react";
import {
  IoPlay,
  IoPlaySkipBack,
  IoPlaySkipForward,
  IoPause,
} from "react-icons/io5";
const MusicControls = () => {
  return (
    <div className="flex flex-row justify-center space-x-4">
      <IoPlaySkipBack size={40} color="19376D" />
      <IoPlay size={40} color="19376D" />
      <IoPause size={40} color="19376D" />
      <IoPlaySkipForward size={40} color="19376D" />
    </div>
  );
};

export default MusicControls;
