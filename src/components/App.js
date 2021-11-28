import React , {useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../views/Home';
import Compras from '../views/Compras';
import RequestPage from '../views/RequestPage';
import Ads from '../views/Ads';
import Populars from './home/Populars';
import Sell from '../views/Sell';
import SignUp from '../views/SignUp';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/sell" component={Sell} />
          <Route exact path="/myrequests" component={RequestPage} />
          <Route exact path="/myads" component={Ads} />
          <Route exact path="/all-videogames" component={Populars} />
          <Route exact path="/compras" component={Compras} />
        </Switch>
      </Router>
    </>
  );
}

export default App;