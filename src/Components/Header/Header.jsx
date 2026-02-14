import { FaHeart } from "react-icons/fa"
import { Link, NavLink } from "react-router"
import { useRecipe } from "../../hooks/UseRecipe"
import './Header.css'

export const Header = () => {
    
    const { favorites } = useRecipe()
    return (

        <nav>
            <Link to={'/'}>
                <img src="src/assets/logo.svg" alt="website logo" />
            </Link>
            <NavLink to={'/favorites'} ><FaHeart size={32} />Liked : {favorites.length} </NavLink>
        </nav>

    )
}