import { useEffect, useState } from "react"
import { Header } from "../../Components/Header/Header"

export const Home = () => {

    const [loading, setLoading] = useState(false)
    const [recipe, setRecipe] = useState([])
    const [search, setSearch] = useState('')
    const [filter, setFilter] = useState('')

    useEffect(()=>{
        setLoading(true)
        fetch('')
    })
    

    return(
        <div id="wrapper">
            <h1>API Recettes</h1>
            {/**
             * searchbar 
             * filters
             * expr ternaire loading : recipelist
            */}
        </div>
    )
}