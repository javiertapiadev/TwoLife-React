import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../views/Home';
import RequestPage from '../views/RequestPage';
import Ads from '../views/Ads';
import Sell from '../views/Sell';
import SignUp from '../views/SignUp';
import IndividualAd from '../views/IndividualAd';
import Login from '../views/Login'

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/sell" component={Sell} />
          <Route exact path="/myrequests" component={RequestPage} />
          <Route exact path="/ads" component={Ads} />
          <Route exact path="/ads/:id" component={IndividualAd} />
          <Route exact path="/login" component={Login} />
          {/* <Route exact path="/myads" component={} /> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;