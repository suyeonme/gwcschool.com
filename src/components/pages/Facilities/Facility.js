import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useIntersection } from 'react-use';

import Image from 'components/Image/Image';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  padding: 6rem 0;
  display: flex;
  justify-content: ${(props) =>
    props.align === 'right' ? 'flex-start' : 'flex-end'};
`;

const TextWrapper = styled.div`
  width: 45%;
  height: 100%;
  text-align: center;
  padding: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transform: ${(props) =>
    props.align === 'left' ? ' translateX(5%)' : 'translateX(-5%)'};

  p,
  span {
    display: block;
  }

  h2,
  p {
    margin-bottom: 2rem;
  }

  h2 {
    font-size: 3rem;
    font-weight: 700;
    color: #323d3b;
  }

  span {
    font-size: 0.9rem;
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
          {info1 && <span>{info1}</span>}
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
          {info1 && <span>{info1}</span>}
          {info2 && <span>{info2}</span>}
        </TextWrapper>
      </Wrapper>
    );
  }
};

export default Facility;
