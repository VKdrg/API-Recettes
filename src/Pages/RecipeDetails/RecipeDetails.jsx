import { useEffect, useState } from "react"
import { useLocation, useParams } from "react-router"
import { useRecipe } from "../../hooks/UseRecipe"
import { FaHeart, FaHeartBroken } from "react-icons/fa"
import './RecipeDetails.css'


export const RecipeDetails = () => {
    const { id } = useParams()
    const location = useLocation()
    const { recipes, isFavorite, addFavorites } = useRecipe()

    const [recipe, setRecipe] = useState(() => {
        console.log(recipes)
        const meal = recipes.meals.find(m => m.idMeal === id)
        console.log(meal);

        return meal
    })

    return (
        recipe && <div id="wrapper">
            <h1>
                {recipe.strMeal}
                {
                    isFavorite(recipe) ?
                        <FaHeartBroken onClick={() => { removeFavorite(recipe) }} />
                        :
                        <FaHeart onClick={() => addFavorites(recipe)} />
                }
            </h1>
            <div id="RecipeText">
                <h2>Ingredients</h2>
                <ul>
                    {Object.entries(recipe).map(([k, v], i) => {

                        if (k.includes("strIngredient") && v !== "") {
                            return <li key={i}> {v} </li>
                        }

                    })}
                </ul>
                <h2>Instructions</h2>
                <p>{recipe.strInstructions}</p>
            </div>
            <img src={recipe.strMealThumb} alt={`photography of ${recipe.strMeal}`} />

        </div>
    )
}