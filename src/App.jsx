import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import { Header } from './Components/Header/Header'
import { Home } from './Pages/Home/Home'
import { createContext, useEffect, useState } from 'react'
import { RecipeDetails } from './Pages/RecipeDetails/RecipeDetails'
import { FavoriteRecipes } from './Pages/FavoriteRecipes/FavoriteRecipes'

export const RecipeContext = createContext()

function RecipeProvider({ children }) {
  const [loading, setLoading] = useState(true)
  const [recipes, setRecipes] = useState([])
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('favorites')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])

  useEffect(() => {
    setLoading(true);
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s')
      .then(res => res.json())
      .then(data => setRecipes(data))
      .catch(console.error) // Equivalent de err => console.error(err)
      .finally(() => setLoading(false))
  }, [/* dependencies */])
  
  const isFavorite = (recipe) => {
    return favorites.some(r => r.strMeal.toLowerCase() === recipe.strMeal.toLowerCase())
  }

  const addFavorites = (recipe) => {
    if(!isFavorite(recipe)){
      setFavorites([...favorites, recipe])
    }
  }

  const removeFavorite = (recipe) => {
    setFavorites(favorites.filter(r => r.strMeal !== recipe.strMeal))
  }

  return(
    <RecipeContext.Provider value={{ recipes, favorites, loading, isFavorite, addFavorites, removeFavorite }} >
      {children}
    </RecipeContext.Provider>
  )

}

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/recipes/:id' element={<RecipeDetails />} />
          <Route path='/favorites' element={<FavoriteRecipes />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App