import { Link } from "react-router"
import './RecipeItem.css'


export const RecipeItem = ({ recipe }) => {

    return (

        <Link to={{ pathname: `/recipe/${recipe.strMeal}`, state: recipe }} className="card" >
            <h3>{recipe.strMeal}</h3>
            <img src={recipe.strMealThumb} alt={`photography of ${recipe.strMeal}`} />
            {/**
             * ul
             * li
            */}
        </Link>

    )

}