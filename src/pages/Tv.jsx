import { useTheme } from "../../ContextApi";
import MovieList from "../components/MovieList";

export default function Tv() {
  const { fetchMovies, searchKey } = useTheme();
  const type = searchKey ? "/search/movie" : "/discover/tv";
  fetchMovies(type, searchKey);
  return (
    <div>
      <MovieList />
    </div>
  );
}
