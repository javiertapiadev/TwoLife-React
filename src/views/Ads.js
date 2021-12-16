import AdsList from "../components/ads/AdsList";
import { Container } from "@mui/material";
import {RowRadioButtonsGroup, RangeSlider, FiltroGeneros, FiltroPlataformas} from "../components/ads/Filtros";
import Ordenar from "../components/ads/Ordenar";
import { Grid } from "@mui/material";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import { Component } from 'react';
import {
  InputBase,
  Stack
} from '@mui/material/';
const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
}));
require('dotenv').config();

const Searcher = styled(Stack)`
  display: flex;
`;

class Ads extends Component {
  constructor(props) {
      super(props)
      this.state = { 
          ads: [],
          adsCopy: []
      }
  }

  componentDidMount() {
      axios.get(`${process.env.REACT_APP_API_URL}/ads?populate=[videogame]`)
          .then(response => this.setState({ ads: response.data }))
          .catch(e => console.log(e))
  }

  handlerGenero = (e) => {
    console.log(e.target.value)
    let adsCopy;
      adsCopy=this.state.ads.filter(item=>item.genre===e.target.value)
    this.setState({
      adsCopy:adsCopy
    })
  }

  handlerGameState = (e) => {
    console.log(e.target.value)
    let adsCopy;
    if(e.target.value==="todos"){
    adsCopy=this.state.ads
    }else{
      adsCopy=this.state.ads.filter(item=>item.gameStatus===e.target.value)
    }
    this.setState({
      adsCopy:adsCopy
    })

    }

  handlerPlatform = (e) => {
    console.log(e.target.value)
    let adsCopy;
      adsCopy=this.state.ads.filter(item=>item.platforms===e.target.value)
    this.setState({
      adsCopy:adsCopy
    })
  }

  generarPlatforms = () => {
    
  }

  render (){
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={3} md={3}>
          <Ordenar />
        </Grid>
        <Grid item xs={9} md={9}>
          <Searcher direction="row" sx={{ display:  'flex'  }}>
            <SearchIcon classes={{ root: { color: "#122325" } }} />
            <InputBase
              placeholder="Mario Bros…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Searcher>
          <Item textAlign='center'>
            Disfrute de todos los videojuegos que TwoLifes le ofrece, desde
            los más recientes hasta los clásicos retros.
            ¡¡Estamos seguros que los disfrutará al máximo!!!
          </Item>
        </Grid>
        <Grid item xs={3} alignItems="center">
        <Container>
                <h3>Condición</h3>
                <RowRadioButtonsGroup handlerGameState={this.handlerGameState}/>
                <br></br>
                <br></br>
                <h3>Rango de precio</h3>
                <RangeSlider/>
                <br></br>
                <h3>Género</h3>
                <FiltroGeneros handlerGenero={this.handlerGenero}/>
                <br></br>
                <h3>Plataformas</h3>
                <FiltroPlataformas handlerPlatform={this.handlerPlatform}/>
            </Container>
        </Grid>
        <Grid item xs={9}>
          <main>
            <AdsList ads={this.state.adsCopy} />
          </main>
        </Grid>
      </Grid>
    </>
  );
  }
}
export default Ads;
