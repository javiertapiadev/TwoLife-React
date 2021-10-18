import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { NavBar } from './NavBar'
import { Portada } from './Portada'
import Footer from './Footer';
import Latests from './Latests';
import Populars from './Populars';

function App() {
  return (
    <>
      <Router>
      <NavBar/>
      <Portada/>
      </Router>
      <Populars />
      <Latests />
      <Footer />
    </>
  );
}

export default App;