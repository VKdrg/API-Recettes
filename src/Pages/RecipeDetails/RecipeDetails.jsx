import { useEffect, useState } from "react"
import { useLocation, useParams } from "react-router"
import { useRecipe } from "../../hooks/UseRecipe"


export const RecipeDetails = () => {
    const { id } = useParams()
    const location = useLocation()
    const { isFavorite, addFavorites } = useRecipe()

    const [recipe, setRecipe] = useState(location.state?.recipe)

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s')
            .then(res => res.json())
            .then(data => setRecipe(data))
            .catch(console.error) // Equivalent de err => console.error(err)
            .finally(() => setLoading(false))
    }, [])

    return (
        recipe && <div>
            <h1>{recipe.strMeal}</h1>
            {
                isFavorite(recipe) ?
                    <FaHeartBroken onClick={() => { removeFavorite(recipe) }} />
                    :
                    <FaHeart onClick={() => addFavorites(recipe)} />
            }
            <img src={recipe.strMealThumb} alt={`photography of ${strMeal}`} />
            <div>
                {/**
                 * ingredients
                 * ul > li
                 * preparation
                 * instructions
                */}

                <h2>Ingredients</h2>
                <ul>
                    {Object.keys(recipe.info).map((k,i) => {
                        <li key={i}> {strMeasure[i]} {strIngredient[i]} </li>
                    })}
                </ul>
                <h2>Instructions</h2>
            </div>

        </div>
    )
}