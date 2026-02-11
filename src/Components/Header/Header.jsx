import { FaHeart } from "react-icons/fa"
import { NavLink } from "react-router"
import { useRecipe } from "../../hooks/UseRecipe"

export const Header = () => {
    const { favorites } = useRecipe()
    return (
        <div>
            <img src="src/assets/logoTMDB.svg" alt="" />
            <nav>
                <NavLink to={'/favorites'} ><FaHeart size={80} />Favorites : {favorites.length} </NavLink>
            </nav>
        </div>
    )
}