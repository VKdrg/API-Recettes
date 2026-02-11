import { RecipeItem } from "../RecipeItem/RecipeItem"
import './RecipeList.css'

export const RecipeList = (recipes) => {

    return (
        <div>
            {recipes.map(r => <RecipeItem key={r.idMeal} recipe={r} />)}
        </div>
    )
}