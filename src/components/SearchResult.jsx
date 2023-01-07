import React, { useEffect } from "react";

import LeftNav from "./LeftNav";
import SearchResultVideoCard from "./SearchResultVideoCard";

const SearchResult = ({ searchResults, id }) => {
  useEffect(() => {
    document.getElementById("root").classList.add("custom-h");
  }, []);

  console.log(searchResults);

  return (
    <div className="flex flex-row bg-[#232629] top-[56px] relative">
      <LeftNav />
      <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto md:ml-[240px] max-w-[1096px]">
        <div className="grid grid-cols-1 gap-6 p-5">
          {searchResults?.contents?.map((itemVid, index) => {
            if (itemVid.type !== "video") return false;
            return <SearchResultVideoCard key={index} video={itemVid?.video} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
