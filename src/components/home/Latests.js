import React, { useState, useEffect } from 'react';
import { Button, Card, CardMedia, CardContent, Typography, 
  CardActions, Chip } 
from '@mui/material/';
import Carousel from "react-elastic-carousel";
import '../../styles/videogames.css';
import styled from "styled-components";

const MainContainer = styled.div`
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  max-width: 100%;
  background-color: "blue";
`;

const Carouselwrapper = styled.div`
  width: 100%;
`;

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 }, 
  { width: 1200, itemsToShow: 4 }
];

const games = "https://twolifes.herokuapp.com/v1/videogames?limit=4";

const imgUrl = "https://m.media-amazon.com/images/I/71vF5KVcvqS._AC_SY500_.jpg"

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
      <MainContainer>
        <Typography gutterBottom variant="h3" component="div">
          Los videojuegos mas nuevos
        </Typography>
        <Carouselwrapper>
          <Carousel breakPoints={breakPoints}>
            { videogames.map (( videogame ) => (
              <Card key={videogame._id} sx={{ }} style={{  }}>
                <Chip color="primary" label="Nuevo"/>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="200"
                  width="300" 
                  image={imgUrl}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {videogame.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    $200
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {videogame.synopsis}
                  </Typography>
                  </CardContent>
                    <CardActions>
                      <Button variant="contained" color="success" size="large">Ver videojuego</Button>
                    </CardActions>
              </Card>
            ))}
          </Carousel>
        </Carouselwrapper>
      </MainContainer>
  );
}

export default Latests;