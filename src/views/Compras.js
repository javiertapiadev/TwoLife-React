import { Component} from "react";
import NavBar from "../components/layout/NavBar";
import Anuncios from "../components/compras/Anuncios";
import Filtros from "../components/compras/Filtros";
import Ordenar from "../components/compras/Ordenar";
import { Grid } from "@mui/material";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
}));

class Compras extends Component {
  state = {
    data: [
      {
        id: 1,
        name: "Mario Kart 8 Deluxe",
        img: "https://m.media-amazon.com/images/I/71vF5KVcvqS._AC_SY500_.jpg",
        price: "677",
        platform: "Nintendo Switch",
      },
      {
        id: 2,
        name: "Lego: Star Wars",
        img: "https://m.media-amazon.com/images/I/81EKEhkntuL._SL1500_.jpg",
        price: "3474",
        platform: "Xbox 360",
      },
      {
        id: 3,
        name: "WWE: SmackDown VS RAW 2011",
        img: "https://m.media-amazon.com/images/I/91c30PneriL._AC_SX425_.jpg",
        price: "607",
        platform: "PS3",
      },
      {
        id: 4,
        name: "Lego: Indiana Jones",
        img: "https://m.media-amazon.com/images/I/61Iu1g6bb8L._SY445_.jpg",
        price: "374",
        platform: "PS2",
      },
      {
        id: 5,
        name: "Red Dead Redemption 2",
        img: "https://m.media-amazon.com/images/I/71RuJ6zBT1S._AC_SL1500_.jpg",
        price: "1407",
        platform: "Xbox One",
      },
      {
        id: 6,
        name: "Spider-Man: Miles Morales",
        img: "https://m.media-amazon.com/images/I/71dtn2ZMs7L._SL1361_.jpg",
        price: "1074",
        platform: "PS4",
      },
    ],
  };

  render() {
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
}

export default Compras;
