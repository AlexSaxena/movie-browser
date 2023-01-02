import "./App.css";
import { useEffect } from "react";
import Movie from "./components/MovieComp";

const API_URL = "http://www.omdbapi.com/?apikey=b24517dd&";

// const movie1 = {
//   Title: "Batman Begins",
//   Year: "2005",
//   imdbID: "tt0372784",
//   Type: "movie",
//   Poster: "N/A",
// };

function App() {
  const movieQuery = async (title) => {
    const response = await fetch(`${API_URL}s=${title}`);
    const data = await response.json();

    console.log(data.Search);
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
        <button onClick={() => {}}>Search</button>
      </div>

      <div className="container">
        <Movie />
      </div>
    </div>
  );
}

export default App;
