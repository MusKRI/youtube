import React from "react";

const VideoLength = ({ lengthSeconds }) => {
  const hour = Math.floor(lengthSeconds / 3600);
  const minute = Math.floor((lengthSeconds % 3600) / 60);
  const seconds = ((lengthSeconds % 3600) % 60) % 60;

  const lengthOfVideo =
    hour === 0
      ? `${minute}:${seconds < 10 ? `0${seconds}` : `${seconds}`}`
      : `${hour}:${minute}:${seconds < 10 ? `0${seconds}` : `${seconds}`}`;
  return (
    <>
      <div className="absolute z-5 bg-black/[0.8] bottom-[4px] right-[10px] flex justify-center items-center px-[10px] py-[2px] rounded-md">
        <span className="text-white text-[12px] font-semibold">
          {lengthOfVideo}
        </span>
      </div>
    </>
  );
};

export default VideoLength;
