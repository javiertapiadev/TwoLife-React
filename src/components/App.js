import React from 'react';

import Ads from './Ads';
//import AdCard from './AdCard';

import '../css/AdCard.css';

const App = () => {
  return (
    <React.Fragment>
    <div>
      TwoLifes - Anuncios actuales
      {/*<AdCard/>*/}
    </div>
    <Ads/>
    </React.Fragment>
  );
};

export default App;
