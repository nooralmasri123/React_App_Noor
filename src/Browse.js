
import { useState } from 'react';
import { useEffect } from 'react';
import { Form } from 'react-bootstrap';
import CardComp from './card';


function Browse () {
    
    let [meals, setMeals] = useState([]);
    let [categories , setCategories] = useState([])

    async function getMealsData (){
        let response = await fetch ('https://www.themealdb.com/api/json/v1/1/search.php?f=m');
        let data = await response.json();
        setMeals(data.meals)
      
      }


   async function showTheCategories (){
        let response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
        let data = await response.json()
        setCategories(data.meals)

   }

   async function handleChange(event){
        let selectValues = event.target.value
        let response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=' + selectValues);
        let data = await response.json()
        setMeals(data.meals)
   }
      
    useEffect(function (){getMealsData()
        showTheCategories()
    }, [])
    



    return(
        <>
            <Form.Select aria-label="Default select example"  onChange={handleChange} >
                <option value="all"> All </option>
                {
                    categories.map(function(category){
                        return <option value={category.strCategory}>
                            {
                                category.strCategory
                            }
                        </option>
                    })
                }
            </Form.Select>
        
        <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-between"}}>
            {meals.length !==0 ? meals.map(function(item){
        
        return(
            <>

            <CardComp image={item.strMealThumb} title={item.strMeal} description={item.strInstructions}/>
           
            </>
        )
    }):<h3>No Search results ^-^ </h3>}

    </div>
        </>
    )
}

export default Browse;