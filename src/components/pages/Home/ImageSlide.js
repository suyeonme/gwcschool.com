import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import img1 from 'assets/images/event-1.jpg';
import img2 from 'assets/images/event-2.jpg';
import img3 from 'assets/images/event-3.jpg';
import img4 from 'assets/images/event-4.jpg';
import img5 from 'assets/images/event-5.jpg';
import img6 from 'assets/images/event-6.jpg';
import img7 from 'assets/images/event-7.jpg';
import img8 from 'assets/images/event-8.jpg';

import Carousel from 'components/Carousel/Carousel';
import { Container, H2Title, H3Category } from 'styles/styles';
import { reveal } from 'animations/animations';

const Wrapper = styled(Container)`
  padding: 10rem 0;
`;

const TextWrapper = styled.div`
  margin-bottom: 3rem;

  @media screen and (max-width: 576px) {
    margin-bottom: 0;
  }
`;

const Title = styled(H2Title)`
  margin-bottom: 1rem;

  @media screen and (max-width: 576px) {
    padding: 3rem;
  }
`;

const ImageSlide = () => {
  const imgArr = [img1, img2, img3, img4, img5, img6, img7, img8];

  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subTitleRef = useRef(null);
  const carouselRef = useRef(null);

  useEffect(() => {
    reveal(
      0.2,
      sectionRef.current,
      titleRef.current,
      subTitleRef.current,
      carouselRef.current,
    );
  }, []);

  return (
    <Wrapper ref={sectionRef}>
      <TextWrapper>
        <Title ref={titleRef} align="center">
          곡성 목공예&커피 체험관 <span>이모저모</span>
        </Title>
        <H3Category ref={subTitleRef} align="center">
          행사진행 및 프로그램 체험
        </H3Category>
      </TextWrapper>
      <Carousel arr={imgArr} ref={carouselRef} />
    </Wrapper>
  );
};

export default ImageSlide;
