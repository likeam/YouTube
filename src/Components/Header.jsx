import React, { useContext, useState } from 'react'
import { Context } from '../Context/ContextApi';
import { useLocation, useNavigate } from 'react-router-dom';
import {CgClose} from "react-icons/cg"
import {SlMenu} from "react-icons/sl"
import Loader from '../assets/Shared/Loader';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const myContext = useContext(Context);
  const {loading,   mobileLoadMeanu, setMbileLoadMeanu} = myContext;

  const searchQueryHandler = (e) => {
    if((e?.key === "Enter" || e === "searchButton") && searchQuery?.length > 0 ){
      navigate(`/searchResult/${searchQuery}`);
    }
  }

  const mobileMenuToggle = () => {
    setMbileLoadMeanu(!mobileLoadMeanu);
  }

  const { pathname } = useLocation();
  const pageName = pathname?.split("/")?.filter(Boolean)?.[0];

  return (
    <div className="sticky top-0 z-10 flex flex-row items-center justify-between h-14 px-4 md:px-5 bg-slate-400 dark:bg-black">
      {loading && <Loader />}
      <div className="flex h-5 items-center">
        {pageName !== "video" && (
          <div 
              onClick={mobileMenuToggle}
              className='flex md:hidden md:mr-6 cursor-pointer items-center justify-center h-10 w10 rounded-full hover:bg-[#303030]/[0.6]' 
            >
            {mobileLoadMeanu ? (<CgClose className=' text-white text-xl' />)
            : (<SlMenu className=' text-white text-xl' /> )}

          </div>
        )}
      </div>
    </div>
  )
}

export default Header