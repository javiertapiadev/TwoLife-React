import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../views/Home';
import RequestPage from '../views/RequestPage';
import Ads from '../views/Ads';
import Populars from './home/Populars';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/myrequests" component={RequestPage} />
          <Route exact path="/myads" component={Ads} />
          <Route exact path="/all-videogames" component={Populars} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;