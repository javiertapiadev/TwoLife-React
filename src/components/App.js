import React from 'react';
import Footer from './Footer';
import Latests from './Latests';
import Background from './Background';
import Populars from './Populars';

const App = () => {
  return (
    <>
      <Background />
      <Populars />
      <Latests />
      <Footer />
    </>
  );
};

export default App;
