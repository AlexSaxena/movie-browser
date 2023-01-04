function MovieItem({ movie }) {
  const { Title, Year, Type, id } = movie;

  const handleClick = () => {
    fetch("http://localhost:3001/movies/" + id, {
      method: "DELETE",
    });
  };

  return (
    <tr>
      <td>{Title}</td>
      <td> {Year}</td>
      <td>{Type}</td>
      <td>
        <button onClick={handleClick}>Remove</button>
      </td>
    </tr>
  );
}

export default MovieItem;
