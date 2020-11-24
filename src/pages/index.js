import React, { useState, useEffect } from 'react';

import AboutSchool from 'components/pages/Home/AboutSchool';
import YoutubeVideo from 'components/YoutubeVideo/YoutubeVideo';
import Features from 'components/pages/Home/Features';
import ImageSlide from 'components/pages/Home/ImageSlide';
import Modal from 'components/Modal/Modal';

import { FixedImg } from 'styles/styles';
import fixedImg from 'assets/images/home-fixed.jpg';

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const HAS_VISITED_BEFORE = localStorage.getItem('hasVisitedBefore');

  useEffect(() => {
    const handleShowModal = () => {
      if (HAS_VISITED_BEFORE && HAS_VISITED_BEFORE > new Date()) {
        return;
      }

      if (!HAS_VISITED_BEFORE) {
        setShowModal(true);
        let expires = new Date();
        expires = expires.setHours(expires.getHours() + 24);
        localStorage.setItem('hasVisitedBefore', expires);
      }
    };

    window.setTimeout(handleShowModal, 2000);
  }, [HAS_VISITED_BEFORE]);

  const handleClose = () => setShowModal(false);

  return (
    <>
      {showModal && <Modal onClose={handleClose} />}
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
