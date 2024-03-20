import React, { createContext, useEffect, useState } from 'react'
import { fetchDataFromApi } from '../Utils/Api'

export const Context = createContext();

const AppContext = (props) => {

    const [loading, setLoading ] = useState(false);
    const [searchResults , setSearchResults ] = useState(false);
    const [selectCategories , setSelectCategories ] = useState(false);
    const [mobileLoadMeanu , setMbileLoadMeanu ] = useState(false);


    const featchSelectedCategoriesData = () => {

    }


    useEffect(() =>{
        featchSelectedCategoriesData(selectCategories);
    }, [selectCategories]);

  return (
    <Context.Provider 
        value={{
            loading,
            setLoading,
            searchResults,
            setSearchResults,
            selectCategories,
            setSelectCategories,
            mobileLoadMeanu,
            setMbileLoadMeanu
        }}
    >
        {props.children}
    </Context.Provider>
  )
}

export default AppContext
