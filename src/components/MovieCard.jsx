import { unavailable } from "../../config";
export default function MovieCard({
  movieTitle,
  movieImg,
  movieRating,
  movieName,
}) {
  const img_path = "https://image.tmdb.org/t/p/w500/";
  return (
    <div className="movie-card ">
      <img
        src={movieImg ? `${img_path}${movieImg}` : `${unavailable}`}
        alt="img"
        className="poster"
      />
      <h3 className="title">{movieTitle ? movieTitle : movieName}</h3>
      <span className="vote">{movieRating.toPrecision(2)}</span>
    </div>
  );
}
