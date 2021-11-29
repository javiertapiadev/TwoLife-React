<<<<<<< HEAD
import React from 'react';
import { Component} from "react";
=======
>>>>>>> f82698c4fdf9b9888231d105eb1233a518cf3be9
import { NavBar } from "../components/NavBar";
import Anuncios from "../components/compras/Anuncios";
import Filtros from "../components/compras/Filtros";
import Ordenar from "../components/compras/Ordenar";
import { Grid } from "@mui/material";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
}));

function Compras() {
    return (
      <>
        <NavBar />
        <Grid container spacing={2}>
          <Grid item xs={3} md={3}>
            <Ordenar/>
          </Grid>
          <Grid item xs={9} md={9}>
            <Item textAlign ='center'>
              Disfrute de todos los videojuegos que TwoLifes le ofrece, desde
              los más recientes hasta los clásicos retros. 
              ¡¡Estamos seguros que los disfrutará al máximo!!!
            </Item>
          </Grid>
          <Grid item xs={3} alignItems="center">
              <Filtros/>
          </Grid>
          <Grid item xs={9}>
            <Anuncios />
          </Grid>
        </Grid>
      </>
    );
  }

export default Compras;
