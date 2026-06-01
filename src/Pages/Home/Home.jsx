import { useEffect, useMemo, useState } from "react"
import { RecipeList } from "../../Components/RecipeList/RecipeList"
import { RecipeSearch } from "../../Components/RecipeSearch/RecipeSearch"
import { RecipeTypeFilter } from "../../Components/RecipeTypeFilter/RecipeTypeFilter"
import './Home.css'

export const Home = () => {

    const [loading, setLoading] = useState(false)
    const [recipes, setRecipes] = useState([])
    const [search, setSearch] = useState('')
    const [filter, setFilter] = useState('')

    useEffect(() => {
        setLoading(true);
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s')
            .then(res => res.json())
            .then(data => setRecipes(data.meals))
            .catch(console.error) // Equivalent de err => console.error(err)
            .finally(() => setLoading(false))
    }, [/* dependencies */])

        const filteredRecipes = useMemo(() => {
            console.log(recipes)
        return recipes
            .filter(r => r.strMeal.toLowerCase().includes(search.toLowerCase()))
            .filter(r => filter ? r.strCategory.some(c => c.strMeal === filter) : true)
    }, [recipes, search, filter])

    return (
        <div id="wrapper">
            <h1>API Recettes de cuisine</h1>
            <RecipeSearch setSearch={setSearch} />
            <RecipeTypeFilter filter={filter} setFilter={setFilter} />
            {
                loading ?
                    <p>Loading ...</p> :
                    <RecipeList recipes={filteredRecipes} />
            }
        </div>
    )
}