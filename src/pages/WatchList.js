import { useState, useEffect } from "react";
import MovieItem from "../components/MovieItem";
import "../css/TableStyle.css";

function WatchList() {
  const [watchList, setWatchList] = useState([]);

  useEffect(function () {
    async function loadMovies() {
      const res = await fetch("http://localhost:3001/movies");
      const movies = await res.json();

      setWatchList(movies);
    }

    loadMovies();
  }, []);

  return (
    <div className="main">
      <h1>My WatchList</h1>
      <table className="movie-table">
        <tr>
          <th>Movie Name</th>
          <th>Release Year</th>
          <th>Type</th>
          <th>Remove</th>
        </tr>
        {watchList.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </table>
    </div>
  );
}

export default WatchList;
