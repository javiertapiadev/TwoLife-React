import AdsList from "../components/ads/AdsList";
import Filtros from "../components/ads/Filtros";
import Ordenar from "../components/ads/Ordenar";
import { Grid } from "@mui/material";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import SearchIcon from '@mui/icons-material/Search';
import {
  InputBase,
  Stack
} from '@mui/material/';
const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
}));

const Searcher = styled(Stack)`
  display: flex;
`;


function Ads() {
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
          <Filtros />
        </Grid>
        <Grid item xs={9}>
          <main>
            <AdsList />
          </main>
        </Grid>
      </Grid>
    </>
  );
}

export default Ads;
