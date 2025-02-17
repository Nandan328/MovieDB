import React from "react";

const MoviePage = ({ movie }) => {
  const img_url = "https://image.tmdb.org/t/p/w500";
  const check = (movie) => {
    try {
      return movie.vote_average.toFixed(1);
    } catch {
      return 0;
    }
  };
  return (
    <>
      <div className="moviepage">
        <img src={img_url + movie.backdrop_path} alt={movie.title} />
        <h1>
          {movie.title} <span>({movie.release_date})</span>
        </h1>
        <h4>Overview:</h4>
        <p>{movie.overview}</p>
        <p>
          <b>Rating:</b> {check(movie)}
        </p>
      </div>
    </>
  );
};

export default MoviePage;
