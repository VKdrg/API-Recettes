import { useEffect, useMemo, useState } from "react"
import { RecipeList } from "../../Components/RecipeList/RecipeList"
import { RecipeSearch } from "../../Components/RecipeSearch/RecipeSearch"

export const Home = () => {

    const [loading, setLoading] = useState(false)
    const [recipes, setRecipes] = useState([])
    const [search, setSearch] = useState('')
    const [filter, setFilter] = useState('')

    useEffect(() => {
        setLoading(true);
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s')
            .then(res => res.json())
            .then(data => setRecipes(data))
            .catch(console.error) // Equivalent de err => console.error(err)
            .finally(() => setLoading(false))
    }, [/* dependencies */])

        const filteredRecipes = useMemo(() => {
        return recipes
            .filter(r => r.strMeal.toLowerCase().includes(search.toLowerCase()))
            .filter(r => filter ? r.strCategory.some(c => c.strMeal === filter) : true)
    }, [recipes, search, filter])

    return (
        <div id="wrapper">
            <h1>Recettes</h1>
            <RecipeSearch setSearch={setSearch} />
            <RecipeTypeFilter filter={filter} setFilter={setFilter} />
            {
                loading ?
                    <p>Loading ...</p> :
                    <RecipeList recipes={recipes} />
            }
        </div>
    )
}