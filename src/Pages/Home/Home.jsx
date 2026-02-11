import { useEffect, useState } from "react"

export const Home = () => {

    const [loading, setLoading] = useState(false)
    const [recipes, setRecipes] = useState([])
    const [search, setSearch] = useState('')
    const [filter, setFilter] = useState('')

    useEffect(() => {
        setLoading(true)
        fetch('')
    })


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