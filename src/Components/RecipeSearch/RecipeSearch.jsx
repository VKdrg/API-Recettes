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
        <form className="searchform" onSubmit={handleSubmit} >
            <input
                autoFocus
                ref={inputRef}
                placeholder="Search recipes ..."
            />
            <button type="submit"><FaSearch /></button>
        </form>
    )
}