import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useYoutubeQuery } from "../utils/api";

import { setLoading } from "../Redux/Features/app/appSlice";

import SearchResult from "./SearchResult";

const SearchResultContext = () => {
  const dispatch = useDispatch();
  const { searchQuery } = useParams();

  const { isLoading, data, isSuccess } = useYoutubeQuery(
    `search/?q=${searchQuery}`
  );

  if (isLoading) {
    dispatch(setLoading(true));
  }

  if (isSuccess) {
    dispatch(setLoading(false));
    console.log(data);
  }

  return (
    <>
      <SearchResult searchResults={data?.data} id={searchQuery} />
    </>
  );
};

export default SearchResultContext;
