import React, { useState, useEffect } from 'react';
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import "./index.css";
import Footer from './components/Footer';
import Lottie from 'lottie-react'
import data from './assets/loading.json'

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating an asynchronous operation
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {isLoading ? (
        // Render loading screen or spinner here
        <div className="loading-screen">
          <Lottie animationData={data}></Lottie>
        </div>
      ) : (
        <div className='relative max-h-3xl bg-site bg-no-repeat bg-cover overflow-hidden'>
          <Header />
          <Banner />
          <Nav />
          <Services />
          <About />
          <Work />
          <Footer/>
        </div>
      )}
    </>
  );
};

export default App;
