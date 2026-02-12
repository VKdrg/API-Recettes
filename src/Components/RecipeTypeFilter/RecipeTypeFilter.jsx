import { useEffect, useState } from "react"


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
            {types.map(c => (
                <label key={c.idCategory}>
                    <input
                        type="radio"
                        name="category" 
                        value={c.name}
                        checked={filter === c.name}
                        onChange={e => setFilter(c.name)}
                    />
                </label>
            ))}
        </div>
    )
}