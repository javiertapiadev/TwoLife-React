import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../views/Home';
import Compras from '../views/Compras';
import RequestPage from '../views/RequestPage';
import Ads from '../views/Ads';
<<<<<<< HEAD
import axios from 'axios'

const URI = process.env.REACT_APP_URI   


=======
import { IndividualAds } from './anuncio/IndividualAds';
>>>>>>> f82698c4fdf9b9888231d105eb1233a518cf3be9

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/myrequests" component={RequestPage} />
          <Route exact path="/myads" component={Ads} />
          <Route exact path="/" component={Home} />
          <Route exact path="/compras" component={Compras} />
<<<<<<< HEAD
          <Route exact path="/anuncio" component={Compras} />
=======
          <Route exact path="/compras/:adsId" component={IndividualAds} />
>>>>>>> f82698c4fdf9b9888231d105eb1233a518cf3be9
        </Switch>
      </Router>
    </>
  );
}

export default App;