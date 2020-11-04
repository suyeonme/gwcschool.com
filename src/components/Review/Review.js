import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import Image, { ImageWrapper } from 'components/Image/Image';
import { Container, H3Category } from 'styles/styles';
import { reveal } from 'animations/animations';

const Wrapper = styled(Container)`
  margin-bottom: 10rem;
`;

const Row = styled.div`
  width: 70%;
  margin: 0 auto;
  color: #394744;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    width: 80%;
  }

  @media screen and (max-width: 576px) {
    width: 100%;
  }
`;

const ImgWrapper = styled(ImageWrapper)`
  width: 25%;
  height: 25%;
  margin: 1.5rem;

  @media screen and (max-width: 576px) {
    margin: 1rem;
    width: 35%;
    height: 35%;
  }

  @media screen and (orientation: landscape) and (max-width: 576px) {
    width: 25%;
    height: 25%;
  }
`;

const Label = styled.p`
  font-size: 1.4rem;
  text-align: center;
`;

const Review = ({ arr, altTag }) => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    reveal(0, sectionRef.current, titleRef.current);
  }, []);

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
