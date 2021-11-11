import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import styled from 'styled-components';
import { AppBar, Toolbar, Menu, MenuItem, 
  InputBase, Stack, ButtonGroup, Button, Grid } from '@mui/material/';
import { AccountCircle, Notifications } from '@mui/icons-material/';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';

const Logo = styled.img`
  width: 8vw;
  height: 18vh;
`;

const Searcher = styled(Stack)`
  background-color: yellow; 
  display: flex;
`;

const AccountIcon= styled(AccountCircle)`
  height: 9vh;
  width: 5vw;
`;

function NavBar() {

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
      <AppBar position="static">
        <Toolbar variant="dense">
          <Logo src={logo} alt="logo"/>
          <Button style= {{ backgroundColor: "white" }}
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        Dashboard
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>
          <Link to="/myrequests">Mis solicitudes</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <Link to="/myads">Mis anuncios</Link>
        </MenuItem>
          </Menu>
            <Notifications/>
            <Searcher direction="row">
                <SearchIcon />
                <InputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                />
          </Searcher>
          <ButtonGroup disableElevation variant="contained">
            <Button>
              <Link to="/myads">Comprar</Link>
            </Button>
            <Button>
              <Link to="/myads">Vender</Link>
            </Button>
          </ButtonGroup>
          <Stack direction="row" style = {{ backgroundColor: "red" }}>
          <AccountIcon style = {{ backgroundColor: "black" }} />
          <Grid direction="column" alignItems="center" style = {{ backgroundColor: "green" }}>
            <Stack> My Acount </Stack>
            <Stack direction="row">
              <Stack> Login </Stack>
              <Stack> Sign In </Stack>  
            </Stack>
          </Grid>
          </Stack>
        </Toolbar>
      </AppBar>
  )
}

export default NavBar;