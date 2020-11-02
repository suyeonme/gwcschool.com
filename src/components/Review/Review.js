import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useIntersection } from 'react-use';

import Image, { ImageWrapper } from 'components/Image/Image';
import { Container, H3Category } from 'styles/styles';
import { reveal } from 'animations/animations';

const Wrapper = styled(Container)`
  margin-bottom: 6rem;

  @media screen and (max-width: 36rem) {
    margin-bottom: 4rem;
  }
`;

const Row = styled.div`
  width: 70%;
  margin: 0 auto;
  color: #394744;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media screen and (orientation: landscape) and (max-width: 50.75rem) {
    width: 80%;
  }

  @media screen and (max-width: 48rem) {
    width: 80%;
  }

  @media screen and (orientation: landscape) and (max-width: 48rem) {
    width: 90%;
  }

  @media screen and (max-width: 36rem) {
    width: 100%;
  }
`;

const ImgWrapper = styled(ImageWrapper)`
  width: 25%;
  height: 25%;
  margin: 1.5rem;

  @media screen and (max-width: 36rem) {
    margin: 1rem;
    width: 35%;
    height: 35%;
  }

  @media screen and (orientation: landscape) and (max-width: 36rem) {
    width: 25%;
    height: 25%;
  }
`;

const Label = styled.p`
  font-size: 1rem;
  text-align: center;

  @media screen and (max-width: 48rem) {
    font-size: 0.8rem;
  }

  @media screen and (max-width: 20rem) {
    font-size: 0.6rem;
  }
`;

const Review = ({ arr, altTag }) => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  });

  useEffect(() => {
    if (intersection && intersection.isIntersecting) {
      reveal(0, [titleRef.current]);
    }
  }, [intersection]);

  return (
    <Wrapper ref={sectionRef}>
      <H3Category align="center" ref={titleRef}>
        <span>{altTag}</span> 리뷰
      </H3Category>
      <Row>
        {arr.map((img, i) => (
          <ImgWrapper key={i}>
            <Image filename={img} alt={altTag} />
          </ImgWrapper>
        ))}
      </Row>
      <Label>@곡성 목공예커피체험관</Label>
    </Wrapper>
  );
};

export default Review;
