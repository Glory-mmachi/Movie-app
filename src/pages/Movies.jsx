import MovieList from "../components/MovieList";
import { useTheme } from "../../ContextApi";

export default function Movies() {
  const { fetchMovies, searchKey } = useTheme();
  const type = searchKey ? "/search/movie" : "/discover/movie";
  fetchMovies(type, searchKey);
  return (
    <div>
      <MovieList />
    </div>
  );
}
