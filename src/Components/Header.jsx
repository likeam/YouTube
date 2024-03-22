import React, { useContext, useState } from "react";
import { Context } from "../Context/ContextApi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CgClose } from "react-icons/cg";
import { SlMenu } from "react-icons/sl";
import Loader from "../Shared/Loader";
import YTLogo from "../assets/yt-logo.png";
import YTMLogo from "../assets/yt-logo-mobile.png";
import { IoIosSearch } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const myContext = useContext(Context);
  const { loading, mobileLoadMeanu, setMbileLoadMeanu } = myContext;

  const searchQueryHandler = (e) => {
    if (
      (e?.key === "Enter" || e === "searchButton") &&
      searchQuery?.length > 0
    ) {
      navigate(`/searchResult/${searchQuery}`);
    }
  };

  const mobileMenuToggle = () => {
    setMbileLoadMeanu(!mobileLoadMeanu);
  };

  const { pathname } = useLocation();
  const pageName = pathname?.split("/")?.filter(Boolean)?.[0];

  return (
    <div className="sticky top-0 z-10 flex flex-row items-center justify-between h-14 px-4 md:px-5 bg-slate-400 dark:bg-black">
      {loading && <Loader />}
      <div className="flex h-5 items-center">
        {pageName !== "video" && (
          <div
            onClick={mobileMenuToggle}
            className="flex md:hidden md:mr-6 cursor-pointer items-center justify-center h-10 w10 rounded-full hover:bg-[#303030]/[0.6]"
          >
            {mobileLoadMeanu ? (
              <CgClose className=" text-white text-xl" />
            ) : (
              <SlMenu className=" text-white text-xl" />
            )}
          </div>
        )}
        <Link to="/" className=" flex h-5 items-center ">
          <img src={YTLogo} alt="Youtobe" className="h-full hidden md:block" />
          <img src={YTMLogo} alt="YTMObile" className="h-full ml-2 md:hidden" />
        </Link>
      </div>
      <div className="group flex items-center">
        <div className="flex h-8 md:h-10 md:pl-5 border border-[#303030] rounded-xl gorup-focus-within:border-blue-500 md:group-focus-within:pl-0">
          <div className="w-10 items-center justify-center hidden group-focus-within:md:flex">
            <IoIosSearch className="text-white text-xl" />
          </div>
          <input
            type="text"
            className=" bg-transparent outline-none text-white pr-5 pl-5 md:pl-0 w-44 md:group-focus-within:pl-0 md:w-64 lg:w-[500px]"
            placeholder="Search"
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
          />

          <button
            className="w-[40px] md:w-[60px] h-8 md:h-10 flex items-center justify-center border border-l-0 border-[#303030] rounded-r-xl bg-white/[0.1]"
            onClick={() => searchQueryHandler("searchButton")}
          >
            <IoIosSearch className="text-white text-xl" />
          </button>
        </div>
        <div className="flex items-center">
          <div className="hidden md:flex">
            <div className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
              <RiVideoAddLine className="text-white text-xl cursor-pointer" />
            </div>
            <div className="flex items-center justify-center ml-2 h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
              <FiBell className="text-white text-xl cursor-pointer" />
            </div>
          </div>
          <div className="flex h-8 w-8 overflow-hidden rounded-full md:ml-4">
            <img src="https://avatars.githubusercontent.com/u/92205472?v=4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
