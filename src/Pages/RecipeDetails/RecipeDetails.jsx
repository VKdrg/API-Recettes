import { useEffect, useState } from "react"
import { useLocation, useParams } from "react-router"
import { useRecipe } from "../../hooks/UseRecipe"
import { FaHeart, FaHeartBroken } from "react-icons/fa"


export const RecipeDetails = () => {
    const { id } = useParams()
    const location = useLocation()
    const {recipes,  isFavorite, addFavorites } = useRecipe()

    const [recipe, setRecipe] = useState(() => {
        console.log(recipes)
        const meal = recipes.meals.find(m => m.idMeal === id)
        console.log(meal);
        
        return meal
    })

    return (
        recipe && <div id="wrapper">
            <h1>{recipe.strMeal}</h1>
            {
                isFavorite(recipe) ?
                    <FaHeartBroken onClick={() => { removeFavorite(recipe) }} />
                    :
                    <FaHeart onClick={() => addFavorites(recipe)} />
            }
            <img src={recipe.strMealThumb} alt={`photography of ${recipe.strMeal}`} />
            <div>
                <h2>Ingredients</h2>
                <ul>
                    {Object.entries(recipe)/*.filter(k => k.includes("strIngredient"))*/.map(([k, v], i) => {
                        return k.includes("strMeasure") /* && k.includes("strIngredient")*/ && <li key={i}> {v} </li>
                    })}
                </ul>
                <h2>Instructions</h2>
                {/* <p>{recipe.strInstructions}</p> */}
            </div>

        </div>
    )
}