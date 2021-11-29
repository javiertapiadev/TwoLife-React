import React, { useState, useEffect } from 'react';
import { Container, Grid, Stack, AppBar, Link, Typography, 
    Card, CardMedia, CardContent } from '@mui/material/';
import styled from 'styled-components';
import NavBar from '../layout/NavBar'
import Footer from '../layout/Footer'
import { Typography, Card, CardMedia, CardContent, Grid } from '@mui/material/';

const img = "https://m.media-amazon.com/images/I/71vF5KVcvqS._AC_SY500_.jpg";
const games = "https://twolifes.herokuapp.com/v1/videogames";

function Populars(){

    const [videogames, setVideogames] = useState([]);

    useEffect( () => {
        getVideogames();
    }, [] );

    const getVideogames = async () => {
        const response = await fetch(games);
        const jsonData = await response.json();
        setVideogames(jsonData);
    };

  return (
    <>
        <Typography
          color="textPrimary"
          gutterBottom
          variant="h2"
          align="center"
        >
          Nuestros Videojuegos
        </Typography>
        <Grid container spacing={3}>
          {videogames.map( videogame  => (
            <Grid item xs={12} sm={4} key={videogame._id}>
              <Card>
                <CardContent>
                  <Typography color="primary" variant="h5">
                    <span>{videogame.name}</span>
                  </Typography>
                  <Typography color="textSecondary" variant="subtitle2">
                    {videogame.synopsis}
                  </Typography>
                </CardContent>
                <CardMedia>
                  <img src={img} alt=""/>
              </CardMedia>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default Populars;