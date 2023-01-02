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
        <CardContent
          sx={{
            backgroundColor: "#343739",
            boxShadow: " 0px 13px 10px -7px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            color="whitesmoke"
          >
            {movie1.Title}
          </Typography>
          <Typography variant="body2" color="orangered">
            Type: {movie1.Type}
          </Typography>
          <Typography variant="body2" color="orangered">
            Released: {movie1.Year}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
