import React from "react";
import {
  IoPlay,
  IoPause,
  IoVolumeHigh,
  IoVolumeLow,
  IoVolumeMute,
} from "react-icons/io5";
const MusicControls = () => {
  return (
    <div className="flex flex-row justify-center space-x-4">
      <button>
        <IoPlay size={40} color="19376D" />
        <IoPause size={40} color="19376D" />
        <IoVolumeHigh size={40} color="19376D" />
        <IoVolumeLow size={40} color="19376D" />
        <IoVolumeMute size={40} color="19376D" />
      </button>
    </div>
  );
};

export default MusicControls;
