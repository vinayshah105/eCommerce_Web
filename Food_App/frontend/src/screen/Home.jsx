import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Cardlist from '../components/Card';

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Header />

      <div className="d-flex justify-content-between flex-wrap m-5">
        <Cardlist />
        <Cardlist />
        <Cardlist />
        <Cardlist />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
