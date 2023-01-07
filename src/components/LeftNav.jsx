import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import LeftNavMenuItem from "./LeftNavMenuItem";

import { AiFillHome, AiOutlineFlag } from "react-icons/ai";
import { MdLocalFireDepartment, MdLiveTv } from "react-icons/md";
import { CgMusicNote } from "react-icons/cg";
import { FiFilm } from "react-icons/fi";
import { IoGameControllerSharp } from "react-icons/io5";
import { ImNewspaper } from "react-icons/im";
import { GiDiamondTrophy, GiEclipse } from "react-icons/gi";
import { RiLightbulbLine, RiFeedbackLine } from "react-icons/ri";
import { FiSettings, FiHelpCircle } from "react-icons/fi";

import {
  selectCategories,
  setCategories,
  selectMobileMenu,
} from "../Redux/Features/app/appSlice";

const categories = [
  { name: "New", icon: <AiFillHome />, type: "home" },
  { name: "Trending", icon: <MdLocalFireDepartment />, type: "category" },
  { name: "Music", icon: <CgMusicNote />, type: "category" },
  { name: "Films", icon: <FiFilm />, type: "category" },
  { name: "Live", icon: <MdLiveTv />, type: "category" },
  { name: "Gaming", icon: <IoGameControllerSharp />, type: "category" },
  { name: "News", icon: <ImNewspaper />, type: "category" },
  { name: "Sports", icon: <GiDiamondTrophy />, type: "category" },
  { name: "Learning", icon: <RiLightbulbLine />, type: "category" },
  {
    name: "Fashion & beauty",
    icon: <GiEclipse />,
    type: "category",
    divider: true,
  },
  { name: "Settings", icon: <FiSettings />, type: "menu" },
  { name: "Report History", icon: <AiOutlineFlag />, type: "menu" },
  { name: "Help", icon: <FiHelpCircle />, type: "menu" },
  { name: "Send feedback", icon: <RiFeedbackLine />, type: "menu" },
];

const LeftNav = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectedCategory = useSelector(selectCategories);
  const mobileMenu = useSelector(selectMobileMenu);

  const clickHandler = (name, type) => {
    switch (type) {
      case "category":
        dispatch(setCategories(name));
        break;
      case "home":
        dispatch(setCategories(name));
        break;
      case "menu":
        break;
      default:
        break;
    }
  };

  return (
    <div
      className={`z-[1000] overflow-y-auto bg-ytBg md:block w-[240px] h-full py-4 fixed left-0 top-[56px] z-5 translate-x-[-240px] md:translate-x-0 transition-all ${
        mobileMenu ? "translate-x-0" : ""
      }`}
    >
      <div className="flex px-5 flex-col">
        {categories.map((item, index) => {
          return (
            <>
              <LeftNavMenuItem
                key={`${item.name}-${index}`}
                itemLabel={item.type === "home" ? "Home" : item.name}
                itemIcon={item.icon}
                action={() => {
                  clickHandler(item.name, item.type);
                  navigate("/");
                }}
                classess={item.name === selectedCategory ? "bg-[#31363B]" : ""}
              />
              {item.divider && <hr className="my-4 border-white/[0.2]" />}
            </>
          );
        })}

        <hr className="my-4 border-white/[0.2]" />
        <p className="text-white/[0.5] text-[14px]">Youtube Clone by Krishna</p>
      </div>
    </div>
  );
};

export default LeftNav;
