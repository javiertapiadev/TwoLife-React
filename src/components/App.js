import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { NavBar } from './NavBar'
import { Portada } from './Portada'
import { Home } from './Paginas/Home'
//import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
//import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import Footer from './Footer';
import Latests from './Latests';
import Background from './Background';
import Populars from './Populars';

function App() {
  return (
    <>
      <div className="App">
          <Router>
          <NavBar/>
          <Portada/>
          </Router>
      </div>
        <Background />
        <Populars />
        <Latests />
        <Footer />
    </>
  );
}

export default App;