import { useState } from 'react';
import CardComp from './card';

function Favorites (){

    let stringedFavorites = localStorage.getItem("favorites");
    let favorites = JSON.parse(stringedFavorites);
    let [favoritesState , setFavoritesState] = useState(favorites)



    function handleDelete(index){
        favorites.splice(index, 1)
        let favoritesCopy = [...favorites]
        setFavoritesState(favoritesCopy)
        let storedData = JSON.stringify(favoritesCopy)
        localStorage.setItem("favorites", storedData)
      }
  



    return(
        <>
      <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-between", gap:"20px", marginTop:"3%", marginLeft:"8%", marginRight:"8%"}}>
      {favoritesState.length !==0 ? favoritesState.map(function(item, index){
        
    return(
        <>
         <CardComp image={item.image} title={item.title} description={item.description} showFavorites={false} index = {index} 
          handleDelete={()=>{handleDelete(index)}}/>
         </>
      
        )
    }

):<h3>No Search Results ^-^ </h3>
  }
 </div>
        </>
    )
}

export default Favorites;