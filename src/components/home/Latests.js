import React, { useState, useEffect } from 'react';
import { Container, Button, Card, CardActionArea, CardMedia, 
  CardContent, Typography, CardActions, Grid } 
from '@mui/material/';
import '../../styles/videogames.css';

const games = "https://twolifes.herokuapp.com/v1/videogames";

function Latests(){

  const [videogames, setVideogames] = useState([]);

  useEffect( () => {
    getVideogames();
  }, []);

  const getVideogames = async () => {
    const response = await fetch(games);
    const jsonData = await response.json();
    setVideogames(jsonData);
  };

  return (

      <Container>
        <Typography
          color="textPrimary"
          gutterBottom
          variant="h2"
          align="center"
        >
          Nuevos Lanzamientos
        </Typography>
        <Grid container spacing={3}>
          {videogames.map(( imgUrl, title, estado, detalles ) => (
            <Grid item xs={12} sm={4} key={imgUrl}>
              <Card className={title}>
                <CardMedia
                  className={estado}
                  image={detalles}
                />
                <CardContent>
                  <Typography color="primary" variant="h5">
                    {title}
                  </Typography>
                  <Typography color="textSecondary" variant="subtitle2">
                    {detalles}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    )
};

export default Latests;