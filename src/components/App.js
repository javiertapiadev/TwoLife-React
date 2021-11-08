import React , {useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '../views/Home';
import Compras from '../views/Compras';
import RequestPage from '../views/RequestPage';
import Ads from '../views/Ads';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/myrequests" component={RequestPage} />
          <Route exact path="/myads" component={Ads} />
          <Route exact path="/" component={Home} />
          <Route exact path="/compras" component={Compras} />
        </Switch>
      </Router>
    </>
  );
}

export default App;