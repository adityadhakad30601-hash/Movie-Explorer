import React from 'react'
import Movie from './Pages/Movie'
import MovieDetails from './Pages/MovieDetails'
import Home from './Pages/Home'
import Favourite from './Pages/Favourite'
import Error from './Pages/Error'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movie' element={<Movie/>}/>
        <Route path='/movie-deatils' element={<MovieDetails/>}/>
        <Route path='/favourite' element={<Favourite/>} /> 
        <Route path='*' element={<Error/>} /> 

    </Routes>
    
    </BrowserRouter>
  )
}

export default App
