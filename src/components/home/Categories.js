import React from 'react';
import { Button, Card, CardMedia, CardContent, Typography, 
  CardActions, Chip } 
from '@mui/material/';
import Carousel from "react-elastic-carousel";
import styled from "styled-components";

const MainContainer = styled.div`
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Carouselwrapper = styled.div`
  width: 100%;
`;

const categorias = [
    {id: 1, title: 'estrategias', img: 'https://m.media-amazon.com/images/I/7129nswGWdS._AC_SY741_.jpg'},
    {id: 2, title: 'carreras', img: 'https://m.media-amazon.com/images/I/71TU0o8tAwS._AC_SY741_.jpg'},
    {id: 3, title: 'deportes', img: 'https://images-na.ssl-images-amazon.com/images/I/71F9Tuy0oyS.__AC_SX300_SY300_QL70_ML2_.jpg'},
    {id: 4, title: 'musical', img: 'https://m.media-amazon.com/images/I/61aV-LnV3FL._AC_SX569_.jpg'},
    {id: 5, title: 'peleas', img: 'https://m.media-amazon.com/images/I/71YY9q62EyS._AC_SY741_.jpg'},
];

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 }, 
  { width: 1200, itemsToShow: 4 }
];

function Categories(){


  return (
    <React.Fragment>
      <MainContainer>
        <Typography gutterBottom variant="h3" component="div">
          Categorias de videojuegos
        </Typography>
        <Carouselwrapper>
          <Carousel breakPoints={breakPoints}>
            { categorias.map (( categoria ) => (
              <Card key={categoria.id} sx={{ }} style={{  }}>
                <Chip color="primary" label="Nuevo"/>
                <CardMedia
                  component="img"
                  alt="categoria"
                  height="200"
                  width="300" 
                  image={categoria.img}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {categoria.id}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {categoria.title}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant="contained" color="secondary" size="large">Ver Categoria</Button>
                </CardActions>
              </Card>
            ))}
            </Carousel>
            </Carouselwrapper>
        </MainContainer>
    </React.Fragment>
  );
}

export default Categories;