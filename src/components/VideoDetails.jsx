import { useEffect, useState } from "react";
import ReactPlayer from "react-player/youtube";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { abbreviateNumber, unabbreviateNumber } from "js-abbreviation-number";

import { useYoutubeQuery } from "../utils/api";

import SuggestionVideoCard from "./SuggestionVideoCard";

const VideoDetails = ({ video, id }) => {
  const [descShow, setDescShow] = useState(false);

  function handleDescShow() {
    setDescShow((prevDescShow) => !prevDescShow);
  }

  const { isLoading, data, isError, error, isSuccess } = useYoutubeQuery(
    `video/related-contents/?id=${video?.videoId}`
  );

  console.log(data);

  useEffect(() => {
    document.getElementById("root").classList.add("custom-h");
  }, []);

  return (
    <div className="flex flex-row justify-around bg-[#232629] top-[56px] relative">
      <div className="w-full max-w-[1280px] flex flex-col lg:flex-row">
        <div className="flex flex-col lg:w-[calc(100%-350px)] xl:w-[calc(100%-400px)] px-4 py-3 lg:py-6 overflow-y-auto">
          <div className="h-[300px] md:h-[400px] xl:h-[550px] ml-[-16px] lg:ml-0 mr-[-16px] lg:mr-0">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
              width="100%"
              height="100%"
              style={{ backgroundColor: "rgb(42 46 50 / 1)" }}
              playing={true}
            />
          </div>

          <div className="flex flex-col">
            <div className="text-white font-bold text-sm md:text-xl mt-4 line-clamp-2">
              {video?.title}
            </div>

            <div className="flex justify-between flex-row mt-4">
              <div className="flex items-center">
                <div className="flex items-start">
                  <div className="flex h-11 w-11 rounded-full overflow-hidden">
                    <img
                      src={video?.author?.avatar[0]?.url}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                <div className="flex flex-col ml-3">
                  <div className="text-white text-[14px] font-semibold flex items-center gap-x-2">
                    {video?.author?.title}
                    {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                      <BsFillCheckCircleFill />
                    )}
                  </div>

                  <div className="text-white/[0.7] text-sm">
                    {video?.author?.stats?.subscribersText}
                  </div>
                </div>
              </div>

              <div className="flex text-white mt-4 md:mt-0 gap-x-2">
                <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15]">
                  <AiOutlineLike className="text-xl text-white mr-2" />
                  <span>{`${abbreviateNumber(
                    video?.stats?.likes,
                    2
                  )} likes`}</span>
                </div>

                {/* <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15]">
                <AiOutlineLike className="text-xl text-white mr-2" />
                <span>{`${abbreviateNumber(
                  video?.stats?.views,
                  2
                )} views`}</span>
              </div> */}
              </div>
            </div>

            <div className="mt-4">
              <div
                className={`${
                  descShow ? "" : "cursor-pointer"
                } bg-[#2A2E32] hover:bg-[#31363B] relative rounded-xl text-[#bdc3c7] text-[14px] p-3`}
              >
                <div className="m-3">
                  <div className="flex items-center gap-x-3">
                    <span className="font-semibold">{`${
                      descShow
                        ? video?.stats?.views.toLocaleString()
                        : abbreviateNumber(video?.stats?.views, 2)
                    } views`}</span>
                    <span className="font-semibold">
                      {video?.publishedDate}
                    </span>
                  </div>
                  <div className="mt-1 flex flex-col items-start overflow-hidden">
                    <span
                      className={`${
                        descShow ? "" : "line-clamp-1"
                      } whitespace-pre-wrap text-[#f1f1f1]`}
                    >
                      {video?.description}
                    </span>
                    <span
                      className="cursor-pointer hover:text-[#3DAEE9] text-[#f1f1f1] font-semibold"
                      onClick={handleDescShow}
                    >
                      {descShow ? "Show Less" : "Show More"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-y-4 py-6 px-4 overflow-y-auto lg:w-[350px] xl:w-[400px]">
          {data?.data?.contents?.map((relatedVideo, index) => {
            if (relatedVideo.type !== "video") return false;
            return (
              <SuggestionVideoCard key={index} video={relatedVideo.video} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
