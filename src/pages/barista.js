import React from 'react';

import fixedImg from 'assets/images/barista-fixed.jpg';
import centerImg1 from 'assets/images/barista-12.jpg';
import centerImg2 from 'assets/images/barista-13.jpg';
import reviewImg1 from 'assets/images/barista-6.jpg';
import reviewImg2 from 'assets/images/barista-7.jpg';
import reviewImg3 from 'assets/images/barista-8.jpg';
import reviewImg4 from 'assets/images/barista-9.jpg';
import reviewImg5 from 'assets/images/barista-10.jpg';
import reviewImg6 from 'assets/images/barista-11.jpg';

import { FixedImg } from 'styles/styles';
import Description from 'components/pages/Barista/Description';
import CTA from 'components/pages/Barista/CTA';
import Certificate from 'components/pages/Barista/Certificate';
import Courses from 'components/pages/Barista/Courses';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Review from 'components/Review/Review';

const Barista = () => {
  const imgGalleryArr = [
    { img: centerImg1, alt: '바리스타 체험장 사진 1', align: 'left' },
    { img: centerImg2, alt: '바리스타 체험장 사진 2', align: 'right' },
  ];

  const reviewArr = [
    reviewImg1,
    reviewImg2,
    reviewImg3,
    reviewImg4,
    reviewImg5,
    reviewImg6,
  ];

  return (
    <>
      <Description />
      <CTA />
      <Certificate />
      <FixedImg bgImg={fixedImg} />
      <Courses />
      <ImageGallery arr={imgGalleryArr} />
      <Review arr={reviewArr} altTag="바리스타 체험 및 활동" />
    </>
  );
};

export default Barista;
