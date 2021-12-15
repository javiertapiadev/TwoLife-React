import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import MenuIcon from '@mui/icons-material/Menu';
import MoreIcon from '@mui/icons-material/MoreVert';
import Typography from '@mui/material/Typography';

import { AccountCircle, Notifications } from '@mui/icons-material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {
  AppBar,
  Toolbar,
  Menu,
  MenuItem,
  Button,
} from '@mui/material/';

import logo from '../../assets/Captura.png';

const Logo = styled.img`
  width: 200px;
  height: 40px;
`;

const styles = {
  links: {
    textDecoration: "none",
    color: "#3a3a3a"
  },
  nav: {
    padding: "4px 10px",
    borderRadius: "5px",
    fontWeight: "bold"
  },
  navSell: {
    backgroundColor: "#526EFF",
    textDecoration: "none",
    color: "white"
  },
  navBuy: {
    border: "1px solid #526EFF",
    textDecoration: "none",
    color: "#526EFF"
  }
}

const LoggedOutOpts = () => {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const mobileMenuId = 'primary-search-account-menu-mobile';

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  return (
    <>
      <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
        <IconButton
          size="large"
          aria-label="show more"
          aria-haspopup="true"
          onClick={handleMobileMenuOpen} >
          <MoreIcon classes={{ root: { color: "#122325" } }}/>
        </IconButton>
      </Box>

      <Menu
        anchorEl={mobileMoreAnchorEl}
        id={mobileMenuId}
        keepMounted
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
        disableScrollLock={ true }>
          <MenuItem>
            <Link to="/login" style={styles.links}>Login</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/signup" style={styles.links}>Sign Up </Link>
          </MenuItem>
      </Menu>

      <Box sx={{ width: "150px", display: { xs: 'none', md: 'flex' }, justifyContent: "space-around" }}>
        <Link to="/login" style={styles.links}>Login</Link>
        <Link to="/signup" style={styles.links}>Sign Up </Link>
      </Box>
    </>
  )
}

const LoggedInOpts = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  
  const user = {
    username: "fulan0",
    profile_pic: "https://pbs.twimg.com/media/C_losxzU0AQuS5r.jpg"
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }

  return (
    <div>
      <Link to="/news" style={{ marginRight: "10px" }}>
        <Notifications sx={{ color: "#3a3a3a", display: {xs: "none", md: "inline-block"} }}/>
      </Link>

      <Button style={{ backgroundColor: "white", color: "#526EFF", padding: 0 }}
        id="basic-button"
        size="small"
        aria-controls="menu-usuario"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        classes= {{ root: {backgroundColor: "red"} }} >
          {user.profile_pic.length > 0 ? 
            <Avatar src={user.profile_pic} sx={{width: "30px", height: "30px"}}/> : 
            <AccountCircle />} 
          <Typography sx={{ display: {xs: "none", md: "inherit"}, marginLeft: 1 }}>
            {user.username}
          </Typography>
          <KeyboardArrowDownIcon sx={{ display: {xs: "none", md: "inherit"} }}/>
      </Button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        disableScrollLock={ true }>
        <MenuItem onClick={handleClose}>
          <Link to="/account" style={styles.links}>Mi cuenta</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/myrequests" style={styles.links}>Mis solicitudes</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/myads" style={styles.links}>Mis anuncios</Link>
        </MenuItem>
        <MenuItem onClick={handleClose} sx={{ display: {md: "none"} }}>
          <Link to="/news" style={styles.links}>Notificaciones</Link>
        </MenuItem>
      </Menu>
    </div>
  )
}

function NavBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const isLogged = true

  const handleOpenNavMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar sx={{ backgroundColor: "white", position: "relative", display: "flex", justifyContent: "space-between" }}>
      <Toolbar variant="dense" sx={{ display: "flex", justifyContent: "space-between" }}>

        {/* Pantallas medianas */}
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Link to="/" >
            <Logo src={logo} alt="logo" />
          </Link>
        </Box>

        <Box sx={{ width: "180px", display: { xs: 'none', md: 'flex' }, justifyContent: "space-around" }}>
          <Link to="/ads" style={{...styles.nav, ...styles.navBuy}}>Comprar</Link>
          <Link to="/sell" style={{...styles.nav, ...styles.navSell}}>Vender</Link>
        </Box>

        {/* Pantallas chicas */}
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
          >
            <MenuIcon classes={{ root: { color: "#122325" } }} />
          </IconButton>

          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleCloseNavMenu}
            disableScrollLock={ true }
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
            <MenuItem onClick={handleCloseNavMenu}>
              <Link to="/ads" style={styles.links}>Comprar</Link>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
              <Link to="/sell" style={styles.links}>Vender</Link>
            </MenuItem>
          </Menu>
        </Box>

        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <Link to="/" >
            <Logo src={logo} alt="logo" />
          </Link>
        </Box>

        {isLogged ? <LoggedInOpts /> : <LoggedOutOpts />}
      </Toolbar>
    </AppBar>
  )
}

export default NavBar;