import React from 'react';
import '../styles/footer.css';
import { Grid, Stack, AppBar } from '@mui/material/';
import styled from 'styled-components'

const Link = styled.a`
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
              <Link href="#"> Quienes Somos </Link>
              <Link href="#"> Trabaja para nosotros </Link>
            </Stack>
          </Grid>
          <Grid container xs={4} style={{ width: "100%" }}>
            <Stack style={{ width: "100%" }}>
              <Paragraph>Ayuda</Paragraph>
              <Link href="#">Comprar</Link>
              <Link href="#">Vender</Link>
              <Link href="#">Resolucion de problemas</Link>
            </Stack>
          </Grid>
          <Grid container xs={4}>
            <Stack style={{ width: "100%" }}>
              <Paragraph> Nuestras redes sociales </Paragraph>
              <Link href="#"> Youtube   </Link>
              <Link href="#"> LinkedIn  </Link>
              <Link href="#"> Twitter   </Link>
              <Link href="#"> Facebook  </Link>
            </Stack>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <Stack>
              <Paragraph>© 1996-2021, twolies.com, Inc. o afiliados. Todos los derechos reservados.</Paragraph>
              <Link href="#">Condiciones de uso</Link>
              <Link href="#">Aviso de privacidad</Link>
            </Stack>
          </Grid>
        </Grid>
      </AppBar>
    </>
  )
};

export default Footer;