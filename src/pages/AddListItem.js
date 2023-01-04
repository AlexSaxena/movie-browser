import { useState } from "react";
import "../css/FormStyle.css";

// Adds items to Json File from Form

function AddListItem() {
  const [Title, setTitle] = useState("");
  const [Year, setYear] = useState(0);
  const [Type, setType] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newListItem = {
      Title,
      Year,
      Type,
    };

    console.log(newListItem);

    const res = await fetch("http://localhost:3001/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newListItem),
    });

    if (res.ok) {
      setTitle("");
      setYear(0);
      setType("");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="movie-form">
      <h2>Add Movie To WatchList</h2>
      <label>Title:</label>
      <input
        type="text"
        value={Title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <label>Year:</label>
      <input
        type="number"
        value={Year}
        onChange={(e) => setYear(e.target.value)}
      />
      <br />
      <label>Type:</label>
      <input
        type="text"
        value={Type}
        onChange={(e) => setType(e.target.value)}
      />
      <br />
      <button>Add Movie</button>
    </form>
  );
}

export default AddListItem;
