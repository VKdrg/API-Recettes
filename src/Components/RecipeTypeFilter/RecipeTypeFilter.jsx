import { useEffect, useState } from "react"
import './RecipeTypeFilter.css'


export const RecipeTypeFilter = ({ filter, setFilter }) => {

    const [types, setTypes] = useState([])

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                
                setTypes(data.categories)
    })
            .catch(console.error)
    }, [])

    return(
        <div id="recipeFilters">
            <h4>Filters :</h4>
            {types.map(c => (
                <label key={c.idCategory}>
                    <input
                        type="radio"
                        name="category" 
                        value={c.strCategory}
                        checked={filter === c.strCategory}
                        onChange={e => setFilter(c.strCategory)}
                    />
                    {c.strCategory}
                </label>
            ))}
        </div>
    )
}