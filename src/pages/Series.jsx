import MovieList from '../components/MovieList'
import { useTheme } from '../../ContextApi';

export default function Series() {
  const { fetchMovies, searchKey } = useTheme();
  const type = searchKey ? "/search/movie" : "/tv/top_rated";

  fetchMovies(type, searchKey);
  return (
    <div>
      <MovieList/>
    </div>
  )
}
