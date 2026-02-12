import { useEffect, useState } from "react"


export const RecipeTypeFilter = ({ filter, setFilter }) => {

    const [types, setTypes] = useState([])

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s')
            .then(res => res.json())
            .then(data => setTypes(data))
            .catch(console.error)
    }, [])

    return(
        <div>
            {types.map(c => (
                <label key={c.id}>
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