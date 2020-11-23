import React, { useState } from 'react';

import AboutSchool from 'components/pages/Home/AboutSchool';
import YoutubeVideo from 'components/YoutubeVideo/YoutubeVideo';
import Features from 'components/pages/Home/Features';
import ImageSlide from 'components/pages/Home/ImageSlide';
import Modal from 'components/Modal/Modal';

import { FixedImg } from 'styles/styles';
import fixedImg from 'assets/images/home-fixed.jpg';

const Home = () => {
  const [isClosed, setIsClosed] = useState(false);

  return (
    <>
      {!isClosed && <Modal onClose={setIsClosed} />}
      <AboutSchool />
      <YoutubeVideo
        title="곡성목공예&커피체험관"
        subTitle="둘러보기"
        src="https://www.youtube.com/embed/4r4Aw8HvFPQ"
      />
      <YoutubeVideo
        title="목공예&바리스타"
        subTitle="체험 후기"
        src="https://www.youtube.com/embed/9NYM69IPVP8?start=499"
      />
      <Features />
      <FixedImg bgImg={fixedImg} />
      <ImageSlide />
    </>
  );
};

export default Home;
