import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import Image from 'components/Image/Image';
import { Container, H3Category } from 'styles/styles';
import { slideImg } from 'animations/animations';

const Wrapper = styled(Container)`
  margin-top: 13rem;

  @media screen and (orientation: landscape) and (max-width: 50.75rem) {
    margin-top: 8rem;
  }

  @media screen and (max-width: 36rem) {
    margin-top: 8rem;
  }

  @media screen and (max-width: 20rem) {
    margin-top: 6rem;
  }
`;

const ImgWrapper = styled.div`
  width: 70%;
  height: auto;
  margin-left: ${(props) => props.align === 'right' && 'auto'};
  transform: ${(props) =>
    props.align === 'left' ? `translateX(-80px)` : `translateX(80px)`};
  margin-bottom: 13rem;

  &:not(:first-child) {
    margin-top: 10rem;
  }

  @media screen and (orientation: landscape) and (max-width: 50.75rem) {
    margin-bottom: 8rem;
  }

  @media screen and (max-width: 36rem) {
    width: 85%;
    margin-bottom: 8rem;
  }

  @media screen and (orientation: landscape) and (max-width: 36rem) {
    width: 70%;
  }

  @media screen and (max-width: 20rem) {
    margin-bottom: 6rem;
  }
`;

const Title = styled(H3Category)`
  transform: translateY(0);
  opacity: 1;
`;

const Img = ({ el }) => {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    slideImg(sectionRef.current, imgRef.current);
  }, []);

  return (
    <div ref={sectionRef}>
      <ImgWrapper align={el.align} ref={imgRef}>
        <Image filename={el.img} alt={el.alt} />
      </ImgWrapper>
    </div>
  );
};

const ImageGallery = ({ arr, title }) => {
  return (
    <Wrapper>
      <Title align="left">
        <span>{title}</span> 체험 및 교육장
      </Title>
      {arr.map((el, i) => (
        <Img key={i} el={el} />
      ))}
    </Wrapper>
  );
};

export default ImageGallery;
