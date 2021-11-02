import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '../views/Home';
import RequestPage from '../views/RequestPage';
import Ads from '../views/Ads';
import ImageUpload from './ImageUpload';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/myrequests" component={RequestPage} />
          <Route exact path="/myads" component={Ads} />
          <Route exact path="/" component={Home} />
          <Route exact path="/form" component={ImageUpload} />
        </Switch>
      </Router>
    </>
  );
}

export default App;