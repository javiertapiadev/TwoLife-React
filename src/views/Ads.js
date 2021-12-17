import { Component } from 'react';
import axios from 'axios';

import { Container } from "@mui/material";
import Button from '@mui/material/Button';
import { Grid } from "@mui/material";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import SearchIcon from '@mui/icons-material/Search';
import {
  InputBase,
  Stack
} from '@mui/material/';

import Ordenar from "../components/ads/Ordenar";
import AdsList from "../components/ads/AdsList";
import {RowRadioButtonsGroup, RangeSlider, FiltroGeneros, FiltroPlataformas} from "../components/ads/Filtros";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
}));

const Searcher = styled(Stack)`
  display: flex;
`;

class Ads extends Component {
  constructor(props) {
      super(props)
      this.state = {
        userId: "a",
        ads: [],
        adsCopy: [],
        publishDate: "",
        condition: "",
        videogame: "",
        advertiser: "",
        platform: [],
        from: "",
        to: "",
        status: "",
        sortBy: "publishDate",
        order: "desc",
        filter: ""
      }
  }

  componentDidMount() {
    axios.get(`${process.env.REACT_APP_API_URL}/ads?populate=[videogame]&sort=[${this.state.sortBy},${this.state.order}]`)
          .then(response => this.setState({ ads: response.data }))
          .catch(e => console.log(e))
  }

  makeFilter = () => {
    console.log(this.state)
    // this.setState({[filter]: value})
    // this.setState({ filter: `publishDate=${publishDate}&condition=${condition}&videogame=${videogame}&advertiser=${advertiser}&platform=${platform}&price=[${from},${to}]&status=${status}&sort=[${sortBy},${order}]&limit=10`})
  }

  handlerGenero = (e) => {
    console.log(e.target.value)
    // this.setState({})
    // let adsCopy;
    //   adsCopy=this.state.ads.filter(item=>item.genre===e.target.value)
    // this.setState({
    //   adsCopy:adsCopy
    // })
  }

  handlerGameStatus = (e) => {
    this.setState({ status: e.target.value })
  }

  handlerPlatform = (e) => {
    this.setState({ platform: [...this.state.platform, e.target.value]})
  }

  render (){
  return (
    <>
      <Grid container spacing={2} sx={{ maxWidth: "90%", marginLeft: "auto", marginRight: "auto"}} justifyContent="center">
        <Grid item xs={9} md={3}>
          <Ordenar />
        </Grid>

        <Grid item xs={9} md={9} sx={{display: {md: "flex"}, alignItems: "center", maxHeight: "80px", marginLeft: "auto", marginRight: "auto"}}>
          <Searcher direction="row" sx={{ display:  'flex', maxHeight: "50px"  }}>
            <SearchIcon classes={{ root: { color: "#122325" } }} />
            <InputBase
              placeholder="Mario Bros…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Searcher>

          <Button onclick={this.makeFilter} variant="primary">Buscar</Button>
        </Grid>

        <Grid item xs={3} alignItems="center" sx={{display: {xs: "none", md: "block"}}}>
          <Container >
            <h3>Condición</h3>
            <RowRadioButtonsGroup handlerGameState={this.handlerGameStatus}/>
            {/* <br></br>
            <br></br> */}
            <h3>Rango de precio</h3>
            <RangeSlider/>
            {/* <br></br> */}
            <h3>Género</h3>
            <FiltroGeneros handlerGenero={this.handlerGenero}/>
            {/* <br></br> */}
            <h3>Plataformas</h3>
            <FiltroPlataformas handlerPlatform={this.handlerPlatform}/>
          </Container>
          {/* <Button sx={{ display: { md: "none" } }}>
            Filtros
          </Button> */}
          
        </Grid>
        <Grid item xs={9}>
          <main>
            <AdsList ads={this.state.ads} />
          </main>
        </Grid>
      </Grid>
    </>
  );
  }
}
export default Ads;
