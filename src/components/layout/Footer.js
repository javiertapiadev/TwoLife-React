import React from 'react';
import styled from 'styled-components'
import { Grid, Stack, AppBar, Link } from '@mui/material/';
import './styles.css';

const Linkers = styled(Link)`
  color: black;
  text-decoration: none;
`;

const Paragraph = styled.p`
  color: black;
`;

function Footer() {

  return (
    <>
      <AppBar position="static" style= {{ backgroundColor: "white" }}>
        <Grid container>
          <Grid container xs={4}>
            <Stack style={{ width: "100%" }}>
              <Paragraph>Acerca de Nosotros</Paragraph>
              <Linkers href="#" underline="hover"> Quienes Somos </Linkers>
              <Linkers href="#" underline="hover"> Trabaja para nosotros </Linkers>
            </Stack>
          </Grid>
          <Grid container xs={4} style={{ width: "100%" }}>
            <Stack style={{ width: "100%" }}>
              <Paragraph>Ayuda</Paragraph>
              <Linkers href="#" underline="hover">Comprar</Linkers>
              <Linkers href="#" underline="hover">Vender</Linkers>
              <Linkers href="#" underline="hover">Resolucion de problemas</Linkers>
            </Stack>
          </Grid>
          <Grid container xs={4}>
            <Stack style={{ width: "100%" }}>
              <Paragraph> Nuestras redes sociales </Paragraph>
              <Linkers href="#" underline="hover"> Youtube   </Linkers>
              <Linkers href="#" underline="hover"> LinkedIn  </Linkers>
              <Linkers href="#" underline="hover"> Twitter   </Linkers>
              <Linkers href="#" underline="hover"> Facebook  </Linkers>
            </Stack>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <Stack>
              <Paragraph>© 1996-2021, twolies.com, Inc. o afiliados. Todos los derechos reservados.</Paragraph>
              <Linkers href="#" underline="hover">Condiciones de uso</Linkers>
              <Linkers href="#" underline="hover">Aviso de privacidad</Linkers>
            </Stack>
          </Grid>
        </Grid>
      </AppBar>
    </>
  )
};

export default Footer;