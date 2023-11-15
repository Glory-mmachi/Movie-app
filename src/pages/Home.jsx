import { useTheme } from "../../ContextApi";
import MovieList from "../components/MovieList";

export default function Home() {
  const {  fetchMovies } = useTheme();
  // const type = "/discover/movie";
  const type = "/trending/all/day";

  fetchMovies(type);
  return (
   <div>
    <MovieList/>
   </div>
  );
}
