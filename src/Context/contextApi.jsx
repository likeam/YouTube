import React, { createContext, useEffect, useState } from 'react'
import { fetchDataFromApi } from '../Utils/Api'

export const Context = createContext();

const AppContext = (props) => {

    const [loading, setLoading ] = useState(false);
    const [searchResults , setSearchResults ] = useState(false);
    const [selectCategories , setSelectCategories ] = useState(games);
    const [mobileLoadMeanu , setMbileLoadMeanu ] = useState(false);


    const featchSelectedCategoriesData = (query) => {
        setLoading(true)
        fetchDataFromApi(`search/?q=${query}`).then((res) => {
            console.log(res);
            
        })
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
