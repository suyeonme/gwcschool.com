import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useIntersection } from 'react-use';
import gsap from 'gsap';

import BgImage from 'components/BgImage/BgImage';
import { Container } from 'styles/styles';

const Wrapper = styled(Container)`
  height: 70vh;
  position: relative;

  @media screen and (max-width: 64rem) {
    height: 40vh;
  }

  @media screen and (orientation: landscape) and (max-width: 64rem) {
    height: 70vh;
  }

  @media screen and (max-width: 36rem) {
    height: 50vh;
  }

  @media screen and (orientation: landscape) and (max-width: 36rem) {
    height: 80vh;
  }

  p {
    display: block;
    width: 75%;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    opacity: 0;
    transform: translate(-50%, 60px);

    @media screen and (max-width: 36rem) {
      width: 85%;
    }
  }
`;

const Description = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  });

  useEffect(() => {
    if (intersection && intersection.isIntersecting) {
      gsap.to(textRef.current, {
        y: '-50%',
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
      });
    }
  }, [intersection]);

  return (
    <Wrapper ref={sectionRef}>
      <BgImage filename="barista-description.jpg" height="100%" />
      <p ref={textRef}>
        오늘날 커피는 우리 삶 깊숙히 대중적 음료로 자리 잡았지만, 커피전문점의
        이름으로 맛도 향도 비슷한 커피가 거리 곳곳에 즐비합니다. 제대로 된 커피
        맛을 느끼고 싶지만 어디서 어떻게 시작 해야 할지 막막해하시는 분들이
        많습니다. 곡성 목공예커피체험관에서 전문 바리스타와 함께 나만의
        ‘건강하고 맛있는 커피’를 직접 만들고 제대로 된 커피의 맛을 즐겨보세요.
      </p>
    </Wrapper>
  );
};

export default Description;
