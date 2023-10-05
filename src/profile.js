import { useEffect, useState } from 'react';
import CardComp from './card';
import { useAuth0 } from '@auth0/auth0-react';

function Profile (){

    let {isAuthenticated, user, isLoading} = useAuth0();
    let stringedFavorites = localStorage.getItem("favorites");
    let favorites = JSON.parse(stringedFavorites);
    let [favoritesState , setFavoritesState] = useState(favorites);



    function handleDelete(index){
        favorites.splice(index, 1);
        let favoritesCopy = [...favorites];
        setFavoritesState(favoritesCopy);
        let storedData = JSON.stringify(favoritesCopy);
        localStorage.setItem("favorites", storedData);
      }




      function filterByEmail(){
        if(isAuthenticated){
          let filteredData = favoritesState.filter(function(item){ return user.email == item.email })
          setFavoritesState(filteredData)
        }
      }


    useEffect (() => {
        if (!isLoading) {
          filterByEmail();
        }
      },[isLoading]);
        
        
       

    return(
        <>
      <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-between", gap:"20px", marginTop:"3%", marginLeft:"8%", marginRight:"8%"}}>
      {isAuthenticated && favoritesState.length !==0 ? favoritesState.map(function(item, index){
        
        
    return(
        <>
         <CardComp image={item.image} title={item.title} description={item.description} showFavorites={false} index = {index} 
          handleDelete={()=>{handleDelete(index)}} email= {user.email} showDelete={true}/>
         </>
      
        )
    }
  
    ):<h3>No Search Results ^-^ </h3>
  }
 </div>
        </>
    )
}

export default Profile;