import "./App.css";
import { useEffect } from "react";

// Movie: Key -> b24517dd

const API_URL = "http://www.omdbapi.com/?apikey=b24517dd&";

function App() {
  const movieQuery = async (title) => {
    const response = await fetch(`${API_URL}s=${title}`);
    const data = await response.json();

    console.log(data);
  };

  useEffect(() => {
    movieQuery("Spiderman");
  }, []);

  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;
