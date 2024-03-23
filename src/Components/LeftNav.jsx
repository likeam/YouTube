import React  from 'react'
import { categories } from "../Utils/Constants"
import LeftNavMenuItems from "./LeftNavMenuItems"
import { Navigate } from 'react-router-dom'

const LeftNav = () => {
  return (
    <div className='md:block w-[240px] overflow-y-auto h-full py-4 bg-black absolute md:relative z-10 translate-x-[-240px] md:translate-x-0 transition-all'>
      <div className="flex px-5 flex-col">
        {
          categories.map((item) => {
            return(
              <React.Fragment key={item.name}>
                <LeftNavMenuItems     />
              </React.Fragment>
            );
        })
        }
      </div>
      
    </div>
  )
}

export default LeftNav