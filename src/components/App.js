import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../views/Home';
import Ads from '../views/Ads';
import RequestPage from '../views/RequestPage';
import IndividualAd from '../views/IndividualAd';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/myrequests" component={RequestPage} />
          <Route exact path="/" component={Home} />
          <Route exact path="/ads" component={Ads} />
          <Route exact path="/ads/:id" component={IndividualAd} />
        </Switch>
      </Router>
    </>
  );
}

export default App;