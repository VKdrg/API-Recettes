import { useContext } from "react"
import { RecipeContext } from "../App"


export const useRecipe = () => {
    const context = useContext(RecipeContext)

    if(!context) {
        throw new Error('UseRecipe doit etre utilisé dans un RecipeProvider')
    }

    return context
}