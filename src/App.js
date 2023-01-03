import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Browser from "./pages/Browser";
import Favourites from "./pages/Favourites";

function App() {
  return (
    <BrowserRouter>
      <header className="header-section">
        <Link to="/">Browser</Link>
        <Link to="/favourites">Favorites</Link>
      </header>
      <Routes>
        <Route path="/" element={<Browser />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
