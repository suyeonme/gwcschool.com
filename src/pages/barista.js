import React from 'react';

import fixedImg from 'assets/images/barista-fixed.jpg';
import { FixedImg } from 'styles/styles';
import Description from 'components/pages/Barista/Description';
import CTA from 'components/pages/Barista/CTA';
import Certificate from 'components/pages/Barista/Certificate';
import Courses from 'components/pages/Barista/Courses';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Review from 'components/Review/Review';

const Barista = () => {
  const imgGalleryArr = [
    { img: 'barista-12.jpg', alt: '바리스타 체험장 사진 1', align: 'left' },
    { img: 'barista-13.jpg', alt: '바리스타 체험장 사진 2', align: 'right' },
  ];

  const reviewArr = [
    'barista-6.jpg',
    'barista-7.jpg',
    'barista-8.jpg',
    'barista-9.jpg',
    'barista-10.jpg',
    'barista-11.jpg',
  ];

  return (
    <>
      <Description />
      <CTA />
      <Certificate />
      <FixedImg bgImg={fixedImg} />
      <Courses />
      <ImageGallery arr={imgGalleryArr} title="바리스타" />
      <Review arr={reviewArr} altTag="바리스타 체험 및 활동" />
    </>
  );
};

export default Barista;
