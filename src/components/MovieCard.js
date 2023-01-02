import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function MovieCard({ movie1 }) {
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={
            movie1.Poster !== "N/A"
              ? movie1.Poster
              : "https://via.placeholder.com/400"
          }
          alt={movie1.Title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {movie1.Title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Type: {movie1.Type}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Released: {movie1.Year}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
