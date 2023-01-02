import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function MovieCard({ movie }) {
  return (
    <Card sx={{ width: 400, height: 400, backgroundColor: "#343739" }}>
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
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
