import React from 'react';

import Description from 'components/pages/Woodcraft/Description';
import OnedayClass from 'components/pages/Woodcraft/OnedayClass';
// import Courses from 'components/pages/Woodcraft/Courses';
import CraftGallery from 'components/pages/Woodcraft/CraftGallery';
import Benefits from 'components/pages/Woodcraft/Benefits';

import ImageGallery from 'components/ImageGallery/ImageGallery';
import Review from 'components/Review/Review';

const Woodcraft = () => {
  const imgGalleryArr = [
    { img: 'wood-6.jpg', alt: '목공예 체험장 사진 1', align: 'left' },
    { img: 'wood-7.jpg', alt: '목공예 체험장 사진 2', align: 'right' },
    { img: 'wood-8.jpg', alt: '목공예 체험장 사진 3', align: 'left' },
  ];

  const reviewArr = [
    'wood-13.jpg',
    'wood-14.jpg',
    'wood-11.jpg',
    'wood-12.jpg',
    'wood-9.jpg',
    'wood-10.jpg',
  ];

  return (
    <>
      <Description />
      <OnedayClass />
      {/* <Courses /> */}
      <CraftGallery />
      <Benefits />
      <ImageGallery arr={imgGalleryArr} />
      <Review arr={reviewArr} altTag="목공예 체험 및 활동" />
    </>
  );
};

export default Woodcraft;
