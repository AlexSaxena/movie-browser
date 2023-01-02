import "./App.css";
import { useEffect, useState } from "react";
import MovieCard from "./components/MovieCard";
import SearchIcon from "./search.svg";

const API_URL = "http://www.omdbapi.com/?apikey=b24517dd&";

function App() {
  const [movies, setMovies] = useState([]);

  const movieQuery = async (title) => {
    const response = await fetch(`${API_URL}s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    movieQuery("Batman");
  }, []);

  return (
    <div className="App">
      <h1>Movie Browser</h1>
      <div className="search">
        <input
          type="search"
          placeholder="Search...."
          value="Lord Of The Rings"
          onChange={() => {}}
        />
        <img src={SearchIcon} alt="search" onClick={() => {}} />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies Found</h2>
        </div>
      )}
    </div>
  );
}

export default App;
