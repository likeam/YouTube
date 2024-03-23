import React, { useContext } from 'react'
import { Context } from '../Context/ContextApi'
import LeftNav from './LeftNav';

const Feed = () => {

  const myContext= useContext(Context);
  const {loading,  searchResults} = myContext;



  return (
    <div className=' flex flex-row h-[calc(100%-56px)]'>
      <LeftNav />
    </div>
  )
}

export default Feed