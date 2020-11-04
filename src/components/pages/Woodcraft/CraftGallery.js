import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useIntersection } from 'react-use';

import Image, { ImageWrapper } from 'components/Image/Image';
import { Container, H2Title } from 'styles/styles';
import { reveal } from 'animations/animations';

const Wrapper = styled(Container)`
  padding: 10rem 0;
`;

const ImgContainer = styled.div`
  width: 75%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 0 auto;

  @media screen and (max-width: 1200px) {
    width: 85%;
  }

  @media screen and (max-width: 576px) {
    width: 95%;
  }

  div {
    overflow: hidden;
    position: relative;
    width: 30%;
    height: 100%;
    margin-bottom: calc(75% / 30);

    div {
      width: 100%;
    }
  }
`;

const CraftGallery = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.3,
  });

  useEffect(() => {
    if (intersection && intersection.isIntersecting) {
      reveal(0, [titleRef.current]);
    }
  }, [intersection]);

  const imgArr = [
    'woodcraft-1.jpg',
    'woodcraft-6.jpg',
    'woodcraft-3.jpg',
    'woodcraft-4.jpg',
    'woodcraft-8.jpg',
    'woodcraft-2.jpg',
    'woodcraft-7.jpg',
    'woodcraft-5.jpg',
    'woodcraft-9.jpg',
  ];

  return (
    <Wrapper ref={sectionRef}>
      <H2Title align="center" ref={titleRef}>
        <span>목공예</span> 작품 갤러리
      </H2Title>
      <ImgContainer>
        {imgArr.map((img, i) => (
          <ImageWrapper key={i}>
            <Image filename={img} alt={`DIY 목공예 작품 ${i + 1}`} />
          </ImageWrapper>
        ))}
      </ImgContainer>
    </Wrapper>
  );
};

export default CraftGallery;
