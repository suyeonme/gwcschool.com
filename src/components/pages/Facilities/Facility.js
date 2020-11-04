import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useIntersection } from 'react-use';

import Image from 'components/Image/Image';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  min-height: 100vh;
  padding: 10rem 0;
  display: flex;
  justify-content: ${(props) =>
    props.align === 'right' ? 'flex-start' : 'flex-end'};

  @media screen and (max-width: 1200px) {
    min-height: 50vh;
  }

  @media screen and (max-width: 576px) {
    flex-direction: column;
    justify-content: center;
    min-height: 70vh;
  }

  @media screen and (orientation: landscape) and (max-width: 1024px) {
    min-height: 80vh;
    flex-direction: row;
    justify-content: ${(props) =>
      props.align === 'right' ? 'flex-start' : 'flex-end'};
  }
`;

const TextWrapper = styled.div`
  width: 45%;
  text-align: center;
  padding: 7rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transform: ${(props) =>
    props.align === 'left' ? ' translateX(5%)' : 'translateX(-5%)'};

  @media screen and (max-width: 48rem) {
    width: 50%;
  }

  @media screen and (max-width: 36rem) {
    width: 100%;
    order: ${(props) => props.align === 'left' && 2};
    transform: translateX(0);
  }

  @media screen and (orientation: landscape) and (max-width: 36rem) {
    width: 50%;
    transform: ${(props) =>
      props.align === 'left' ? ' translateX(5%)' : 'translateX(-5%)'};
    order: initial;
  }

  p,
  span {
    display: block;
  }

  h2 {
    font-size: 5rem;
    font-weight: 700;
    color: #323d3b;
    margin-bottom: 3rem;
  }

  span {
    font-size: 1.5rem;
    line-height: 2;
  }
`;

const ImgWrapper = styled.div`
  width: 55%;
  height: auto;
  align-self: flex-start;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: ${(props) => props.align === 'right' && '5%'};
  left: ${(props) => props.align === 'left' && '5%'};

  @media screen and (max-width: 768px) {
    width: 50%;
  }

  @media screen and (max-width: 576px) {
    width: 90%;
    position: static;
    top: 0;
    right: 0;
    left: 0;
    transform: translateY(0);
    order: ${(props) => props.align === 'left' && 1};
    margin: 0 auto;
  }

  @media screen and (orientation: landscape) and (max-width: 576px) {
    width: 50%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${(props) => (props.align === 'right' ? '5%' : 'auto')};
    left: ${(props) => (props.align === 'left' ? '5%' : 'auto')};
    order: initial;
    margin: 0;
  }
`;

const Facility = ({ facility, setBgColor }) => {
  const { title, alt, img, des, info1, info2, align, bgColor } = facility;
  const sectionRef = useRef(null);

  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  });

  useEffect(() => {
    if (intersection && intersection.isIntersecting) {
      setBgColor(bgColor);
    }
  }, [intersection, bgColor, setBgColor]);

  if (align === 'left') {
    return (
      <Wrapper align={align} ref={sectionRef}>
        <TextWrapper align={align}>
          <h2>{title}</h2>
          <p>{des}</p>
          {info1 && <span style={{ marginTop: '3rem' }}>{info1}</span>}
          {info2 && <span>{info2}</span>}
        </TextWrapper>
        <ImgWrapper align={align}>
          <Image filename={img} alt={alt} />
        </ImgWrapper>
      </Wrapper>
    );
  }

  if (align === 'right') {
    return (
      <Wrapper align={align} ref={sectionRef}>
        <ImgWrapper align={align}>
          <Image filename={img} alt={alt} />
        </ImgWrapper>
        <TextWrapper align={align}>
          <h2>{title}</h2>
          <p>{des}</p>
          {info1 && <span style={{ marginTop: '2rem' }}>{info1}</span>}
          {info2 && <span>{info2}</span>}
        </TextWrapper>
      </Wrapper>
    );
  }
};

export default Facility;
