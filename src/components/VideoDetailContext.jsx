import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useYoutubeQuery } from "../utils/api";
import { setLoading } from "../Redux/Features/app/appSlice";

import VideoDetails from "./VideoDetails";

const VideoDetailContext = ({ children }) => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { isLoading, data, isError, error, isSuccess } = useYoutubeQuery(
    `video/details/?id=${id}`
  );

  if (isLoading) {
    dispatch(setLoading(true));
  }

  if (isSuccess) {
    dispatch(setLoading(false));
  }

  return (
    <>
      <VideoDetails video={data?.data} id={id} />
    </>
  );
};

export default VideoDetailContext;
