import React from "react";
import { abbreviateNumber } from "js-abbreviation-number";
import { Link } from "react-router-dom";
import { BsFillCheckCircleFill } from "react-icons/bs";
import VideoLength from "../partials/VideoLength";

const VideoCard = ({ videoDetail }) => {
  return (
    <>
      <Link to={`/video/${videoDetail.videoId}`} className="m-auto md:m-0">
        <div className="flex flex-col relative gap-2">
          <div className="max-w-[max-content] rounded-xl relative">
            <img
              src={videoDetail?.thumbnails[0]?.url}
              alt=""
              className="h-full max-w-full object-cover rounded-xl"
            />
            {videoDetail?.lengthSeconds && (
              <VideoLength lengthSeconds={videoDetail.lengthSeconds} />
            )}
          </div>
          <div className="flex text-white items-start">
            <div className="flex items-center gap-2">
              <div className="w-[36px] h-[36px]">
                <img
                  src={videoDetail?.author?.avatar[0]?.url}
                  alt="Hello"
                  className="rounded-full object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col ml-3 overflow-hidden">
              <p className="max-h-[4rem] max-w-[15rem] text-[14px] font-semibold line-clamp-2">
                {videoDetail.title}
              </p>
              <span className="text-[12px] font-semibold mt-2 text-white/[0.7] items-center flex gap-2">
                {videoDetail?.author?.title}
                {videoDetail?.author?.badges[0]?.type ===
                  "VERIFIED_CHANNEL" && <BsFillCheckCircleFill />}
              </span>
              <div className="flex text-[12px] font-semibold text-white/[0.7] truncate overflow-hidden items-center">
                <span>{`${abbreviateNumber(
                  videoDetail?.stats?.views,
                  2
                )} views`}</span>
                <span className="flex text-[14px] leading-none font-bold text-white/[0.7] relative top-[-1px] mx-1">
                  •
                </span>
                <span className="truncate">
                  {videoDetail?.publishedTimeText}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default VideoCard;
