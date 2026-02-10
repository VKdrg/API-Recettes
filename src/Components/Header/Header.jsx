import { FaHeart } from "react-icons/fa"
import { NavLink } from "react-router"

export const Header = () =>{
    return(
        <div>
            <img src="src/assets/logoTMDB.svg" alt="" />
            <nav>
                <NavLink><FaHeart/>Favorites</NavLink>
            </nav>
        </div>
    )
}