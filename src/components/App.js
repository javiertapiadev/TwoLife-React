import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './Home';
import RequestPage from './RequestPage';
import Ads from './Ads';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/myrequests" component={RequestPage} />
          <Route exact path="/myads" component={Ads} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;