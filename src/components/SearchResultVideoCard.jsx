import React from "react";
import { Link } from "react-router-dom";
import VideoLength from "../partials/VideoLength";
import { abbreviateNumber } from "js-abbreviation-number";
import { BsFillCheckCircleFill } from "react-icons/bs";

const SearchResultVideoCard = ({ video }) => {
  return (
    <>
      <Link to={`/video/${video?.videoId}`} className="m-auto md:m-0">
        <div className="flex flex-col md:flex-row relative gap-x-4 gap-y-2">
          <div className="rounded-xl min-w-[240px] max-w-[360px] flex-1 relative">
            <img
              src={video?.thumbnails[0]?.url}
              alt=""
              className="h-full max-w-full object-cover rounded-xl"
            />
            {video?.lengthSeconds && (
              <VideoLength lengthSeconds={video.lengthSeconds} />
            )}
          </div>

          {/* For less than equal to 768px */}
          <div className="flex text-white items-start md:hidden">
            <div className="flex items-start gap-2">
              <div className="w-[36px] h-[36px]">
                <img
                  src={video?.author?.avatar[0]?.url}
                  alt="Hello"
                  className="rounded-full object-covers"
                />
              </div>
            </div>

            <div className="flex flex-col ml-3 overflow-hidden">
              <p className="font-semibold max-h-[4rem] max-w-[15rem] text-[14px] line-clamp-2">
                {video?.title}
              </p>
              <div className="flex flex-row items-center text-[#bdc3c7]">
                <span className="text-[12px]">{video?.author?.title}</span>
                <span className="flex text-[6px] leading-none font-bold text-white/[0.7] relative top-[1px] mx-1">
                  •
                </span>
                <span className="text-[12px]">
                  {`${abbreviateNumber(video?.stats?.views, 2)} views`}
                </span>
                <span className="flex text-[6px] leading-none font-bold text-white/[0.7] relative top-[1px] mx-1">
                  •
                </span>
                <span className="truncate text-[12px]">
                  {video?.publishedTimeText}
                </span>
              </div>
            </div>
          </div>

          {/* For greater than 768px */}
          <div className="hidden md:flex flex-col gap-y-2 flex-1">
            <div className="">
              <p className="max-h-[4rem] text-[18px] font-semibold line-clamp-2 text-[#f1f1f1]">
                {video?.title}
              </p>
            </div>

            <div className="flex items-center text-[#bdc3c7]">
              <span className="text-[12px]">
                {`${abbreviateNumber(video?.stats?.views, 2)} views`}
              </span>
              <span className="flex text-[6px] leading-none font-bold text-white/[0.7] relative top-[1px] mx-1">
                •
              </span>
              <span className="truncate text-[12px]">
                {video?.publishedTimeText}
              </span>
            </div>

            <div className="mt-2 flex items-start gap-2">
              <div className="w-[36px] h-[36px]">
                <img
                  src={video?.author?.avatar[0]?.url}
                  alt="Hello"
                  className="rounded-full object-cover"
                />
              </div>

              <span className="text-[12px] font-semibold mt-2 text-white/[0.7] items-center flex gap-2 text-[#f1f1f1]">
                {video?.author?.title}
                {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                  <BsFillCheckCircleFill />
                )}
              </span>
            </div>

            <div className="mt-2">
              <p className="text-[12px] text-[#bdc3c7]">
                {video?.descriptionSnippet}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default SearchResultVideoCard;
