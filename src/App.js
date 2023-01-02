import "./App.css";
import logo from "./logo.svg";
import { useEffect } from "react";

// Movie: Key -> b24517dd

const API_URL = "http://www.omdbapi.com/?apikey=b24517dd&";

function App() {
  const movieQuery = async (title) => {
    const response = await fetch(`${API_URL}s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  };

  useEffect(() => {
    movieQuery("Spiderman");
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

      <div className="container"></div>
    </div>
  );
}

export default App;
