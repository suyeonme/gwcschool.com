import React from 'react';

import centerImg1 from 'assets/images/wood-6.jpg';
import centerImg2 from 'assets/images/wood-7.jpg';
import centerImg3 from 'assets/images/wood-8.jpg';
import reviewImg1 from 'assets/images/wood-13.jpg';
import reviewImg2 from 'assets/images/wood-14.jpg';
import reviewImg3 from 'assets/images/wood-11.jpg';
import reviewImg4 from 'assets/images/wood-12.jpg';
import reviewImg5 from 'assets/images/wood-9.jpg';
import reviewImg6 from 'assets/images/wood-10.jpg';

import Description from 'components/pages/Woodcraft/Description';
import OnedayClass from 'components/pages/Woodcraft/OnedayClass';
import Courses from 'components/pages/Woodcraft/Courses';
import CraftGallery from 'components/pages/Woodcraft/CraftGallery';
import Benefits from 'components/pages/Woodcraft/Benefits';

import ImageGallery from 'components/ImageGallery/ImageGallery';
import Review from 'components/Review/Review';

const Woodcraft = () => {
  const imgGalleryArr = [
    { img: centerImg1, alt: '목공예 체험장 사진 1', align: 'left' },
    { img: centerImg2, alt: '목공예 체험장 사진 2', align: 'right' },
    { img: centerImg3, alt: '목공예 체험장 사진 3', align: 'left' },
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
      <OnedayClass />
      <Courses />
      <CraftGallery />
      <Benefits />
      <ImageGallery arr={imgGalleryArr} />
      <Review arr={reviewArr} altTag="목공예 체험 및 활동" />
    </>
  );
};

export default Woodcraft;
