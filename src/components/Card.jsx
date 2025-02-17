import React from "react";
import { useNavigate } from "react-router-dom";
const img_url = "https://image.tmdb.org/t/p/w500";

const Card = ({ movie, setMovie }) => {
  const navigate = useNavigate();
  const check = (movie) => {
    try {
      return movie.vote_average.toFixed(1);
    } catch {
      return 0;
    }
  };

  const moviepage = () => {
    setMovie(movie);
    navigate(`/movie/${movie.id}`);
  };
  if (!movie.poster_path) return <></>;
  return (
    <div key={movie.id} className="card" onClick={moviepage}>
      <img src={img_url + movie.poster_path} alt="" />
      <div>
        <h1>{movie.title}</h1>
        <p>{check(movie)}</p>
      </div>
    </div>
  );
};

export default Card;
