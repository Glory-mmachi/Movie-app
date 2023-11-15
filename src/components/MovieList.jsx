import React from 'react'
import MovieCard from './MovieCard'
import { useTheme } from '../../ContextApi';

export default function MovieList() {
    const {movies}=useTheme()
  return (
    <div className="movies container">
    {movies.map((movie) => {
      return (
        <div key={movie.id}>
          <MovieCard
            movieTitle={movie.title}
            movieImg={movie.poster_path}
            movieRating={movie.vote_average}
            movieName={movie.name}
          />
        </div>
      );
    })}
  </div>
  )
}
