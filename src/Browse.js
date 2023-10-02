
import { useState } from 'react';
import { useEffect } from 'react';
import { Form } from 'react-bootstrap';
import CardComp from './card';

function Browse () {
    
    let [meals, setMeals] = useState([]);

    async function getMealsData (){
        let response = await fetch ('https://www.themealdb.com/api/json/v1/1/search.php?f=m');
        let data = await response.json();
        setMeals(data.meals)
      
      }


    function handleChange(){}
      
    useEffect(function (){getMealsData()}, [])
    



    return(
        <>
            <Form.Select aria-label="Default select example" onChange={handleChange}>
                <option value="all"> All </option>
                <option value="1">one</option>
                <option value="2">two</option>
                <option value="3">three</option>
            </Form.Select>
        
        <div>
            {meals.map(function(item){
        
        return(
            <>

            <CardComp image={item.strMealThumb} title={item.strMeal} description={item.strInstructions}/>
           
            </>
        )
    })}

    </div>
        </>
    )
}

export default Browse;