import { useCallback, useRef } from "react"
import { FaSearch } from "react-icons/fa"
import './RecipeSearch.css'


export const RecipeSearch = ({ setSearch }) => {
    const inputRef = useRef(null)

    const handleSubmit = useCallback(e => {
        e.preventDefault()
        setSearch(inputRef.current.value)
    }, [])

    return (
        <form id="searchform" onSubmit={handleSubmit} >
            <h3>Search recipes :</h3>
            <input
                id="inputSearch"
                autoFocus
                ref={inputRef}
                placeholder="Search recipes ..."
            />
            <button type="submit"><FaSearch size={16} /></button>
        </form>
    )
}