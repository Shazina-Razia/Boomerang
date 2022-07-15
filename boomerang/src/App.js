import React from 'react';
import About from './Comonents/About';
import Clients from './Comonents/Clients';
import End from './Comonents/End';
import Footer from './Comonents/Footer';
import Herosection from './Comonents/Herosection';
import Images from './Comonents/Images';
import Navbar from './Comonents/Navbar'
import Portfolio from './Comonents/Portfolio';
import Post from './Comonents/Post';
import Services from './Comonents/Services';
import Team from './Comonents/Team';
import Testimonials from './Comonents/Testimonials';
function App() {
  return (
    <>
    <Navbar/>
    <Herosection/>
    <About/>
    <Portfolio/>
    <Services/>
    <Team/>
    <Testimonials/>
    <Clients/>
    <Post/>
    <Images/>
    <Footer/>
    <End/>
    </>
  );
}

export default App;
