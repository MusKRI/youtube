import axios from "axios";
import { useQuery } from "react-query";

const API_KEY = "bd03b592d5mshdfc52d92a8d6053p1d9157jsn05b9d8ebc613";

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
