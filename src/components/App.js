import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import {
  Home,
  RequestPage,
  Ads,
  Sell,
  SignUp,
  IndividualAd
} from '../views';

const WrappedRoutes = () => {
  return (
    <Layout>
      <Route exact path="/" component={Home} />
      <Route exact path="/sell" component={Sell} />
      <Route exact path="/ads" component={Ads}/>
      <Route exact path="/ads/:id" component={IndividualAd} />
      <Route exact path="/myrequests" component={RequestPage} />
      {/* <Route exact path="/myads" component={} /> */}
    </Layout>
  )
}

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/signup" component={SignUp} />
          <Route component={WrappedRoutes}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;