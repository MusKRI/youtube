import { useState } from "react";
import { BarLoader } from "react-spinners";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ytLogo from "../images/yt-logo.png";
import ytLogoMobile from "../images/yt-logo-mobile.png";

import { SlMenu } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import { CgClose } from "react-icons/cg";
import { Tooltip } from "antd";

import { useSelector, useDispatch } from "react-redux";
import {
  selectLoading,
  selectMobileMenu,
  setMobileMenu,
  setLoading,
} from "../Redux/Features/app/appSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const MobileMenu = useSelector(selectMobileMenu);
  const loading = useSelector(selectLoading);

  const [searchQuery, setSearchQuery] = useState("");

  const searchQueryHandler = (e) => {
    if (
      (e?.key === "Enter" || e === "searchButton") &&
      searchQuery?.length > 0
    ) {
      navigate(`searchResult/${searchQuery}`);
    }
  };

  const mobileMenuToggle = () => {
    dispatch(setMobileMenu(!MobileMenu));
  };

  const { pathname } = useLocation();

  const pageName = pathname?.split("/")?.filter(Boolean)?.[0];

  console.log(pageName);

  return (
    <div className="fixed top-0 left-0 right-0 z-10 flex flex-row items-center justify-between h-14 px-4 md:px-5 md:py-5 bg-white dark:bg-ytBg">
      {loading && (
        <div className="absolute inset-0">
          <BarLoader
            color="#FF0000"
            height={2}
            width="100%"
            loading={loading}
          />
        </div>
      )}

      <div className="flex h-5 items-center">
        {pageName !== "video" && (
          <div
            className="flex md:hidden md:mr-6 cursor-pointer items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]"
            onClick={mobileMenuToggle}
          >
            {MobileMenu ? (
              <CgClose className="text-white text-xl" />
            ) : (
              <SlMenu className="text-white text-xl" />
            )}
          </div>
        )}
        <Link to="/" className="h-5 flex items-center">
          <img
            src={ytLogo}
            alt="Youtube"
            className="h-full hidden dark:md:block cursor-pointer"
          />
          <img
            src={ytLogoMobile}
            alt="Youtube"
            className="h-full md:hidden cursor-pointer"
          />
        </Link>
      </div>

      <div className="group flex items-center">
        <div className="bg-[#35363A] flex h-8 md:h-10 md:ml-10 md:pl-5 border border-[#303030] rounded-l-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0">
          <div className="w-10 items-center justify-center hidden group-focus-within:md:flex">
            <IoIosSearch className="text-white text-xl" />
          </div>
          <input
            type="text"
            className="bg-transparent outline-none text-white px-5 md:pl-0 w-44 md:group-focus-within:pl-0 md:w-64 lg:w-[500px]"
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyUp={searchQueryHandler}
            value={searchQuery}
            placeholder="Search"
          />
        </div>
        <Tooltip placement="bottom" title={"Search"}>
          <button className="w-[40px] md:w-[60px] h-8 md:h-10 bg-white/[0.1] rounded-r-3xl flex justify-center items-center">
            <IoIosSearch className="text-white text-xl" />
          </button>
        </Tooltip>
      </div>

      <div className="flex items-center">
        <div className="hidden md:flex md:items-center">
          <Tooltip placement="bottom" title={"Create"}>
            <div className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-[#404347]/[0.6]">
              <RiVideoAddLine className="text-white text-xl cursor-pointer" />
            </div>
          </Tooltip>

          <Tooltip placement="bottom" title={"Notifications"}>
            <div className="flex items-center justify-center ml-2 h-10 w-10 rounded-full hover:bg-[#404347]/[0.6]">
              <FiBell className="text-white text-xl cursor-pointer" />
            </div>
          </Tooltip>
        </div>
        <div className="flex h-8 w-8 overflow-hidden rounded-full md:ml-4 cursor-pointer">
          <img
            src="https://yt3.ggpht.com/ytc/AMLnZu-evMiUkSbFb3ndYW4LqNPM-0fTUfuBNUKDz7kzZg=s88-c-k-c0x00ffffff-no-rj-mo"
            alt="Profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
