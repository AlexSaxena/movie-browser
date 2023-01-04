import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { favArray } from "./favouritesArray";

export default function MovieCard({ movie }) {
  return (
    <Card sx={{ width: 400, miHeight: 420, backgroundColor: "#343739" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/400"
          }
          alt={movie.Title}
        />
        <CardContent
          sx={{
            backgroundColor: "#343739",
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            color="whitesmoke"
          >
            {movie.Title}
          </Typography>
          <Typography variant="body2" color="orangered">
            Type: {movie.Type}
          </Typography>
          <Typography variant="body2" color="orangered">
            Released: {movie.Year}
          </Typography>
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            onClick={() => {
              alert(movie.Title + " Added to Watchlist");
              movie.id = Math.floor(Math.random() * 100);
              favArray.push({ movie });
            }}
          >
            Add to Watchlist
          </Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
