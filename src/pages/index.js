import React from 'react';

import AboutSchool from 'components/pages/Home/AboutSchool';
import HomeVideo from 'components/pages/Home/HomeVideo';
import Features from 'components/pages/Home/Features';
import Carousel from 'components/pages/Home/Carousel';

import { FixedImg } from 'styles/styles';
import fixedImg from 'assets/images/home-fixed.jpg';

const Home = () => {
  return (
    <>
      <AboutSchool />
      <HomeVideo />
      <Features />
      <FixedImg bgImg={fixedImg} />
      <Carousel />
    </>
  );
};

export default Home;
