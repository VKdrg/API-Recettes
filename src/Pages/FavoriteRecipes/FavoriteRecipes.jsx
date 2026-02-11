import { RecipeList } from "../../Components/RecipeList/RecipeList"
import { useRecipe } from "../../hooks/UseRecipe"
import './FavoriteRecipes.css'

export const FavoriteRecipes = (isFavorite) => {
    const {favorites} = useRecipe()

    return(
        <RecipeList recipes={favorites} />
    )
}