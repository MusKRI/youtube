import { useEffect } from "react";
import LeftNav from "./LeftNav";
import { useSelector } from "react-redux";
import {
  selectLoading,
  selectSearchResults,
} from "../Redux/Features/app/appSlice";

import VideoCard from "./VideoCard";

const Feed = () => {
  const loading = useSelector(selectLoading);
  const searchResults = useSelector(selectSearchResults);

  const resultantVideos = searchResults.filter((item) => {
    if (item.video) {
      return item;
    }
  });

  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h");
  }, []);

  console.log(resultantVideos);

  return (
    <div className="flex flex-row relative top-[56px]">
      <LeftNav />
      <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-feedBg md:ml-[240px]">
        <div className="grid grid-cols-auto-fill gap-x-4 p-5 place-content-center place-items-start gap-y-10">
          {!loading &&
            resultantVideos.map((item) => {
              return (
                <VideoCard
                  key={item?.video?.videoId}
                  videoDetail={item?.video}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Feed;
