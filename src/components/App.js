import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../views/Home';
import Ads from '../views/Ads';
import RequestPage from '../views/RequestPage';
import { IndividualAds } from './ads/IndividualAds';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/myrequests" component={RequestPage} />
          <Route exact path="/" component={Home} />
          <Route exact path="/ads" component={Ads} />
          <Route exact path="/ads/:id" component={IndividualAds} />
        </Switch>
      </Router>
    </>
  );
}

export default App;