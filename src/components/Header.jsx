import React from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ setMoviename }) => {
  const navigate = useNavigate();

  const movie = (e) => {
    setMoviename(e.target.value);
  };
  const search = () => {
    navigate("/search");
  };
  const nav = () => {
    navigate("/");
  };
  return (
    <div className="header">
      <h1 onClick={nav}>Movie Database</h1>
      <div>
        <input onChange={movie} type="text" placeholder="Search for movies" />
        <button onClick={search}>search</button>
      </div>
    </div>
  );
};

export default Header;
