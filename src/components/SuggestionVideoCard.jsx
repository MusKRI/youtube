import React from "react";
import { abbreviateNumber } from "js-abbreviation-number";
import { Link } from "react-router-dom";
import { BsFillCheckCircleFill } from "react-icons/bs";
import VideoLength from "../partials/VideoLength";

const SuggestionVideoCard = ({ video }) => {
  console.log(video);
  return (
    <>
      <Link to={`/video/${video.videoId}`}>
        <div className="flex flex-row relative gap-x-3">
          <div className="h-[98px] w-[168px] rounded-xl relative">
            <img
              src={video?.thumbnails[0]?.url}
              alt=""
              className="h-full max-w-full object-cover rounded-xl"
            />
            {video?.lengthSeconds && (
              <VideoLength lengthSeconds={video.lengthSeconds} />
            )}
          </div>

          <div className="flex flex-col flex-1">
            <div className="text-ellipsis">
              <p className="text-[14px] line-clamp-2 font-semibold text-white">
                {video?.title}
              </p>
            </div>
            <div>
              <span className="text-[12px] font-semibold mt-2 text-white/[0.7] items-center flex gap-2">
                {video?.author?.title}
                {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                  <BsFillCheckCircleFill />
                )}
              </span>
            </div>

            <div className="flex text-[12px] font-semibold text-white/[0.7] truncate overflow-hidden items-center">
              <span>{`${abbreviateNumber(video?.stats?.views, 2)} views`}</span>
              <span className="flex text-[14px] leading-none font-bold text-white/[0.7] relative top-[-1px] mx-1">
                •
              </span>
              <span className="truncate">{video?.publishedTimeText}</span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default SuggestionVideoCard;
