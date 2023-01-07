import axios from "axios";
import { useQuery } from "react-query";

const API_KEY = "f3100a9c68mshf89c46d3364e3a3p1f2e01jsn0e9e8048ebfb";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
  params: { hl: "en", gl: "US" },
  headers: {
    "X-RapidAPI-Key": API_KEY,
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

export const useYoutubeQuery = (url) => {
  return useQuery(
    url,
    () => {
      return axios.get(`${BASE_URL}/${url}`, options);
    },
    {
      refetchOnWindowFocus: false,
    }
  );
};
