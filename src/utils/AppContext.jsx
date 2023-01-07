import { useDispatch, useSelector } from "react-redux";
import { selectCategories } from "../Redux/Features/app/appSlice";
import { useYoutubeQuery } from "./api";
import { setLoading, setSearchResults } from "../Redux/Features/app/appSlice";

const AppContext = ({ children }) => {
  const dispatch = useDispatch();
  const query = useSelector(selectCategories);

  const { isLoading, data, isError, error, isSuccess } = useYoutubeQuery(
    `search/?q=${query}`
  );

  if (isLoading) {
    dispatch(setLoading(true));
  }

  if (isSuccess) {
    dispatch(setLoading(false));
    dispatch(setSearchResults(data?.data.contents));
  }

  console.log(data?.data.contents);

  return <>{children}</>;
};

export default AppContext;
