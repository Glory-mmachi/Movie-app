import { useTheme } from "../../ContextApi";

export default function Hero() {
  const { selectedMovie } = useTheme();
  return (
    <div
      className="hero-section container"
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/w500/${selectedMovie?.backdrop_path}')`,
      }}
    >
      <h1 className="movie-title">
        {selectedMovie?.title || selectedMovie?.name}
      </h1>
      <p className="movie-description">{selectedMovie?.overview}</p>
    </div>
  );
}
