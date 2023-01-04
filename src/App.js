import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Browser from "./pages/Browser";
import Watchlist from "./pages/WatchList";
import AddListItem from "./pages/AddListItem";
import "./css/NavbarStyle.css";

function App() {
  return (
    <BrowserRouter>
      <header className="nav-bar">
        <h2>Movie Browser</h2>
        <ul>
          <li>
            <Link to="/">Browser</Link>
          </li>
          <li>
            <Link to="/watchlist">Watchlist</Link>
          </li>
          <li>
            <Link to="/addListItem">AddListItem</Link>
          </li>
        </ul>
      </header>
      <Routes>
        <Route path="/" element={<Browser />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/addListItem" element={<AddListItem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
