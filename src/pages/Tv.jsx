import React from "react";
import { useTheme } from "../../ContextApi";
import MovieList from "../components/MovieList";

export default function Tv() {
  const { fetchMovies } = useTheme();
  // const type = "/trending/tv";
  // fetchMovies(type);
  return (
    <div>
      <MovieList />
    </div>
  );
}
