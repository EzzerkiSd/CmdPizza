import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import ChooseUrFav from './Components/ChooseUrFav';
import SecondLanding from './Components/SecondLanding';
import Sweets from './Components/Sweets';
import Footer from './Components/Footer';


function App() {
  return (
    <>
      <Router>
        <LandingPage />
        <ChooseUrFav />
        <SecondLanding />
        <Sweets />
        <Footer />
      </Router>
    </>
  );
}

export default App;