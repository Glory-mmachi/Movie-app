import React from "react";
import MovieList from "../components/MovieList";
import { useTheme } from "../../ContextApi";

export default function Movies() {
  const{fetchMovies}=useTheme()
  const type='/discover/movie'
  fetchMovies(type)
  return (
    <div>
      <MovieList />
    </div>
  );
}
