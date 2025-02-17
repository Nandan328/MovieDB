import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Card from "./components/Card";
import Header from "./components/Header";
import SearchPage from "./components/SearchPage";
import MoviePage from "./components/MoviePage";
import axios from "axios";

function App() {
  const [movies, setMovies] = useState([]);
  const [moviename, setMoviename] = useState("");
  const [movie, setMovie] = useState({});
  const apikey = import.meta.env.VITE_API_KEY;

  let url1 = "https://api.themoviedb.org/3/discover/movie?api_key=";

  useEffect(() => {
    axios.get(url1 + apikey).then((res) => {
      setMovies(res.data.results);
    });
  }, []);

  return (
    <Router>
      <div className="container">
        <Header setMoviename={setMoviename} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="main">
                  {movies.map((movie) => (
                    <Card key={movie.id} movie={movie} setMovie={setMovie} />
                  ))}
                </div>
              </>
            }
          />
          <Route
            path="/search"
            element={<SearchPage moviename={moviename} setMovie={setMovie} />}
          />
          <Route
            path="/movie/:id"
            element={
              <div className="container">
                <MoviePage movie={movie} />
              </div>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
