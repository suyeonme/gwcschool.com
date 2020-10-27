import React from 'react';

import Information from 'components/pages/ContactUs/Information';
import Map from 'components/pages/ContactUs/Map';

const ContactUs = () => {
  const leftArr = ['전화 번호', '이메일'];
  const rightArr = ['영업 시간', '계좌', '오시는 길'];

  const touristSpots = [
    '대황강 출렁다리',
    '섬진강 기차마을',
    '태안사',
    '죽곡 카누 캠핑장',
    '봉정 계곡(차로 5분)',
    '섬진강-물놀이(차로 15분)',
    '하동마을',
  ];

  return (
    <>
      <Information firArr={leftArr} secArr={rightArr} />
      <Map arr={touristSpots} />
    </>
  );
};

export default ContactUs;
