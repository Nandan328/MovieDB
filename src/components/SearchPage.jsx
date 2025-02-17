import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";

const SearchPage = ({ moviename, setMovie }) => {
  let url2 = `https://api.themoviedb.org/3/search/movie?query=${moviename}&api_key=`;
  const apikey = import.meta.env.VITE_API_KEY;

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(url2 + apikey).then((res) => {
      console.log(res.data.results);
      setMovies(res.data.results);
    });
  }, [moviename]);

  return (
    <div className="main">
      {movies.map((movie) => (
        <Card key={movie.id} movie={movie} setMovie={setMovie} />
      ))}
    </div>
  );
};

export default SearchPage;
