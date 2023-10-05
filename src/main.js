import CardComp from './card';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useEffect } from 'react';

function Main (){

  let [meals, setMeals] = useState([]);






async function getMealsData (){
  let response = await fetch ('https://www.themealdb.com/api/json/v1/1/search.php?f=m');
  let data = await response.json();
  setMeals(data.meals)

}
    //link of api

 async  function handleSubmit (event){
      event.preventDefault()
      let searchedValue = event.target.search.value;
      let response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + searchedValue );
      let data = await response.json();
      setMeals(data.meals)    
  }


  useEffect(function (){getMealsData();}, [])

    return(
    <>
      <Form className="d-flex" onSubmit={handleSubmit} style={{marginTop:"2%", marginLeft:"26%", marginRight:"26%"}}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              name="search"
            />
            <Button variant="outline-success" type='submit'>Search</Button>
          </Form>

    <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-between", gap:"20px", marginTop:"3%", marginLeft:"8%", marginRight:"8%"}}>
      {meals[0]!= null? meals.map(function(item){
        
        return(
          <>
            <CardComp image={item.strMealThumb} title={item.strMeal} description={item.strInstructions} showFavorites={true} showDelete={false}/>
            </>
      
        )
    }
):<h3>No Search Results ^-^ </h3>
  }
 </div>
    </>
    )
}

export default Main;
