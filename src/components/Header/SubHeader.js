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
    font-size: 5.8rem;
    margin-bottom: 1.3rem;
    font-weight: 900;

    @media screen and (orientation: landscape) and (max-width: 50.75rem) {
      font-size: 3.8rem;
    }

    @media screen and (max-width: 48rem) {
      font-size: 4.8rem;
    }

    @media screen and (orientation: landscape) and (max-width: 48rem) {
      font-size: 3.8rem;
    }

    @media screen and (max-width: 36rem) {
      font-size: 3.3rem;
    }

    @media screen and (max-width: 20rem) {
      font-size: 2.8rem;
    }
  }

  h2 {
    font-size: 1.9rem;
    font-weight: 100;

    @media screen and (orientation: landscape) and (max-width: 50.75rem) {
      font-size: 1.3rem;
    }

    @media screen and (max-width: 48rem) {
      font-size: 1.5rem;
    }

    @media screen and (orientation: landscape) and (max-width: 48rem) {
      font-size: 1.3rem;
    }

    @media screen and (max-width: 36rem) {
      font-size: 1rem;
      line-height: 1.5;
    }

    @media screen and (max-width: 20rem) {
      font-size: 0.9rem;
    }
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
  if (path === '/about') obj = aboutHeader;
  if (path === '/barista') obj = baristaHeader;
  if (path === '/woodcraft') obj = woodHeader;
  if (path === '/facilities') obj = facilitiesHeader;
  if (path === '/contact-us') obj = contactHeader;
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
