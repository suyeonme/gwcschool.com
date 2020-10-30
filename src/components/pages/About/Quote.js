import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useIntersection } from 'react-use';

import img from 'assets/images/about-quote.jpg';
import { Container, FixedImg } from 'styles/styles';
import { reveal } from 'animations/animations';

const TextWrapper = styled.div`
  width: 100%;
  color: #adadad;
  background-color: #111111;
  padding: 12rem 0;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 48rem) {
    padding: 10rem 0;
  }

  @media screen and (max-width: 36rem) {
    padding: 8rem 0;
  }

  @media screen and (max-width: 36rem) {
    padding: 6rem 0;
  }

  p {
    font-size: 1.5rem;
    font-weight: 100;
    transform: translateY(50px);
    opacity: 0;

    @media screen and (max-width: 48rem) {
      font-size: 1.3rem;
    }

    @media screen and (max-width: 36rem) {
      font-size: 1.1rem;
    }

    @media screen and (orientation: landscape) and (max-width: 50.75rem) {
      font-size: 1.1rem;
    }

    @media screen and (max-width: 20rem) {
      font-size: 0.9rem;
    }

    span {
      display: block;
      font-size: 1rem;
      margin-top: 1.5rem;
      font-weight: 300;

      @media screen and (max-width: 36rem) {
        font-size: 0.9rem;
      }

      @media screen and (orientation: landscape) and (max-width: 50.75rem) {
        font-size: 0.9rem;
      }

      @media screen and (max-width: 20rem) {
        font-size: 0.75rem;
      }
    }
  }
`;

const Quote = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.6,
  });

  useEffect(() => {
    if (intersection && intersection.isIntersecting) {
      reveal(0.4, [textRef.current]);
    }
  }, [intersection]);

  return (
    <Container>
      <FixedImg bgImg={img} />
      <TextWrapper ref={sectionRef}>
        <p ref={textRef}>
          자연을 바라보면, <br />
          해답은 언제나 그곳에 있습니다.
          <span>커피카펜터, 김광수</span>
        </p>
      </TextWrapper>
    </Container>
  );
};

export default Quote;
