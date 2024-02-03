import { useTheme } from "../../ContextApi";
import MovieList from "../components/MovieList";

export default function Home() {
  const { fetchMovies, searchKey } = useTheme();
  const type = searchKey ? "/search/movie" : "/trending/all/day";
  fetchMovies(type, searchKey);

  fetchMovies(type);
  return (
    <div>
      <MovieList />
    </div>
  );
}
