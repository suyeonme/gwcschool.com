import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import img from 'assets/images/about-quote.jpg';
import { Container, FixedImg } from 'styles/styles';
import { reveal } from 'animations/animations';

const TextWrapper = styled.div`
  width: 100%;
  color: #adadad;
  background-color: #111111;
  padding: 15rem 0;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 2rem;
    font-weight: 100;
    transform: translateY(50px);
    opacity: 0;

    span {
      display: block;
      font-size: 1.7rem;
      margin-top: 1.5rem;
      font-weight: 300;
    }
  }
`;

const Quote = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    reveal(0.4, sectionRef.current, textRef.current);
  }, []);

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
