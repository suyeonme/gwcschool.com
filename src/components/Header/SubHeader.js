import React from 'react';
import styled from 'styled-components';

import BgImage from 'components/BgImage/BgImage';

const Container = styled.div`
  width: 100%;
  height: auto;
  min-height: 80vh;
  overflow: hidden;
  position: relative;
`;

const TextWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #efebe6;
  text-align: center;

  h1 {
    font-size: 9rem;
    margin-bottom: 1.3rem;
    font-weight: 900;

    @media screen and (max-width: 576px) {
      font-size: 7.5rem;
    }
  }

  h2 {
    font-size: 2.5rem;
    font-weight: 100;
  }
`;

const SubHeader = ({ path }) => {
  const aboutHeader = {
    filename: 'about-header.jpg',
    title: 'About',
    subTitle: '조용한 산 마을, 자연 그대로',
  };
  const baristaHeader = {
    filename: 'barista-header.jpg',
    title: 'Barista',
    subTitle: '커피 한 잔의 힘',
  };
  const woodHeader = {
    filename: 'woodcraft-header.jpg',
    title: 'Woodcraft',
    subTitle: '아날로그적 사고로 생각하다',
  };
  const facilitiesHeader = {
    filename: 'facility-header.jpg',
    title: 'Facilities',
    subTitle: '우리만의 공간',
  };
  const contactHeader = {
    filename: 'contact-header.jpg',
    title: 'Contact Us',
    subTitle: '곡성 목공예&커피 체험관',
  };

  let obj;

  switch (path) {
    case '/about':
      obj = aboutHeader;
      break;
    case '/barista':
      obj = baristaHeader;
      break;
    case '/woodcraft':
      obj = woodHeader;
      break;
    case '/facilities':
      obj = facilitiesHeader;
      break;
    case '/contact-us':
      obj = contactHeader;
      break;
    default:
      return null;
  }

  const { filename, title, subTitle } = obj;

  return (
    <Container>
      <BgImage filename={filename} height="80vh" />
      <TextWrapper>
        <h1>{title}</h1>
        <h2>{subTitle}</h2>
      </TextWrapper>
    </Container>
  );
};

export default SubHeader;
