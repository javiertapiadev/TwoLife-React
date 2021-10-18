import React from 'react';

import Header from './Header';
import Ads from './Ads';
//import AdCard from './AdCard';

import '../css/AdsStyle.css';

const App = () => {
  return (
    <React.Fragment>
    <Header/>
    <Ads/>
    </React.Fragment>
  );
};

export default App;
