import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useIntersection } from 'react-use';

import Image from 'components/Image/Image';
import { Container } from 'styles/styles';
import { slideImg } from 'animations/animations';

const ImgWrapper = styled.div`
  width: 70%;
  height: auto;
  margin-bottom: 13rem;
  margin-top: 10rem;
  margin-left: ${(props) => props.align === 'right' && 'auto'};
  transform: ${(props) =>
    props.align === 'left' ? `translateX(-80px)` : `translateX(80px)`};

  @media screen and (max-width: 36rem) {
    width: 100%;
    margin-bottom: 4rem;
    margin-top: 4rem;
  }

  @media screen and (orientation: landscape) and (max-width: 36rem) {
    width: 70%;
    margin-bottom: 13rem;
    margin-top: 10rem;
  }
`;

const Img = ({ el }) => {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);

  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.8,
  });

  useEffect(() => {
    if (intersection && intersection.isIntersecting) {
      slideImg(imgRef.current);
    }
  }, [intersection]);

  return (
    <div ref={sectionRef}>
      <ImgWrapper align={el.align} ref={imgRef}>
        <Image filename={el.img} alt={el.alt} />
      </ImgWrapper>
    </div>
  );
};

const ImageGallery = ({ arr }) => {
  return (
    <Container>
      {arr.map((el, i) => (
        <Img key={i} el={el} />
      ))}
    </Container>
  );
};

export default ImageGallery;
