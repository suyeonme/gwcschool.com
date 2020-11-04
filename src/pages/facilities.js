import React, { useState } from 'react';
import styled from 'styled-components';

import Facility from 'components/pages/Facilities/Facility';

const Container = styled.section`
  width: 100%;
  height: auto;
  overflow: hidden;
`;

const Facilities = () => {
  const [bgColor, setBgColor] = useState('#efebe6');

  const facilites = [
    {
      title: 'Outdoor',
      img: 'facility-1.jpg',
      alt: '곡성 목공예커피체험관 야외 캠핑',
      des:
        '해가 저물면 야외에서 사랑하는 사람들과 함께 캠핑을 즐겨보세요. 야외 바베큐장과 다양한 텐트가 준비되어 있습니다.',
      info1: '텐트대여 및 캠핑장비는 문의',
      info2: '오시는 길에, 석곡에서 흑돼지를 사오시면 더욱 좋아요.',
      align: 'left',
      bgColor: '#ceddc3',
    },
    {
      title: 'Rooms',
      img: 'facility-2.jpg',
      alt: '곡성 목공예커피체험관 민박',
      des: '편히 쉬어가실 수 있는 아늑한 민박 3개동이 준비되어 있습니다.',
      info1: '민박 숙박은 문의',
      info2: '조리시설 및 단체샤워장 완비',
      align: 'right',
      bgColor: '#E0D3C3',
    },
    {
      title: 'Seminar hall',
      img: 'facility-3.jpg',
      alt: '곡성 목공예커피체험관 세미나장',
      des:
        '세미나장에서 체험활동 및 워크샵등 다양한 활동을 진행하실 수 있습니다.',
      align: 'left',
      bgColor: '#A4C5C5',
    },
    {
      title: 'Art gallery',
      img: 'facility-4.jpg',
      alt: '곡성 목공예커피체험관 서예관',
      des:
        '운암 조용민 선생님의 제자가 직접 가르치는 아름다운 서예를 체험해보세요.',
      info1: '서예 수업은 문의',
      align: 'right',
      bgColor: '#D8B9C3',
    },
  ];

  return (
    <Container bgColor={bgColor}>
      {facilites.map((facility, i) => (
        <Facility facility={facility} setBgColor={setBgColor} key={i} />
      ))}
    </Container>
  );
};

export default Facilities;
