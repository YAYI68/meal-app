import React, { createContext, useContext, useState } from 'react'
useContext
const FavoriteContextState = createContext();

function FavoriteContextProvider({children}) {
    const [favouriteIds,setFavouriteIds] = useState([]);
    
    const addFavourite=(id)=>{
        setFavouriteIds((currentIds)=>[...currentIds,id])
    }
    const removeFavourite=(id)=>{
        setFavouriteIds((currentIds)=>currentIds.filter((mealId)=> mealId !== id))
    }

  return (
   <FavoriteContextState.Provider
     value={{
        ids:favouriteIds,
        addFavourite,
        removeFavourite,
     }}
   >
      {children}
   </FavoriteContextState.Provider>
  )
}

export default FavoriteContextProvider

export const useFavoriteState = ()=> useContext(FavoriteContextState)