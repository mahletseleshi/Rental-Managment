import React from 'react'
import MoviesHeader from "../../components//Movies/MoviesHeader"
import Feature from '../../components/Movies/Feature'
import Movie from '../../components/Movies/Movie'
import Banner from '../../components/Movies/Banner'
import "./movies.css"





const Movies = () => {
  return (
    <div>
      <MoviesHeader />
      <Feature />
      <Banner />
      <Movie />
    </div>
  )
}

export default Movies
